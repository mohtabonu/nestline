"use client"

import type React from "react"

import { useState } from "react"
import {
  Home,
  MapPin,
  FileText,
  DollarSign,
  PawPrint,
  Sofa,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  Save,
  RotateCcw,
} from "lucide-react"
import ImageUploadSection from "./img"

interface FormData {
  propertyType: string
  region: string
  district: string
  title: string
  description: string
  price: string
  allowsPets: string
  isFurnished: string
  furniture: string[]
  minimumRentPeriod: string
}

interface Option {
  value: string
  label: string
}

interface FormErrors {
  [key: string]: string
}

const Add = () => {
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    region: "",
    district: "",
    title: "",
    description: "",
    price: "",
    allowsPets: "",
    isFurnished: "",
    furniture: [],
    minimumRentPeriod: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())

  const propertyTypes: Option[] = [
    { value: "apartment", label: "Квартира" },
    { value: "house", label: "Дом" },
    { value: "land", label: "Участок" },
  ]

  const regions: Option[] = [
    { value: "tashkent", label: "Ташкент" },
    { value: "andijan", label: "Андижанская область" },
    { value: "bukhara", label: "Бухарская область" },
    { value: "fergana", label: "Ферганская область" },
    { value: "jizzakh", label: "Джизакская область" },
    { value: "kashkadarya", label: "Кашкадарьинская область" },
    { value: "khorezm", label: "Хорезмская область" },
    { value: "namangan", label: "Наманганская область" },
    { value: "navoi", label: "Навоийская область" },
    { value: "samarkand", label: "Самаркандская область" },
    { value: "sirdarya", label: "Сырдарьинская область" },
    { value: "surkhandarya", label: "Сурхандарьинская область" },
    { value: "tashkent-region", label: "Ташкентская область" },
    { value: "karakalpakstan", label: "Каракалпакстан" },
  ]

  const districts: Record<string, Option[]> = {
    tashkent: [
      { value: "chilanzar", label: "Чиланзар" },
      { value: "yunusabad", label: "Юнусабад" },
      { value: "shaykhantakhur", label: "Шайхантахур" },
      { value: "mirobod", label: "Мирободский" },
      { value: "mirzo-ulugbek", label: "Мирзо-Улугбек" },
      { value: "yashnabad", label: "Яшнабад" },
      { value: "almazar", label: "Алмазар" },
      { value: "bektemir", label: "Бектемир" },
      { value: "uchtepa", label: "Учтепа" },
      { value: "yakkasaray", label: "Яккасарай" },
      { value: "sergeli", label: "Сергели" },
    ],
    andijan: [
      { value: "andijan-city", label: "г. Андижан" },
      { value: "asaka", label: "Асака" },
      { value: "balikchi", label: "Балыкчи" },
      { value: "boz", label: "Боз" },
      { value: "bulakbashi", label: "Булакбаши" },
    ],
    bukhara: [
      { value: "bukhara-city", label: "г. Бухара" },
      { value: "alat", label: "Алат" },
      { value: "gijduvan", label: "Гиждуван" },
      { value: "jondor", label: "Жондор" },
      { value: "kagan", label: "Каган" },
    ],
    fergana: [
      { value: "fergana-city", label: "г. Фергана" },
      { value: "besharik", label: "Бешарик" },
      { value: "danga", label: "Данга" },
      { value: "furkat", label: "Фуркат" },
      { value: "kuva", label: "Кува" },
    ],
  }

  const furnitureOptions: Option[] = [
    { value: "sofa", label: "Диван" },
    { value: "bed", label: "Кровать" },
    { value: "wardrobe", label: "Шкаф" },
    { value: "table", label: "Стол" },
    { value: "chairs", label: "Стулья" },
    { value: "refrigerator", label: "Холодильник" },
    { value: "washing-machine", label: "Стиральная машина" },
    { value: "tv", label: "Телевизор" },
    { value: "air-conditioner", label: "Кондиционер" },
    { value: "microwave", label: "Микроволновка" },
  ]

  const rentPeriods: Option[] = [
    { value: "1-month", label: "1 месяц" },
    { value: "3-months", label: "3 месяца" },
    { value: "6-months", label: "6 месяцев" },
    { value: "12-months", label: "12 месяцев" },
  ]

  // Validation functions
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "title":
        if (!value.trim()) return "Название обязательно"
        if (value.length < 10) return "Название должно содержать минимум 10 символов"
        if (value.length > 100) return "Название не должно превышать 100 символов"
        return ""
      case "description":
        if (!value.trim()) return "Описание обязательно"
        if (value.length < 20) return "Описание должно содержать минимум 20 символов"
        if (value.length > 1000) return "Описание не должно превышать 1000 символов"
        return ""
      case "price":
        { if (!value) return "Цена обязательна"
        const price = Number(value)
        if (isNaN(price) || price <= 0) return "Цена должна быть положительным числом"
        if (price > 1000000000) return "Цена слишком высокая"
        return "" }
      case "propertyType":
      case "region":
      case "district":
      case "allowsPets":
      case "isFurnished":
      case "minimumRentPeriod":
        if (!value) return "Это поле обязательно"
        return ""
      default:
        return ""
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate all required fields
    Object.keys(formData).forEach((key) => {
      if (key !== "furniture") {
        const error = validateField(key, formData[key as keyof FormData] as string)
        if (error) newErrors[key] = error
      }
    })

    // Special validation for furniture when furnished
    if (formData.isFurnished === "yes" && formData.furniture.length === 0) {
      newErrors.furniture = "Выберите хотя бы один предмет мебели"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "region" && { district: "" }),
      ...(name === "isFurnished" && value === "no" && { furniture: [] }),
    }))

    // Mark field as touched
    setTouchedFields((prev) => new Set(prev).add(name))

    // Clear success state when form is modified
    if (isSuccess) setIsSuccess(false)

    // Validate field in real-time if it was touched
    if (touchedFields.has(name) || name === "region") {
      const error = validateField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error,
        ...(name === "region" && { district: "" }),
      }))
    }
  }

  const handleFurnitureChange = (furnitureValue: string): void => {
    setFormData((prev) => ({
      ...prev,
      furniture: prev.furniture.includes(furnitureValue)
        ? prev.furniture.filter((item: string) => item !== furnitureValue)
        : [...prev.furniture, furnitureValue],
    }))

    // Clear furniture error if at least one item is selected
    if (errors.furniture) {
      const newFurniture = formData.furniture.includes(furnitureValue)
        ? formData.furniture.filter((item: string) => item !== furnitureValue)
        : [...formData.furniture, furnitureValue]

      if (newFurniture.length > 0) {
        setErrors((prev) => ({ ...prev, furniture: "" }))
      }
    }

    if (isSuccess) setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    // Mark all fields as touched
    const allFields = new Set(Object.keys(formData))
    setTouchedFields(allFields)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form Data:", formData)
      setIsSuccess(true)

      // Reset form after successful submission
      setTimeout(() => {
        handleReset()
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ submit: "Произошла ошибка при отправке формы. Попробуйте еще раз." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = (): void => {
    setFormData({
      propertyType: "",
      region: "",
      district: "",
      title: "",
      description: "",
      price: "",
      allowsPets: "",
      isFurnished: "",
      furniture: [],
      minimumRentPeriod: "",
    })
    setErrors({})
    setTouchedFields(new Set())
    setIsSuccess(false)
  }

  const getFieldError = (fieldName: string): string => {
    return touchedFields.has(fieldName) ? errors[fieldName] || "" : ""
  }

  const inputClasses = (fieldName: string): string => {
    const hasError = getFieldError(fieldName)
    return `w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 shadow-sm ${
      hasError
        ? "border-gray-400 focus:ring-gray-500 focus:border-gray-500"
        : "border-gray-300 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-400"
    }`
  }

  const selectClasses = (fieldName: string): string => {
    const hasError = getFieldError(fieldName)
    return `w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all duration-200 shadow-sm ${
      hasError
        ? "border-gray-400 focus:ring-gray-500 focus:border-gray-500"
        : "border-gray-300 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-400"
    }`
  }

  const labelClasses = "block text-sm font-semibold text-gray-800 mb-2"

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200 my-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Объявление успешно добавлено!</h2>
          <p className="text-gray-600">Ваше объявление будет опубликовано после модерации.</p>
          <button
            onClick={handleReset}
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Добавить еще объявление
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200 my-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Добавить объявление</h1>
        <p className="text-gray-600">Заполните все поля для создания объявления</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Property Type */}
        <div className="space-y-2">
          <label className={labelClasses}>
            <Home className="w-4 h-4 inline mr-2" />
            Тип недвижимости *
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            required
            className={selectClasses("propertyType")}
          >
            <option value="">Выберите тип</option>
            {propertyTypes.map((type: Option) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {getFieldError("propertyType") && (
            <p className="text-gray-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError("propertyType")}
            </p>
          )}
        </div>

        {/* Location Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Region */}
          <div className="space-y-2">
            <label className={labelClasses}>
              <MapPin className="w-4 h-4 inline mr-2" />
              Регион *
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              required
              className={selectClasses("region")}
            >
              <option value="">Выберите регион</option>
              {regions.map((region: Option) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
            {getFieldError("region") && (
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {getFieldError("region")}
              </p>
            )}
          </div>

          {/* District */}
          {formData.region && districts[formData.region] && (
            <div className="space-y-2">
              <label className={labelClasses}>Район *</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
                className={selectClasses("district")}
              >
                <option value="">Выберите район</option>
                {districts[formData.region].map((district: Option) => (
                  <option key={district.value} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
              {getFieldError("district") && (
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError("district")}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-2">
          <label className={labelClasses}>
            <FileText className="w-4 h-4 inline mr-2" />
            Название *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            placeholder="Введите название объявления (10-100 символов)"
            className={inputClasses("title")}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {getFieldError("title") && (
                <span className="text-gray-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError("title")}
                </span>
              )}
            </span>
            <span>{formData.title.length}/100</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className={labelClasses}>Описание *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            placeholder="Введите подробное описание (20-1000 символов)"
            rows={5}
            className={inputClasses("description")}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {getFieldError("description") && (
                <span className="text-gray-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError("description")}
                </span>
              )}
            </span>
            <span>{formData.description.length}/1000</span>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className={labelClasses}>
            <DollarSign className="w-4 h-4 inline mr-2" />
            Цена (сум) *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            placeholder="Введите цену"
            min="0"
            className={inputClasses("price")}
          />
          {getFieldError("price") && (
            <p className="text-gray-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError("price")}
            </p>
          )}
        </div>

        {/* Property Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Allows Pets */}
          <div className="space-y-2">
            <label className={labelClasses}>
              <PawPrint className="w-4 h-4 inline mr-2" />
              Разрешены домашние животные *
            </label>
            <select
              name="allowsPets"
              value={formData.allowsPets}
              onChange={handleInputChange}
              required
              className={selectClasses("allowsPets")}
            >
              <option value="">Выберите</option>
              <option value="yes">Да</option>
              <option value="no">Нет</option>
            </select>
            {getFieldError("allowsPets") && (
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {getFieldError("allowsPets")}
              </p>
            )}
          </div>

          {/* Is Furnished */}
          <div className="space-y-2">
            <label className={labelClasses}>
              <Sofa className="w-4 h-4 inline mr-2" />
              Мебелирована *
            </label>
            <select
              name="isFurnished"
              value={formData.isFurnished}
              onChange={handleInputChange}
              required
              className={selectClasses("isFurnished")}
            >
              <option value="">Выберите</option>
              <option value="yes">Да</option>
              <option value="no">Нет</option>
            </select>
            {getFieldError("isFurnished") && (
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {getFieldError("isFurnished")}
              </p>
            )}
          </div>
        </div>

        {/* Furniture Options */}
        {formData.isFurnished === "yes" && (
          <div className="space-y-4">
            <label className={labelClasses}>Мебель *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {furnitureOptions.map((furniture: Option) => (
                <label
                  key={furniture.value}
                  className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.furniture.includes(furniture.value)}
                    onChange={() => handleFurnitureChange(furniture.value)}
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                  />
                  <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-200">
                    {furniture.label}
                  </span>
                </label>
              ))}
            </div>
            {getFieldError("furniture") && (
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {getFieldError("furniture")}
              </p>
            )}
          </div>
        )}

        {/* Image Upload Section */}
        <ImageUploadSection />

        {/* Minimum Rent Period */}
        <div className="space-y-2">
          <label className={labelClasses}>
            <Calendar className="w-4 h-4 inline mr-2" />
            Минимальный срок аренды *
          </label>
          <select
            name="minimumRentPeriod"
            value={formData.minimumRentPeriod}
            onChange={handleInputChange}
            required
            className={selectClasses("minimumRentPeriod")}
          >
            <option value="">Выберите срок</option>
            {rentPeriods.map((period: Option) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          {getFieldError("minimumRentPeriod") && (
            <p className="text-gray-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError("minimumRentPeriod")}
            </p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-gray-800 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {errors.submit}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Добавить объявление
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4 mr-2 inline" />
            Сбросить форму
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
