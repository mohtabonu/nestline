import { Heart, MapPin } from "lucide-react";
import type React from "react";

interface HomeCardProps {
    id: number
    image: string
    title: string
    isFavorite: boolean
    price: number
    description: string
    location: string
}

export const HomeCard: React.FC<HomeCardProps> = ({id, image,title,isFavorite,price,description,location}) => {
  return (
    <div
      key={id}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-55 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`w-10 h-10 rounded-full backdrop-blur-sm transition-all duration-200 flex items-center justify-center ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-white/90 hover:bg-white text-gray-600 hover:text-red-500"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
            />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-800">
            {price.toLocaleString()}
          </span>
          <span className="text-gray-500 ml-1">so'm/kun</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
