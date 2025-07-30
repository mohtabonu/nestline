"use client"

import type React from "react"
import { useState } from "react"
import {
  Heart,
  Eye,
  Star,
  MapPin,
  Calendar,
  Package,
  TrendingUp,
  Search,
  Grid,
  List,
} from "lucide-react"
import { useLanguage } from "../auth/language-context"

interface Product {
  id: number
  title: string
  description: string
  price: number
  img: string
  views: number
  likes: number
  isLiked: boolean
  category: string
  status: string
  region: string
  district: string
  allowPets: boolean
  isFurnished: boolean
  minRentalPeriod: number
}

interface Review {
  id: number
  author: string
  rating: number
  comment: string
  date: string
  avatar: string
}

const AnaliticPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"products" | "reviews" | "about">("products")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const { translations } = useLanguage()

  // Mock seller data
  const sellerData = {
    name: "Алексей Петров",
    avatar: "/profile.png",
    rating: 4.8,
    totalReviews: 247,
    memberSince: "2022",
    location: "Ташкент, Узбекистан",
    description: "Профессиональный продавец недвижимости. Гарантирую качество и честность в каждой сделке.",
    stats: {
      totalProducts: translations.ads.length,
      activeProducts: translations.ads.filter((ad) => ad.status === "Активно" || ad.status === "Faol").length,
      soldProducts: 67,
      totalViews: translations.ads.reduce((sum, ad) => sum + ad.views, 0),
      totalLikes: translations.ads.reduce((sum, ad) => sum + ad.likes, 0),
      followers: 342,
    },
  }

  // Convert ads from translations to products format
  const [products, setProducts] = useState<Product[]>(
    translations.ads.map((ad) => ({
      ...ad,
      isLiked: false,
      image: ad.img,
    })),
  )

  const reviews: Review[] = [
    {
      id: 1,
      author: "Мария К.",
      rating: 5,
      comment: "Отличный продавец! Квартира соответствует описанию, быстрое оформление.",
      date: "2024-06-15",
      avatar: "/profile.png",
    },
    {
      id: 2,
      author: "Дмитрий С.",
      rating: 4,
      comment: "Всё хорошо, но можно было бы лучше показать квартиру.",
      date: "2024-06-10",
      avatar: "/profile.png",
    },
    {
      id: 3,
      author: "Елена В.",
      rating: 5,
      comment: "Рекомендую! Очень довольна арендой.",
      date: "2024-06-08",
      avatar: "/profile.png",
    },
  ]

  const handleLike = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              isLiked: !product.isLiked,
              likes: product.isLiked ? product.likes - 1 : product.likes + 1,
            }
          : product,
      ),
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      filterCategory === "all" || product.category.toLowerCase().includes(filterCategory.toLowerCase())
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-gray-800 text-gray-800" : "text-gray-300"}`} />
    ))
  }

  const getStatusColor = (status: string) => {
    if (status === "Активно" || status === "Faol") {
      return "bg-gray-800 text-white"
    } else if (status === "Не активно" || status === "Faol emas") {
      return "bg-gray-400 text-white"
    } else {
      return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={sellerData.avatar || "/placeholder.svg"}
                  alt={sellerData.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">{sellerData.name}</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {renderStars(Math.floor(sellerData.rating))}
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      {sellerData.rating} ({sellerData.totalReviews} отзывов)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {sellerData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />С {sellerData.memberSince} года
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Package className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Объявления</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.stats.totalProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Активные</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.stats.activeProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Eye className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Просмотры</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Heart className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Лайки</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.stats.totalLikes.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Star className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Рейтинг</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.rating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "products", label: "Объявления", count: sellerData.stats.totalProducts },
              { id: "reviews", label: "Отзывы", count: sellerData.totalReviews },
              { id: "about", label: "О продавце", count: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "products" | "reviews" | "about")}
                className={`py-4 px-2 border-b-2 font-semibold text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-xs font-medium">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "products" && (
          <div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={translations.navbar.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm hover:border-gray-400 transition-colors duration-200"
                />
              </div>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm hover:border-gray-400 transition-colors duration-200"
              >
                <option value="all">Все категории</option>
                <option value="квартира">Квартира</option>
                <option value="дом">Дом</option>
                <option value="комната">Комната</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-colors duration-200 ${
                    viewMode === "grid" ? "bg-gray-800 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-colors duration-200 ${
                    viewMode === "list" ? "bg-gray-800 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 overflow-hidden ${
                    viewMode === "list" ? "flex gap-6 p-6" : ""
                  }`}
                >
                  <div className={viewMode === "list" ? "flex-shrink-0" : ""}>
                    <div className="relative">
                      <img
                        src={product.img || "/placeholder.svg"}
                        alt={product.title}
                        className={`object-cover ${viewMode === "list" ? "w-32 h-32 rounded-lg" : "w-full h-48"}`}
                      />
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          product.status,
                        )}`}
                      >
                        {product.status}
                      </div>
                    </div>
                  </div>

                  <div className={viewMode === "list" ? "flex-1 min-w-0" : "p-6"}>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">${product.price}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {product.region}, {product.district}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {product.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          {product.likes.toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={() => handleLike(product.id)}
                        className={`p-2 rounded-full transition-all duration-200 ${
                          product.isLiked ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${product.isLiked ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-semibold text-gray-900">{review.author}</span>
                      <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">О продавце</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{sellerData.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Контактная информация</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    {sellerData.location}
                  </p>
                  <p className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    На платформе с {sellerData.memberSince} года
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Статистика</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Продано объявлений:</span>
                    <span className="font-semibold text-gray-900">{sellerData.stats.soldProducts}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Средний рейтинг:</span>
                    <span className="font-semibold text-gray-900">{sellerData.rating}/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Всего отзывов:</span>
                    <span className="font-semibold text-gray-900">{sellerData.totalReviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnaliticPage
