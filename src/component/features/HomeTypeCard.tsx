"use client";

import React from "react";
import { Heart, Bed, Droplets, TreePine } from "lucide-react";
import Button from "@/component/ui/Button";
import Typography from "@/component/ui/Typography";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HomeTypeCardProps {
  type: string;
  price: string;
  image: StaticImageData | string;
  bedrooms: number;
  features: string[];
  isBestPurchase?: boolean;
}

const HomeTypeCard: React.FC<HomeTypeCardProps> = ({
  type,
  price,
  image,
  bedrooms,
  features,
  isBestPurchase = false,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-full">
      <div className="relative">
        <Image
          src={image}
          alt={`Type ${type}`}
          width={400}
          height={250}
          className="w-full h-52 object-cover"
        />
        {isBestPurchase && (
          <div className="absolute left-0 bottom-4 bg-primary text-white px-3 py-1 rounded-r-md shadow-sm flex items-center">
            <span className="text-xs font-medium">Best Purchase</span>
          </div>
        )}
        <button className="absolute right-3 top-3 text-white bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <Typography variant="h2-2" className="mb-1">Type {type}</Typography>
        <Typography variant="caption" className="text-gray-500 mb-2">
          Estimasi Harga Rumah
        </Typography>
        <Typography variant="bodyBold" color="primary" className="mb-4">
          {price}
        </Typography>

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Bed className="w-4 h-4" />
            <span>{bedrooms} Bedroom</span>
          </div>
          {features.includes("PDAM Water") && (
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Droplets className="w-4 h-4" />
              <span>PDAM Water</span>
            </div>
          )}
          {features.includes("Public Park") && (
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <TreePine className="w-4 h-4" />
              <span>Public Park</span>
            </div>
          )}
        </div>

        <Button variant="primary" className="w-full mb-2">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default HomeTypeCard;