"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Trash2, Upload, Star, Move, ImageIcon } from "lucide-react"

interface PreviewImage {
  file: File
  url: string
}

const ImageUploadSection: React.FC = () => {
  const [images, setImages] = useState<PreviewImage[]>([])
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [mainImageIndex, setMainImageIndex] = useState<number | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
  const MAX_FILES = 10

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return `Файл "${file.name}" слишком большой. Максимальный размер: 5MB`
    }
    if (!file.type.match(/^image\/(jpeg|jpg|png|webp)$/)) {
      return `Файл "${file.name}" имеет неподдерживаемый формат`
    }
    return null
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const files = Array.from(e.target.files)
    setError(null)

    // Check total files limit
    if (images.length + files.length > MAX_FILES) {
      setError(`Максимальное количество файлов: ${MAX_FILES}`)
      e.target.value = ""
      return
    }

    // Validate each file
    for (const file of files) {
      const validationError = validateFile(file)
      if (validationError) {
        setError(validationError)
        e.target.value = ""
        return
      }
    }

    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))

    setImages((prev) => [...prev, ...newPreviews])

    // Set first image as main if no main image is set
    if (mainImageIndex === null && newPreviews.length > 0) {
      setMainImageIndex(images.length)
    }

    e.target.value = ""
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length === 0) return

    setError(null)

    // Check total files limit
    if (images.length + files.length > MAX_FILES) {
      setError(`Максимальное количество файлов: ${MAX_FILES}`)
      return
    }

    // Validate each file
    for (const file of files) {
      const validationError = validateFile(file)
      if (validationError) {
        setError(validationError)
        return
      }
    }

    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))

    setImages((prev) => [...prev, ...newPreviews])

    // Set first image as main if no main image is set
    if (mainImageIndex === null && newPreviews.length > 0) {
      setMainImageIndex(images.length)
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => {
      const toRemove = prev[index]
      URL.revokeObjectURL(toRemove.url)
      return prev.filter((_, i) => i !== index)
    })

    if (mainImageIndex === index) {
      // Set new main image to first available image
      setMainImageIndex(images.length > 1 ? (index === 0 ? 0 : 0) : null)
    } else if (mainImageIndex !== null && mainImageIndex > index) {
      setMainImageIndex(mainImageIndex - 1)
    }

    setError(null)
  }

  const handleImageDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDragIndex(index)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleImageDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverIndex(index)
  }

  const handleImageDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault()
    if (dragIndex === null || dragIndex === dropIndex) return

    setImages((prev) => {
      const imgs = [...prev]
      const [moved] = imgs.splice(dragIndex, 1)
      imgs.splice(dropIndex, 0, moved)
      return imgs
    })

    // Update main image index if needed
    if (mainImageIndex === dragIndex) {
      setMainImageIndex(dropIndex)
    } else if (mainImageIndex !== null) {
      if (dragIndex < mainImageIndex && dropIndex >= mainImageIndex) {
        setMainImageIndex(mainImageIndex - 1)
      } else if (dragIndex > mainImageIndex && dropIndex <= mainImageIndex) {
        setMainImageIndex(mainImageIndex + 1)
      }
    }

    setDragIndex(null)
    setDragOverIndex(null)
  }

  const setAsMainImage = (index: number) => {
    setMainImageIndex(index)
  }

  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url))
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Фотографии товара
          <span className="text-gray-800">*</span>
        </h3>
        <p className="text-gray-600 text-sm">Загрузите до {MAX_FILES} фотографий. Первая фотография будет главной.</p>
      </div>

      {/* File Requirements */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-2">Требования к файлам:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Форматы:</span> JPEG, JPG, PNG, WebP
          </div>
          <div>
            <span className="font-medium">Максимальный размер:</span> 5MB на файл
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-gray-800 text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`mb-6 border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragOver ? "border-gray-400 bg-gray-50" : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={() => setIsDragOver(false)}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Перетащите файлы сюда или нажмите для выбора</h4>
        <p className="text-gray-500 mb-4">Поддерживаются JPEG, PNG, WebP файлы до 5MB</p>
        <label className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2">
          <Upload className="w-4 h-4 mr-2" />
          Выбрать файлы
          <input
            type="file"
            multiple
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">
              Загруженные фотографии ({images.length}/{MAX_FILES})
            </h4>
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <Move className="w-4 h-4" />
              Перетащите для изменения порядка
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleImageDragStart(e, index)}
                onDragOver={(e) => handleImageDragOver(e, index)}
                onDragLeave={handleImageDragLeave}
                onDrop={(e) => handleImageDrop(e, index)}
                className={`relative group cursor-move transform transition-all duration-200 hover:scale-105 ${
                  dragOverIndex === index ? "scale-105 ring-2 ring-gray-400" : ""
                } ${dragIndex === index ? "opacity-50" : ""}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={img.url || "/placeholder.svg"}
                    alt={`Uploaded ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-200 ${
                      mainImageIndex === index
                        ? "ring-2 ring-gray-800"
                        : "ring-1 ring-gray-200 group-hover:ring-gray-300"
                    }`}
                  />

                  {/* Main Image Badge */}
                  {mainImageIndex === index && (
                    <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md font-medium shadow-md">
                      Главное
                    </div>
                  )}

                  {/* Overlay with Actions */}
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                      {/* Set as Main Button */}
                      {mainImageIndex !== index && (
                        <button
                          type="button"
                          onClick={() => setAsMainImage(index)}
                          className="p-2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          title="Сделать главным"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      )}

                      {/* Delete Button */}
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="p-2 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        title="Удалить"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Number */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-md">
                    {index + 1}
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-2 text-xs text-gray-600 truncate">{img.file.name}</div>
                <div className="text-xs text-gray-500">{(img.file.size / 1024 / 1024).toFixed(1)} MB</div>
              </div>
            ))}

            {/* Add More Button */}
            {images.length < MAX_FILES && (
              <label className="aspect-[3/4] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group">
                <div className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                  <Upload className="w-8 h-8 mb-2" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-700 text-center px-2 transition-colors duration-200">
                  Добавить еще
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      {images.length === 0 && (
        <div className="text-center py-8">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Пока что фотографий нет</p>
          <p className="text-gray-400 text-sm mt-1">Загрузите первую фотографию, чтобы начать</p>
        </div>
      )}
    </div>
  )
}

export default ImageUploadSection
