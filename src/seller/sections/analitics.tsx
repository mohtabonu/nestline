import React, { useState } from 'react';
import { Heart, Eye, Star, MessageCircle, Share2, MapPin, Calendar, Users, Package, TrendingUp, Search, Grid, List } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  views: number;
  likes: number;
  isLiked: boolean;
  category: string;
  status: 'active' | 'sold' | 'pending';
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

const AnaliticPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'reviews' | 'about'>('products');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data - заменить на данные из API
  const sellerData = {
    name: 'Алексей Петров',
    avatar: '/profile.png',
    rating: 4.8,
    totalReviews: 247,
    memberSince: '2022',
    location: 'Москва, Россия',
    description: 'Профессиональный продавец электроники и гаджетов. Гарантирую качество и быструю доставку.',
    stats: {
      totalProducts: 156,
      activeProducts: 89,
      soldProducts: 67,
      totalViews: 15420,
      totalLikes: 2850,
      followers: 342
    }
  };

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=200&fit=crop',
      views: 1250,
      likes: 89,
      isLiked: false,
      category: 'electronics',
      status: 'active'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop',
      views: 890,
      likes: 156,
      isLiked: true,
      category: 'electronics',
      status: 'active'
    },
    {
      id: 3,
      name: 'Nike Air Max 270',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
      views: 456,
      likes: 67,
      isLiked: false,
      category: 'fashion',
      status: 'sold'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop',
      views: 678,
      likes: 43,
      isLiked: false,
      category: 'electronics',
      status: 'pending'
    }
  ]);

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Мария К.',
      rating: 5,
      comment: 'Отличный продавец! Товар соответствует описанию, быстрая доставка.',
      date: '2024-06-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      author: 'Дмитрий С.',
      rating: 4,
      comment: 'Всё хорошо, но упаковка могла бы быть лучше.',
      date: '2024-06-10',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      author: 'Елена В.',
      rating: 5,
      comment: 'Рекомендую! Очень довольна покупкой.',
      date: '2024-06-08',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    }
  ];

  const handleLike = (productId: number) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { 
            ...product, 
            isLiked: !product.isLiked,
            likes: product.isLiked ? product.likes - 1 : product.likes + 1
          }
        : product
    ));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активно';
      case 'sold': return 'Продано';
      case 'pending': return 'Ожидает';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src={sellerData.avatar}
                alt={sellerData.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{sellerData.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    {renderStars(Math.floor(sellerData.rating))}
                    <span className="text-sm text-gray-600 ml-1">
                      {sellerData.rating} ({sellerData.totalReviews})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {sellerData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    С {sellerData.memberSince}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 ml-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4" />
                Написать
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Товары</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.stats.totalProducts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Активные</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.stats.activeProducts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Просмотры</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Лайки</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.stats.totalLikes.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Подписчики</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.stats.followers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Рейтинг</p>
                <p className="text-xl font-semibold text-gray-900">{sellerData.rating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'products', label: 'Товары', count: sellerData.stats.totalProducts },
              { id: 'reviews', label: 'Отзывы', count: sellerData.totalReviews },
              { id: 'about', label: 'О продавце', count: null }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "products" | "reviews" | "about")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">Все категории</option>
                <option value="electronics">Электроника</option>
                <option value="fashion">Одежда</option>
                <option value="home">Дом</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
              {filteredProducts.map(product => (
                <div key={product.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex gap-4 p-4' : ''}`}>
                  <div className={viewMode === 'list' ? 'flex-shrink-0' : ''}>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover ${viewMode === 'list' ? 'w-24 h-24' : 'w-full h-48'} rounded-lg`}
                      />
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {getStatusText(product.status)}
                      </div>
                    </div>
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1 min-w-0' : 'p-4'}>
                    <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {product.price.toLocaleString()} ₽
                    </p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {product.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {product.likes}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleLike(product.id)}
                        className={`p-2 rounded-full transition-colors ${
                          product.isLiked 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${product.isLiked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">{review.author}</span>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">О продавце</h3>
            <p className="text-gray-700 leading-relaxed">{sellerData.description}</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Контактная информация</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {sellerData.location}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    На платформе с {sellerData.memberSince} года
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Статистика</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Продано товаров:</span>
                    <span className="font-medium">{sellerData.stats.soldProducts}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Средний рейтинг:</span>
                    <span className="font-medium">{sellerData.rating}/5</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Всего отзывов:</span>
                    <span className="font-medium">{sellerData.totalReviews}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnaliticPage;