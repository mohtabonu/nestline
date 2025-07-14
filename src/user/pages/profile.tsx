import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Home,
  MapPin,
  Phone,
  Mail,
  Settings,
  Bell,
  Shield,
  Heart,
} from "lucide-react";

import { photos, properties2, regions, user } from "../services";
import { HomeCard } from "../components";
import { useNavigate } from "react-router";
import { AuthContext } from "../context";

const favoriteProperties = properties2.filter(() => Boolean(false));

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const { profile,methods } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="bg-gray-800 text-white text-2xl">
                      {profile?.userName
                        .split(" ")
                        .map((word) => word[0].toUpperCase())
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {profile?.userName}
                  </h2>
                  <p className="text-gray-600 mb-2">{profile?.email}</p>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-800"
                  >
                    Tasdiqlangan foydalanuvchi
                  </Badge>
                </div>

                <Separator className="my-6" />

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "profile" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-4 w-4 mr-3" />
                    Shaxsiy ma'lumotlar
                  </Button>
                  <Button
                    variant={activeTab === "rentals" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("rentals")}
                  >
                    <Home className="h-4 w-4 mr-3" />
                    Ijara tarixi
                  </Button>
                  <Button
                    variant={activeTab === "favorites" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("favorites")}
                  >
                    <Heart className="h-4 w-4 mr-3" />
                    Tanlanganlar
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Sozlamalar
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">
                      Shaxsiy ma'lumotlar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          To'liq ism
                        </label>
                        <p className="text-gray-900 mt-1">{profile?.userName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Telefon raqam
                        </label>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-gray-900">{profile?.phoneNumber}</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="flex items-center mt-1">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-gray-900">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Manzil
                        </label>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-gray-900">Toshkent, O'zbekiston</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-white text-[20px] font-semibold">
                          Uy egasi bo'ling
                        </h1>
                        <p className="text-gray-500 mt-2">
                          O'z uyingizni ijaraga bering va qo'shimcha daromad
                          oling
                        </p>
                      </div>
                      <button className="flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                        <Home className="w-5 h-5 mr-2" />
                        Seller paneliga o'tish
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "rentals" && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Ijara tarixi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h1 className="text-center text-gray-600 text-[20px] font-semibold">
                      Ijara tarixi hozircha bosh
                    </h1>
                    {/* {[1, 2, 3].map((rental) => (
                      <div
                        key={rental}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex space-x-4">
                            <img
                              src="/placeholder.svg?height=80&width=80"
                              alt="Uy rasmi"
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                Zamonaviy 2-xonali kvartira
                              </h3>
                              <p className="text-gray-600 flex items-center mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                Chilonzor tumani, Toshkent
                              </p>
                              <p className="text-gray-600 flex items-center mt-1">
                                <Calendar className="h-4 w-4 mr-1" />
                                15 Yan 2024 - 15 Fev 2024
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              Yakunlangan
                            </Badge>
                            <p className="text-lg font-semibold text-gray-900 mt-2">
                              $800/oy
                            </p>
                          </div>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "favorites" && (
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">
                    Tanlangan uylar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {favoriteProperties.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteProperties.slice(0, 4).map((property) => {
                        // Viloyat va tuman nomi
                        const region =
                          regions.find((r) => r.id === property.regionId)
                            ?.name || "Noma'lum viloyat";

                        // Shu uyga tegishli rasmlar
                        const propertyPhotos = photos
                          .filter(
                            (photo) => photo.propertyId === property.landlordId
                          )
                          .sort((a, b) => a.order - b.order);

                        const mainPhoto =
                          propertyPhotos.find((photo) => photo.isMain) ||
                          propertyPhotos[0];

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
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                      <Heart className="w-16 h-16 text-gray-800 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Hozircha tanlanganlar yo'q
                      </h3>
                      <p className="text-gray-600">
                        Yoqqan joylaringizni yurakcha belgisiga bosib saqlang
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigate("/favourites")}>
                    Barchasini ko'rish
                  </Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">
                      Hisob sozlamalari
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Email bildirishnomalar
                          </p>
                          <p className="text-sm text-gray-600">
                            Yangi takliflar haqida xabar olish
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Sozlash
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Xavfsizlik
                          </p>
                          <p className="text-sm text-gray-600">
                            Parol va ikki bosqichli autentifikatsiya
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Sozlash
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className=" text-red-600">Xavfli zona</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Hisodan chiqish
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                           Hisobingizdan chiqasiz, ammo istalgan vaqtda qayta kirishingiz mumkin.
                        </p>  
                        <Button onClick={methods.logout} variant="destructive">Hisobdan chiqish</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
