// src/components/features/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import Typography from '@/component/ui/Typography';
import Button from '@/component/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '+62 ',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waNumber = "6281232028983"; // Ganti dengan nomor WA yang benar
    const message = 
      `Halo, saya ingin mengetahui lebih lanjut tentang Kaliandra Resort.\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `No. HP: ${formData.phone}\n\n` +
      `Pesan:\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="mb-18">
      <div className="text-center mb-6">
        <Typography variant="h2" className="mb-1">
          Ready to Build
        </Typography>
        <Typography variant="h2">
          Your Dream Home?
        </Typography>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+62 "
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type Your Message"
            className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-auto md:px-10 float-right"
          >
            Send Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;