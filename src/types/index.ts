// types/index.ts

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
  size?: 'sm' | 'md';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  iconBg: 'indigo' | 'pink' | 'green';
}

export interface ReviewCardProps {
  rating: number;
  text: string;
  author: string;
  company: string;
  badge: string;
}

export interface ValueCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

