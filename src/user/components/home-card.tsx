import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Wifi, Car, Home, Users } from 'lucide-react';


interface HomeCardProps {
  id: number;
  image: string;
  title: string;
  isFavorite: boolean;
  price: number;
  description: string;
  location: string;
  reviewCount?: number;
  amenities?: string[];
  isFurnished?: boolean;
  allowsPets?: boolean;
}

export const HomeCard: React.FC<HomeCardProps> = ({
  id,
  image,
  title,
  isFavorite,
  price,
  description,
  location,
  amenities = [],
}) => {
  const navigate = useNavigate();
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add favorite logic here
  };

  return (
    <div
      onClick={() => navigate(`/houses/${id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 hover:border-gray-200"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handleFavoriteClick}
            className={`w-12 h-12 rounded-full backdrop-blur-lg transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-110 ${
              isFavorite
                ? "bg-red-500/90 hover:bg-red-600/90 text-white"
                : "bg-white/90 hover:bg-white text-gray-600 hover:text-red-500"
            }`}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>

      </div>

      {/* Content Section */}
      <div className="p-6">


        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-800 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 text-gray-800 text-xs">
                {amenity === 'wifi' && <Wifi className="w-3 h-3" />}
                {amenity === 'parking' && <Car className="w-3 h-3" />}
                {amenity === 'furnished' && <Home className="w-3 h-3" />}
                {amenity === 'family' && <Users className="w-3 h-3" />}
                <span className="capitalize">{amenity}</span>
              </div>
            ))}
          </div>
        )}

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-800 text-sm mb-4">
          <MapPin className="w-4 h-4 text-gray-700" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">
              {price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">so'm/kun</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};