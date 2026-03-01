'use client';

import React from 'react';
import Image from 'next/image';
import Typography from '@/component/ui/Typography';
import Button from '@/component/ui/Button';
import MapImg from '@/assets/image 5.png'

interface LocationMapProps {
  title?: string;
  mapImageSrc: string;
  googleMapsUrl: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  title = "Explore Our Location on Google Maps!",
  mapImageSrc,
  googleMapsUrl
}) => {
  const handleViewMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="mb-12">
      <Typography variant="h2" className="text-center mb-6">
        {title}
      </Typography>
      
      <div className="rounded-xl overflow-hidden border border-gray-200 mb-4 shadow-md">
        <div className="w-full h-[300px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4566561757256!2d112.66061367500451!3d-7.741289892277265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d67abab30845%3A0x547408a441380db9!2sKaliandra%20Resort!5e0!3m2!1sid!2sid!4v1772210300241!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          variant="primary" 
          className="w-full  md:px-16"
          onClick={handleViewMaps}
        >
          View Location
        </Button>
      </div>
    </div>
  );
};

export default LocationMap;