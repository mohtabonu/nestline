import { House, MapPin, SlidersHorizontal } from "lucide-react";
import type React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";
import { districts, photos, properties2, regions } from "../services";
import { HomeCard } from "../components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const amenities = [
  { label: "Konditsioner" },
  { label: "Balkon" },
  { label: "Garaj" },
  { label: "Avtoturargoh" },
  { label: "Hovuz" },
  { label: "WiFi" },
  { label: "Kir yuvish mashinasi" },
  { label: "Idish yuvish mashinasi" },
];
const leftAmenities = amenities.slice(0, 4);
const rightAmenities = amenities.slice(4);

export const Search: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const selectedRegion = regions.find((region) => region.name === activeRegion);

  const filteredDistricts = selectedRegion
    ? districts.filter((district) => district.regionId === selectedRegion.id)
    : [];

  return (
    <div className="min-h-screen container mx-auto max-w-8xl p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Select onValueChange={setActiveRegion}>
            <SelectTrigger className="w-[400px] flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <MapPin />
                <SelectValue placeholder="Shahar  / Viloyat" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {regions.map((region) => (
                  <SelectItem key={region.id} value={region.name}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[300px] flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <MapPin />
                <SelectValue placeholder="Tuman" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {filteredDistricts.map((district) => (
                  <SelectItem key={district.id} value={district.name}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <House />
              <SelectValue placeholder="Uy turi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="house">Kvartiralar</SelectItem>
                <SelectItem value="apartment">Hovlilar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* SideBar */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-gray-800 py-2 px-4 rounded-sm cursor-pointer">
                <SlidersHorizontal className="text-white" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 border-0 text-white !max-w-[600px] px-4">
              <SheetHeader>
                <SheetTitle className="text-white">Barcha filtrlar</SheetTitle>
              </SheetHeader>
              <div className="px-4">
                <div className="mt-4 flex items-center gap-4 ">
                  <div className="w-[300px]">
                    <Label className="mb-3">Joylashuvingizni tanlang</Label>
                    <Select onValueChange={setActiveRegion}>
                      <SelectTrigger className="w-full flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin />
                          <SelectValue placeholder="Shahar  / Viloyat" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="bg-[#333D4C] text-white">
                        <SelectGroup>
                          {regions.map((region) => (
                            <SelectItem key={region.id} value={region.name}>
                              {region.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[300px]">
                    <Label className="mb-3">Tumanni tanlang</Label>
                    <Select>
                      <SelectTrigger className="w-full flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin />
                          <SelectValue placeholder="Tuman" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="bg-[#333D4C] text-white">
                        <SelectGroup>
                          {filteredDistricts.map((district) => (
                            <SelectItem key={district.id} value={district.name}>
                              {district.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[180px]">
                    <Label className="mb-3">Uy turini tanlang</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <House />
                        <SelectValue placeholder="Uy turi" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#333D4C] text-white">
                        <SelectGroup>
                          <SelectItem value="all">Barchasi</SelectItem>
                          <SelectItem value="house">Kvartiralar</SelectItem>
                          <SelectItem value="apartment">Hovlilar</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <Label className="mb-3">Oylik narx</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-[100px]"
                      />
                      -
                      <Input
                        type="number"
                        placeholder="Max"
                        className="w-[100px]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3">Kvadrat metr</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-[100px]"
                      />
                      -
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-[100px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <div>
                    <Label className="mb-3">Yotoq xonalar</Label>
                    <div className="flex gap-2">
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        Har qanday
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        1
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        2
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        3
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        4+
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3">Hammom</Label>
                    <div className="flex gap-2">
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        Har qanday
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        1
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        2
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        3
                      </Button>
                      <Button className="bg-gray-900 border border-[#333D4C] hover:bg-[#333D4C]">
                        4+
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-20">
                  <div>
                    <Label className="mb-4">Qulayliklar</Label>
                    <div className="flex flex-col gap-4">
                      {leftAmenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Checkbox
                            id={`amenity-left-${index}`}
                            className="data-[state=checked]:bg-white data-[state=checked]:text-gray-900"
                          />
                          <Label htmlFor={`amenity-left-${index}`}>
                            {item.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="mb-4 text-gray-900">Qulayliklar</Label>
                    <div className="flex flex-col gap-4">
                      {rightAmenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Checkbox
                            id={`amenity-right-${index}`}
                            className="data-[state=checked]:bg-white data-[state=checked]:text-gray-900"
                          />
                          <Label htmlFor={`amenity-right-${index}`}>
                            {item.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <div className="flex items-center justify-between">
                  <h1 className="cursor-pointer underline">
                    Hammasini tozalash
                  </h1>
                  <SheetClose>
                    <Button className="cursor-pointer bg-white text-gray-900 hover:bg-white/80">
                      Qidirish
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          {/* ------ */}
        </div>
      </div>
      <div className="my-6">
        <h1 className="text-gray-600">95 ta natija ko'rsatilmoqda</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {properties2.map((property) => {
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
      <div className="my-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">16</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
