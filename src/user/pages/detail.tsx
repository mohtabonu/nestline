import { useNavigate, useParams } from "react-router";
import type React from "react";
import {
  MapPin,
  Car,
  Wifi,
  Tv,
  Coffee,
  Utensils,
  Heart,
  Share2,
  Phone,
  Mail,
  MessageCircle,
  CircleUserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { type LatLngExpression } from "leaflet";

import { districts, photos, properties2, regions } from "../services";

const landlord = {
  name: "Akmal Karimov",
  phone: "+998 90 123 45 67",
  email: "akmal.karimov@email.com",
  avatar: "/placeholder.svg?height=60&width=60",
};
const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Tv, label: "Televizor" },
  { icon: Coffee, label: "Kofe mashinasi" },
  { icon: Utensils, label: "To'liq oshxona" },
  { icon: Car, label: "Parking" },
];

export const Home: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties2.find((item) => item.id === Number(id));

  //  const propertyLandlord = landlords.find(item => item.userId === property?.landlordId )

  const region = regions.find((item) => item.id === property!.regionId)?.name;
  const district = districts.find(
    (item) => item.id === property!.districtId
  )?.name;

  const propertyPhotos = photos
    .filter((photo) => photo.propertyId === property!.id)
    .sort((a, b) => a.order - b.order);
  const mainPhoto =
    propertyPhotos.find((photo) => photo.isMain) || propertyPhotos[0];

  const position: LatLngExpression = [property!.latitude, property!.longitude];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-gray-600"
              onClick={() => navigate("/houses")}
            >
              ← Orqaga
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Ulashish
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Saqlash
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <img
                  src={mainPhoto.url}
                  alt="Asosiy rasm"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {propertyPhotos.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Rasm ${index + 2}`}
                    width={300}
                    height={200}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                ))}
                <div className="relative">
                  {propertyPhotos.length >= 4 && (
                    <div>
                      <img
                        src={propertyPhotos[4]?.url || ""}
                        width={300}
                        height={200}
                        className="w-full h-36 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/70 rounded-lg h-36 flex items-center justify-center cursor-pointer">
                        <span className="text-white font-semibold">
                          +5 rasm
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property?.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>
                    {region}, {district}
                  </span>
                </div>
                {/* <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {propertyData.features.bedrooms} xona
                  </span>
                  <span className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {propertyData.features.bathrooms} hammom
                  </span>
                  <span>{propertyData.features.area} m²</span>
                  <span>
                    {propertyData.features.floor}/
                    {propertyData.features.totalFloors} qavat
                  </span>
                </div> */}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {property?.isFurnished && (
                  <Badge variant="secondary">Jihozlangan</Badge>
                )}
                {property?.allowsPets && (
                  <Badge variant="secondary">Hayvonlar ruxsat</Badge>
                )}
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Tavsif</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property?.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Qulayliklar</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <amenity.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Joylashuv</h2>
                {property?.latitude ? (
                  <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-64 w-full rounded-lg z-0"
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                      position={[property?.latitude, property?.longitude]}
                    >
                      <Popup>Bu yerda joylashgan.</Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Xarita bu yerda ko'rsatiladi
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Koordinatalar: mavjud emas
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${property?.price}
                  </span>
                  <span className="text-sm text-gray-500">/ oyiga</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="bg-gray-900 w-full hover:bg-gray-900/90"
                  size="lg"
                >
                  Bog'lanish
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Xabar yuborish
                </Button>
              </CardContent>
            </Card>

            {/* Landlord Info */}
            <Card>
              <CardHeader>
                <CardTitle>Uy egasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <CircleUserRound size={40} />
                  <div>
                    <h3 className="font-semibold">{landlord.name}</h3>
                    <p className="text-sm text-gray-600">Uy egasi</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    size="sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {landlord.phone}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    size="sm"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {landlord.email}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Uy haqida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuman:</span>
                  <span className="font-medium">{district}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Viloyat:</span>
                  <span className="font-medium">{region}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-gray-600">Maydon:</span>
                  <span className="font-medium">85 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Qavat:</span>
                  <span className="font-medium">5 / 9</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Jihozlangan:</span>
                  <span className="font-medium">
                    {property?.isFurnished ? "Ha" : "Yo'q"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hayvonlar:</span>
                  <span className="font-medium">
                    {property?.allowsPets ? "Ruxsat" : "Ruxsat yo'q"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
