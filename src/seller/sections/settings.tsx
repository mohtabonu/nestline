"use client"

import { useState } from "react"
import { User, Home, Bell, Shield, Settings, Eye, EyeOff, Save, Camera } from "lucide-react"

const SellerSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
  })
  const [profileData, setProfileData] = useState({
    name: "Иван Петров",
    email: "ivan.petrov@email.com",
    phone: "+998 99 123-45-67",
    company: "Петров Недвижимость",
    experience: "5 лет",
    commission: "3%",
  })

  const tabs = [
    { id: "profile", label: "Профиль", icon: User },
    { id: "properties", label: "Недвижимость", icon: Home },
    { id: "notifications", label: "Уведомления", icon: Bell },
    { id: "security", label: "Безопасность", icon: Shield },
    { id: "general", label: "Общие", icon: Settings },
  ]

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (type: string) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type as keyof typeof prev] }))
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Основная информация</h3>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-600" />
                  </div>
                  <button className="absolute -bottom-1 -right-1 bg-gray-100 rounded-full p-1 hover:bg-gray-800 transform hover:scale-110 transition-all duration-200">
                    <Camera className="w-4 h-4 text-black hover:text-white" />
                  </button>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800">{profileData.name}</h4>
                  <p className="text-sm text-gray-600">{profileData.company}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Имя</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Телефон</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Компания</label>
                  <input
                    type="text"
                    value={profileData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Профессиональная информация</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Опыт работы</label>
                  <input
                    type="text"
                    value={profileData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Комиссия</label>
                  <input
                    type="text"
                    value={profileData.commission}
                    onChange={(e) => handleInputChange("commission", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-200 bg-white text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      case "properties":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Управление недвижимостью</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-gray-800">24</div>
                  <div className="text-sm text-gray-600">Активных объявлений</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-gray-800">8</div>
                  <div className="text-sm text-gray-600">Квартир</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl font-bold text-gray-800">16</div>
                  <div className="text-sm text-gray-600">Домов</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Автоматическое продление объявлений
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200">
                    <option>Через 30 дней</option>
                    <option>Через 60 дней</option>
                    <option>Через 90 дней</option>
                    <option>Отключено</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Минимальная цена аренды</label>
                  <input
                    type="number"
                    placeholder="50000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      case "notifications":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Настройки уведомлений</h3>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div>
                      <div className="font-medium text-gray-800">
                        {key === "email" && "Email уведомления"}
                        {key === "push" && "Push уведомления"}
                        {key === "marketing" && "Маркетинговые уведомления"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {key === "email" && "Получать уведомления на email"}
                        {key === "push" && "Получать push-уведомления в браузере"}
                        {key === "marketing" && "Получать информацию о новых функциях"}
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                        value ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "security":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Безопасность аккаунта</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Текущий пароль</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 pr-10"
                      placeholder="Введите текущий пароль"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Новый пароль</label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введите новый пароль"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Подтвердите пароль</label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="Подтвердите новый пароль"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      case "general":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Общие настройки</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Язык интерфейса</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200">
                    <option>Русский</option>
                    <option>English</option>
                    <option>Қазақша</option>
                    <option>O'zbek</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Часовой пояс</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200">
                    <option>UTC+5 (Ташкент)</option>
                    <option>UTC+3 (Москва)</option>
                    <option>UTC+6 (Алматы)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Валюта</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200">
                    <option>UZS (сум)</option>
                    <option>USD (доллар)</option>
                    <option>RUB (рубль)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Настройки</h1>
          <p className="text-gray-600 mt-2">Управление профилем и настройками аккаунта</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 transform hover:scale-105 ${
                        activeTab === tab.id ? "bg-gray-800 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                <Save className="w-5 h-5" />
                <span>Сохранить изменения</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerSettingsPage
