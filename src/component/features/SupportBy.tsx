'use client';

import React from 'react';
import Typography from '@/component/ui/Typography';
import { Building2, Landmark, HardHat, Banknote } from 'lucide-react';

interface CompanyLogoProps {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, subtitle, icon, color }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className={`w-28 h-28 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300 ${color}`}>
        {icon}
      </div>
      <p className="font-semibold text-gray-800 text-sm text-center">{name}</p>
      <p className="text-xs text-gray-400 text-center mt-0.5">{subtitle}</p>
    </div>
  );
};

const SupportedBy: React.FC = () => {
  const companies = [
{
      name: 'PT Kaliandra Griya',
      subtitle: 'Developer Utama',
      icon: <Building2 className="w-12 h-12 text-green-700" />,
      color: 'bg-green-50 border border-green-200',
    },
    {
      name: 'Bank Jatim',
      subtitle: 'Mitra Perbankan',
      icon: <Landmark className="w-12 h-12 text-green-700" />,
      color: 'bg-green-50 border border-green-200',
    },
    {
      name: 'CV Bangun Jaya',
      subtitle: 'Kontraktor Resmi',
      icon: <HardHat className="w-12 h-12 text-green-700" />,
      color: 'bg-green-50 border border-green-200',
    },
    {
      name: 'Investasi Nusantara',
      subtitle: 'Mitra Investasi',
      icon: <Banknote className="w-12 h-12 text-green-700" />,
      color: 'bg-green-50 border border-green-200',
    },
  ];

  return (
    <div className="mb-16 py-12 bg-gray-50 rounded-2xl px-6">
      <Typography variant="h2" className="text-center mb-2">
        Supported By
      </Typography>
      <p className="text-center text-gray-500 text-sm mb-12 max-w-md mx-auto">
        Kaliandra Resort didukung oleh mitra-mitra terpercaya dalam industri properti dan perbankan Indonesia.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {companies.map((company, index) => (
          <CompanyLogo
            key={index}
            name={company.name}
            subtitle={company.subtitle}
            icon={company.icon}
            color={company.color}
          />
        ))}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-400">
          Bermitra dengan institusi terpercaya untuk memberikan yang terbaik bagi Anda
        </p>
      </div>
    </div>
  );
};

export default SupportedBy;