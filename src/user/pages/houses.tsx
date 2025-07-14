import React, { useState } from "react";
import { Search, SearchX } from "lucide-react";
import { photos, properties2, regions } from "../services";
import { HomeCard } from "../components";

export const Houses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHouses = properties2.filter((house) =>
    house.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
            <input
              type="text"
              placeholder="Uy qidirish..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHouses.map((property) => {
            // Viloyat va tuman nomi
            const region =
              regions.find((r) => r.id === property.regionId)?.name ||
              "Noma'lum viloyat";

            // Shu uyga tegishli rasmlar
            const propertyPhotos = photos
              .filter((photo) => photo.propertyId === property.landlordId)
              .sort((a, b) => a.order - b.order);

            const mainPhoto =
              propertyPhotos.find((photo) => photo.isMain) || propertyPhotos[0];

            return (
              <HomeCard
                key={property.id}
                id={property.id}
                image={mainPhoto.url}
                title={property.title}
                isFavorite={false}
                price={property.price}
                description={property.description}
                location={region}
              />
            );
          })}
        </div>

        {filteredHouses.length === 0 && (
          <div className="py-12 flex items-center justify-content-center flex-col ">
            <SearchX className="text-gray-800 w-16 h-16 mb-2" />
            <p className="text-gray-600 text-lg">Hech qanday uy topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
};
