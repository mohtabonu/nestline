import {
  Waves,
  CircleParking,
  WashingMachine,
  Snowflake,
  Flame,
  Tv,
  ThermometerSun,
  UtensilsCrossed,
  ChevronRight,
} from "lucide-react";
import type React from "react";

export const AmenitiesSection: React.FC = () => {
  const amenities = [
    { icon: Waves, label: "Hovuz" },
    { icon: CircleParking, label: "Bepul avtoturargoh" },
    { icon: WashingMachine, label: "Kir yuvish mashinasi" },
    { icon: Snowflake, label: "Konditsioner" },
    { icon: Flame, label: "Kamin" },
    { icon: Tv, label: "Televizor" },
    { icon: ThermometerSun, label: "Isitish" },
    { icon: UtensilsCrossed, label: "Barbekyu" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-8 my-8">
      <div className="container max-w-8xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Qulayliklarni tanlang
          </h2>
          <p className="text-gray-600 text-lg">
            Ijaraga olinadigan uyda qanday qulayliklar bo'lishini hohlaysiz
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-800 font-medium text-md">
                      {amenity.label}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
