import React, { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type TypographyVariant = 'h1' | 'h2' | 'h2-2' | 'bodyBold' | 'body' | 'caption';
type TypographyColor = 'primary' | 'secondary' | 'action' | 'black' | 'white';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  children: ReactNode;
  [x: string]: any;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  color = 'black', 
  className = '', 
  children, 
  ...props 
}) => {
  const Component = getComponent(variant) as ElementType;

  return (
    <Component
      className={clsx(
        getVariantClasses(variant),
        getColorClasses(color),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

function getComponent(variant: TypographyVariant): string {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
    case 'h2-2':
      return 'h2';
    case 'bodyBold':
    case 'body':
      return 'p';
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}

function getVariantClasses(variant: TypographyVariant): string {
  switch (variant) {
    case 'h1':
      return 'text-h1 font-bold font-jakarta';
    case 'h2':
      return 'text-h2 font-bold font-jakarta';
    case 'h2-2':
      return 'text-h2-2 font-bold font-jakarta';
    case 'bodyBold':
      return 'text-body-bold font-bold font-jakarta';
    case 'body':
      return 'text-body font-normal font-jakarta';
    case 'caption':
      return 'text-caption font-normal font-jakarta';
    default:
      return 'text-body font-normal font-jakarta';
  }
}

function getColorClasses(color: TypographyColor): string {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'action':
      return 'text-action';
    case 'black':
      return 'text-black';
    case 'white':
      return 'text-white';
    default:
      return 'text-black';
  }
}

export default Typography;
