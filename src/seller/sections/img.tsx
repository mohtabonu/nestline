import React, { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';

interface PreviewImage {
  file: File;
  url: string;
}

const ImageUploadSection: React.FC = () => {
  const [images, setImages] = useState<PreviewImage[]>([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [mainImageIndex, setMainImageIndex] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(prev => [...prev, ...newPreviews]);
    e.target.value = '';
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const toRemove = prev[index];
      URL.revokeObjectURL(toRemove.url);
      return prev.filter((_, i) => i !== index);
    });
    if (mainImageIndex === index) setMainImageIndex(null);
    else if (mainImageIndex !== null && mainImageIndex > index) setMainImageIndex(mainImageIndex - 1);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === dropIndex) return;
    setImages(prev => {
      const imgs = [...prev];
      const [moved] = imgs.splice(dragIndex, 1);
      imgs.splice(dropIndex, 0, moved);
      return imgs;
    });
    setDragIndex(null);
    setDragOverIndex(null);
  };

  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      images.forEach(img => URL.revokeObjectURL(img.url));
    };
  }, [images]);

  return (
    <div className="my-5 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Общие фотографии товара <span className="text-red-500">*</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="space-y-2">
          <h4 className="font-medium text-gray-800">Формат</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• JPEG, JPG, WebP, PNG</li>
            <li>• 1080×1440 (3 на 4)</li>
            <li>• Не больше 5 Мб</li>
            <li>• Велики и с разных ракурсов</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-purple-600">Подробности в инструкции</span>
        </div>

        <div className="flex flex-wrap gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              draggable
              onDragStart={e => handleDragStart(e, index)}
              onDragOver={e => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={e => handleDrop(e, index)}
              className={`relative group transform transition duration-200 hover:scale-105 bg-white ${
                dragOverIndex === index ? 'ring-4 ring-purple-400' : ''
              }`}
            >
              <img
                src={img.url}
                alt={`Uploaded ${index + 1}`}
                className={`w-24 h-32 object-cover rounded-lg border-2 ${
                  mainImageIndex === index ? 'border-yellow-400' : 'border-gray-300'
                }`}
              />

              {mainImageIndex === index && (
                <div className="absolute top-1 left-1 bg-yellow-400 text-white text-xs px-1 rounded">
                  Главное
                </div>
              )}

              <button
                type="button"
                onClick={() => setMainImageIndex(index)}
                className="absolute bottom-1 left-1 bg-white bg-opacity-75 text-gray-800 text-xs px-1 rounded hover:bg-opacity-100 transition"
              >
                ⭐
              </button>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-lg transition">
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="opacity-0 group-hover:opacity-100 absolute inset-0 m-auto w-8 h-8 flex items-center justify-center text-white"
                >
                  <Trash size={20} />
                </button>
              </div>
            </div>
          ))}

          <label className="w-24 h-32 border-2 border-dashed border-purple-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all duration-200">
            <div className="text-purple-400 text-2xl mb-2">+</div>
            <span className="text-sm text-purple-600 text-center">Добавить фото</span>
            <input
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
