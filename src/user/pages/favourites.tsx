import React from "react";
import { useNavigate } from "react-router";
import { Filter, Heart } from "lucide-react";
import { HomeCard } from "../components";
import { photos, properties2, regions } from "../services";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const favorites = properties2.filter(() => Boolean(false));
  const filterOptions = [
    { value: "all", label: "Barchasi" },
    { value: "apartment", label: "Kvartiralar" },
    { value: "house", label: "Hovlilar" },
  ];

  return (
    <div className="min-h-screen">
      <div className="container max-w-8xl mx-auto px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">
                Tanlanganlar
              </h1>
              <p className="text-gray-700">
                Sizga yoqqan {favorites.length} ta joy
              </p>
            </div>
            <Select>
              <SelectTrigger className="bg-gray-900 w-[150px] text-white px-4 py-6">
                <Filter className="w-4 h-4 text-gray-400" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 mt-2">
                {filterOptions.map((option) => (
                  <SelectItem
                    className="text-white"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <hr className="mb-8 h-1 border-gray-600" />
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hozircha tanlanganlar yo'q
            </h3>
            <p className="text-gray-600">
              Yoqqan joylaringizni yurakcha belgisiga bosib saqlang
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {favorites.map((item) => {
              // Viloyat va tuman nomi
              const region =
                regions.find((r) => r.id === item.regionId)?.name ||
                "Noma'lum viloyat";

              // Shu uyga tegishli rasmlar
              const propertyPhotos = photos
                .filter((photo) => photo.propertyId === item.landlordId)
                .sort((a, b) => a.order - b.order);

              const mainPhoto =
                propertyPhotos.find((photo) => photo.isMain) ||
                propertyPhotos[0];
              return (
                <HomeCard
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                  price={item.price}
                  image={mainPhoto.url}
                  isFavorite={true}
                  location={region}
                />
              );
            })}
          </div>
        )}

        <div className="mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all"
                onClick={() => navigate("/search")}
              >
                Qidirishga qaytish
              </button>
              <button
                className="bg-white border border-gray-800 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-all"
                onClick={() => navigate("/search")}
              >
                Filtrlarni o'zgartirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
