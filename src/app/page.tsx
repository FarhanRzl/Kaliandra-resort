"use client";
import Image from "next/image";
import React from "react";
import Button from "@/component/ui/Button";
import backgroundImage from "@/assets/city-with-forest-front.png";
import CompanyValues from "@/component/features/CompanyValues";
import HomeTypeCard from "@/component/features/HomeTypeCard";
import Typography from "@/component/ui/Typography";
import BuildQuality from "@/component/features/BuildQuality";
import LocationMap from "@/component/features/LocationMap";
import SupportedBy from "@/component/features/SupportBy";
import ContactForm from "@/component/features/ContactForm";
import Type36Img from "@/assets/Type36.jpg";
import Type45Img from "@/assets/Type45.jpg";
import Type60Img from "@/assets/Type60.jpg";
import AnimateOnScroll from '@/component/ui/AnimateOnScroll';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
    {/* Hero Section */}
    <div className="relative min-h-[100svh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/*Bottom Gradient Fade*/}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-[5]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 min-h-[100svh] flex items-center text-white">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-medium mb-3">
            It's Time to...
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Dream Home
          </h1>

          <p className="text-lg md:text-xl mb-8 italic text-white/80 max-w-xl">
            "Mulailah babak baru kehidupan Anda di rumah yang menghadirkan
            kenyamanan, keamanan, dan kebahagiaan setiap hari."
          </p>

          <Button variant="primary" className="px-10 py-4 text-lg">
            View Property
          </Button>
        </div>
      </div>

    </div>
      <section className="container mx-auto px-4 pt-0 pb-8">

        {/* Company Value Section */}
        <AnimateOnScroll>
          <CompanyValues />
        </AnimateOnScroll>

        {/* Home Type Section */}
        <AnimateOnScroll delay={100}>
          <div className="mb-12">
          <Typography variant="h2" className="text-center mb-6">
            Kaliandra's Home Type
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <HomeTypeCard type="36" price="Rp. 500.000.000" image={Type36Img} bedrooms={3} features={["PDAM Water", "Public Park"]} isBestPurchase={true} />
            <HomeTypeCard type="45" price="Rp. 650.000.000" image={Type45Img} bedrooms={3} features={["PDAM Water", "Public Park"]} />
            <HomeTypeCard type="60" price="Rp. 850.000.000" image={Type60Img} bedrooms={4} features={["PDAM Water", "Public Park"]} />
          </div>
          </div>
        </AnimateOnScroll>

        {/* Build Quality Section */}
        <AnimateOnScroll delay={100}>
          <BuildQuality />
        </AnimateOnScroll>

        {/* Location Section */}
        <AnimateOnScroll delay={100}>
          <LocationMap
          mapImageSrc="/images/jember-map.jpg" // Gambar peta statis
          googleMapsUrl="https://maps.google.com/?q=Kaliandra+Resort+Jember"/>
        </AnimateOnScroll>
        
        {/* Supported By Section */}
        <AnimateOnScroll delay={100}> 
          <SupportedBy />
        </AnimateOnScroll>
       
        {/* Contact Form Section */}
        <AnimateOnScroll delay={100}>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <ContactForm />
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Home;
