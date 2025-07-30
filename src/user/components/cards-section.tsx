import type React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HomeCard } from "./home-card";
import { photos, properties2, regions } from "../services";

export const CardsSection: React.FC = () => {
  return (
    <div className="py-16 px-8">
      <div className="container max-w-8xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Eng yaxshi takliflar
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {properties2.slice(0, 4).map((property) => {
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

        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 mx-auto group">
            <Link to={"/houses"}>Barcha takliflarni ko'rish</Link>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
