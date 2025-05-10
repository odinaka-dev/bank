import { Wallet } from 'lucide-react';
import type React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 text-xl font-semibold ${className}`}>
      <Wallet className="h-7 w-7 text-sidebar-primary" />
      <span>Transaction Teller</span>
    </div>
  );
};

export default Logo;
