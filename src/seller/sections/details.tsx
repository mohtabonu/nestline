import { useState } from "react"
import {
  MapPin,
  Heart,
  Eye,
  BadgeCheck,
  Sofa,
  PawPrint,
  Clock,
  Edit,
  Trash2,
  ArrowLeft,
} from "lucide-react"
import { useLanguage } from "../auth/language-context"
import { useParams } from "react-router-dom"



export default function PostDetail() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const { id } = useParams<{ id: string }>();
  const { translations } = useLanguage();
const isEditing = false;
  const ad = translations.ads.find((ad) => ad.id === Number(id));

  if (!ad) {
    return <div className="text-center text-red-500 text-lg">Объявление не найдено</div>;
  }


  const handleDelete = () => {
    console.log("Удаляем объявление:", ad.id)
    setShowDeleteConfirm(false)
    // Here you would typically redirect or show a success message
    alert("Объявление удалено!")
  }


  if (!ad) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="text-gray-500 text-lg">Объявление не найдено</div>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться назад
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к объявлениям
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image and Actions */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                  <img
                    src={ad.img || "/placeholder.svg"}
                    alt={ad.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Action Buttons Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <button
                        // onClick={handleEdit}
                        className="px-3 py-1 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-md shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Сохранить
                      </button>
                      <button
                        // onClick={cancelEdit}
                        className="px-3 py-1 bg-gray-600/90 hover:bg-gray-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Отмена
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        // onClick={handleEdit}
                        className="inline-flex items-center px-3 py-1 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-md shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Изменить
                      </button>

                      {!showDeleteConfirm ? (
                        <button
                          onClick={() => setShowDeleteConfirm(true)}
                          className="inline-flex items-center px-3 py-1 bg-gray-800/90 hover:bg-gray-900 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Удалить
                        </button>
                      ) : (
                        <div className="flex gap-1">
                          <button
                            onClick={handleDelete}
                            className="px-3 py-1 bg-gray-900 hover:bg-black text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          >
                            Да
                          </button>
                          <button
                            onClick={() => setShowDeleteConfirm(false)}
                            className="px-3 py-1 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-md shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          >
                            Нет
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-md transition-colors duration-200 ${ad.status === "Активно" ? "bg-gray-800 text-white" : "bg-gray-400 text-white"
                      }`}
                  >
                    {ad.status}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Title and Price */}
                <div className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        // value={editForm.title}
                        // onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        className="w-full text-3xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">$</span>
                        <input
                          type="number"
                          // value={editForm.price}
                          // onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                          className="text-3xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 w-40"
                        />
                        <span className="text-lg font-normal text-gray-600">/ месяц</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-3xl font-bold text-gray-900 leading-tight">{ad.title}</h1>
                      <div className="text-4xl font-bold text-gray-900">
                        ${ad.price.toLocaleString()}
                        <span className="text-lg font-normal text-gray-600 ml-2">/ месяц</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t border-gray-200"></div>

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Описание</h3>
                  {/* {isEditing ? (
                    <textarea
                      // value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      rows={4}
                      className="w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 resize-none"
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{ad.description}</p>
                  )} */}
                </div>

                <div className="border-t border-gray-200"></div>

                {/* Property Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Детали объявления</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">
                        {ad.region}, {ad.district}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <BadgeCheck className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{ad.category}</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Sofa className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{ad.isFurnished ? "С мебелью" : "Без мебели"}</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <PawPrint className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{ad.allowPets ? "Можно с животными" : "Без животных"}</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Мин. срок: {ad.minRentalPeriod} мес.</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200"></div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{ad.views.toLocaleString()} просмотров</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className={`w-4 h-4 `} />
                      <span>{ad.likes.toLocaleString()} лайков</span>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src="/profile.png"
                    alt="Username"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Username</div>
                    <div className="text-sm text-gray-600">Владелец</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Дополнительная информация</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дата публикации:</span>
                    <span className="text-gray-900 font-medium">
                      15.01.2024
                      {/* {new Date(ad.publishedDate).toLocaleDateString("ru-RU")} */}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">ID объявления:</span>
                    <span className="text-gray-900 font-medium">#{ad.id}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Просмотры сегодня:</span>
                    <span className="text-gray-900 font-medium">47</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
