"use client";

import React from "react";
import Image from "next/image";
import Typography from "@/component/ui/Typography";
import PondasiImg from "@/assets/low-angle-view-scafolding-building 1.png";
import AtapImg from "@/assets/low-angle-modern-house-roof 1.png";
import LantaiImg from "@/assets/modern-empty-room 1.png";
import InstalasiImg from "@/assets/japanese-house-entrance-plant 1.png";

interface Feature {
  name: string;
  desc: string;
}

interface BuildQualityItemProps {
  title: string;
  description: string;
  features: Feature[];
  image: any;
  reverse?: boolean;
}

const BuildQualityItem: React.FC<BuildQualityItemProps> = ({
  title,
  description,
  features,
  image,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center mb-12 last:mb-0`}>
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-56 md:h-72 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <Typography variant="h2-2" className="mb-2">{title}</Typography>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-green-600 shrink-0" />
              <div>
                <span className="font-semibold text-gray-800 text-md">{feature.name}</span>
                <br></br>
                <span className="text-gray-500 text-md">{feature.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BuildQuality: React.FC = () => {
  const qualityItems = [
    {
      title: "Struktur Pondasi",
      image: PondasiImg,
      description: "Dibangun dengan standar konstruksi tinggi menggunakan material pilihan untuk memastikan ketahanan jangka panjang.",
      features: [
        { name: "Pondasi Beton Bertulang", desc: "kokoh menahan beban dan tahan gempa" },
        { name: "Dinding Bata Ringan", desc: "ringan namun kuat, hemat energi" },
        { name: "Struktur Rangka Baja", desc: "fleksibel dan tahan terhadap pergerakan tanah" },
        { name: "Sloof & Kolom Beton", desc: "memperkuat ikatan antara pondasi dan dinding" },
      ],
    },
    {
      title: "Atap & Penutup Bangunan",
      image: AtapImg,
      description: "Atap dirancang tahan cuaca ekstrem dengan material modern yang ringan dan tahan lama.",
      features: [
        { name: "Genteng Beton/Metal", desc: "tahan angin kencang dan hujan deras" },
        { name: "Plafon Gypsum atau PVC", desc: "tampilan bersih dan mudah perawatan" },
        { name: "Talang Anti Bocor", desc: "sistem drainase air hujan yang efektif" },
        { name: "Rangka Baja Ringan", desc: "lebih ringan dari kayu, anti rayap" },
      ],
    },
    {
      title: "Lantai & Interior",
      image: LantaiImg,
      description: "Interior dirancang dengan material berkualitas untuk kenyamanan hunian sehari-hari.",
      features: [
        { name: "Keramik/Granit Berkualitas", desc: "halus, kuat, dan mudah dibersihkan" },
        { name: "Cat Dinding Tahan Jamur", desc: "tetap bersih di cuaca lembab" },
        { name: "Pintu & Jendela Berkualitas", desc: "insulasi suara dan panas yang baik" },
        { name: "Finishing Dinding Halus", desc: "tampilan interior yang rapi dan modern" },
      ],
    },
    {
      title: "Instalasi & Keamanan",
      image: InstalasiImg,
      description: "Sistem instalasi berstandar nasional untuk keamanan dan kenyamanan penghuni.",
      features: [
        { name: "Instalasi Listrik SNI", desc: "aman, terstandar, dan berkapasitas cukup" },
        { name: "Pintu & Jendela Aluminium", desc: "tahan karat dan cuaca" },
        { name: "Sistem Ventilasi Baik", desc: "sirkulasi udara segar di seluruh ruangan" },
        { name: "Instalasi Air Bersih PDAM", desc: "pasokan air lancar dan higienis" },
      ],
    },
  ];

  return (
    <div className="mb-12">
      <Typography variant="h2" className="text-center mb-2">
        Our Build Quality
      </Typography>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
        Setiap unit dibangun dengan material terbaik dan pengawasan ketat untuk memastikan kualitas hunian impian Anda.
      </p>
      <div>
        {qualityItems.map((item, index) => (
          <BuildQualityItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            features={item.features}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default BuildQuality;