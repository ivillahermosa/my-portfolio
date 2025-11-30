import { BackButton } from '@/components/ui/back';
import React from 'react';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl p-4">
      <div className="max-w-7xl mx-auto p-4">
          <BackButton/>

          <div className='p-4'>         
            <h1 className="text-4xl font-bold mb-4">
                Get In Touch
            </h1>
            <p>
                I'm actively seeking new opportunities. Let's connect and discuss how I can contribute to your team.
            </p>
          </div>            
      </div>
    </main>
  );
}
