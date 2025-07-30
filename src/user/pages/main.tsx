import type React from "react";
import { AmenitiesSection, CardsSection } from "../components";

export const Main: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="container max-w-8xl mx-auto px-6 my-10">
        {/* section-1 */}
        <div className="flex items-center relative">
          <div
            className="relative z-10 left-[150px] bg-white p-6 rounded-2xl w-[350px]"
            style={{
              boxShadow: "0 0 8px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h1 className="text-2xl max-w-[300px] font-bold mb-1 text-gray-800">
              Nestline-da turar joy toping
            </h1>
            <p className="text-[14px] text-gray-600 mb-4 max-w-[280px]">
              Oʻzingizga mos xonadonni tanlang — bu endi juda oson.
            </p>

            <div className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="location"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Qaysi shahar yoki viloyat?
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Masalan: Toshkent"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="district"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Qaysi tuman?
                </label>
                <input
                  id="district"
                  type="text"
                  placeholder="Masalan: Chilonzor"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="priceFrom"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Narx (dan)
                  </label>
                  <input
                    id="priceFrom"
                    type="text"
                    placeholder="100 000 so'm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="priceTo"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Narx (gacha)
                  </label>
                  <input
                    id="priceTo"
                    type="text"
                    placeholder="1 000 000 so'm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all shadow-sm"
                  />
                </div>
              </div>

              <button className="mt-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold py-3 rounded-lg hover:from-slate-700 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Qidirish
              </button>
            </div>
          </div>

          <div
            className="relative z-0 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: 'url("/assets/living.jpg")',
              width: "1000px",
              height: "530px", 
            }}
            aria-label="Turar joy rasmi"
          ></div>
        </div>
        {/* section-2 */}
        <div className="my-30 px-6">
          <h1 className="text-center mb-8 text-3xl font-bold text-gray-800">
            Har qanday o'lchamdagi uy-joy
          </h1>
          <div className="flex items-start justify-center gap-8 ">
            <div className="flex-1 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="mb-4">
                <img
                  src="/assets/home.png"
                  alt="Дома"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1 text-gray-800">
                  Uylar
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  Oila yoki guruh bo‘lib yashash uchun keng va mustaqil
                  xonadonlar
                </p>
              </div>
            </div>

            <div className="flex-1 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="mb-4">
                <img
                  src="/assets/dom.png"
                  alt="Квартиры"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1 text-gray-800">
                  Kvartiralar
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  Markazga yaqin, qulay joylashuvdagi turar joylar.
                </p>
              </div>
            </div>

            <div className="flex-1 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="mb-4">
                <img
                  src="/assets/room.png"
                  alt="Комнаты"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1 text-gray-800">
                  Honalar
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  Shaxsiy xona, lekin hammom yoki oshxona umumiy bo‘lishi
                  mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <AmenitiesSection />
      {/* section-4 */}
      <CardsSection />
    </div>
  );
};
