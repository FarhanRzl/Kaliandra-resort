'use client';

import React from 'react';
import Typography from '@/component/ui/Typography';

const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="14" rx="2" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
    <path d="M12 14v5l3-3 3 3v-5" />
  </svg>
);

interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gray-100 rounded-xl h-full">
      <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-3">
        <CertificateIcon className="w-8 h-8 text-black" />
      </div>
      <Typography variant="bodyBold" color="primary" className="mt-2 text-center mb-2">
        {title}
      </Typography>
      <Typography variant="body" className="text-gray-600 text-sm text-center">
        {description}
      </Typography>
    </div>
  );
};

const CompanyValues: React.FC = () => {
  const values = [
    {
      title: "Integritas & Kepercayaan",
      description: "Kami menjunjung tinggi kejujuran dalam setiap proses pembangunan dan transaksi. Transparansi menjadi dasar hubungan jangka panjang antara perusahaan dan pelanggan.",
    },
    {
      title: "Kualitas Tanpa Kompromi",
      description: "Setiap hunian dibangun dengan standar konstruksi terbaik, material berkualitas, serta perencanaan matang untuk memastikan kenyamanan dan keamanan keluarga Anda.",
    },
    {
      title: "Berorientasi pada Pelanggan",
      description: "Kebutuhan dan kepuasan pelanggan adalah prioritas utama kami. Kami hadir bukan hanya membangun rumah, tetapi menciptakan tempat tinggal yang benar-benar terasa seperti rumah.",
    },
  ];

  return (
    <div className="mb-8">
      <Typography variant="h2" className="text-center mb-6">
        Our Company Value
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map((value, index) => (
          <ValueItem key={index} title={value.title} description={value.description} />
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;