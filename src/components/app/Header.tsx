import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PricingModal from './PricingModal';

export function Header() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">ChainCraftAI</span>
            </a>
            <nav className="hidden md:flex space-x-4">
              <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white hover:underline">
                Features
              </a>
              <button 
                onClick={() => setIsPricingOpen(true)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline"
              >
                Pricing
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      <PricingModal 
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
    </>
  );
}