'use client';

import AnimatedCard from '@/components/AnimatedCard';
import ContactForm from '@/components/forms/ContactForm';
import { BackButton } from '@/components/ui/back';
import { contactLinks } from '@/data/contactlinks';
import { Copy } from 'lucide-react';
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { toast } from 'sonner';

export default function ContactPage() {
  const handleCopy = (textToCopy : string) => {
    navigator.clipboard.writeText(textToCopy);

    toast.info("Email has been copied to your clipboard.");
  };

  return (
    <main className="mx-auto max-w-7xl p-4">
      <div className="mx-auto py-4">
          <AnimatedCard delay={0.01}>          
            <BackButton/>
          </AnimatedCard>

          <div className='p-4 gap-8'> 
            <div className='space-y-8'>
              <AnimatedCard delay={0.1}> 
                <div>   
                  <h1 className="text-4xl font-bold mb-4">
                    Get In Touch
                  </h1>
                  <p>
                      I'm actively seeking new opportunities. Let's connect and discuss how I can contribute to your team.
                  </p>
                </div>
              </AnimatedCard>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <AnimatedCard delay={0.2}> 
                  <ContactForm />
                </AnimatedCard>

                <AnimatedCard delay={0.3}> 
                  <div className='space-y-3'>
                    {contactLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        onClick={(e) => {
                          if (link.righticon === Copy) {
                            e.preventDefault(); // ✅ stop navigation
                            handleCopy(link.text);
                          }
                        }}
                        target={link.righticon !== Copy ? "_blank" : undefined}
                        rel={link.righticon !== Copy ? "noopener noreferrer" : undefined}
                        className={`group flex items-center gap-2 p-2 rounded-xl shadow-md border-1 transition-all`}
                      >
                        <div className='flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center'>
                            <link.icon className="w-6 h-6" />
                        </div>
                        <span className='font-medium flex-1'>{link.text}</span>
                        <link.righticon className={link.classname} />
                      </a>
                    ))}
                  </div>
                </AnimatedCard>
            </div>
            </div>        
            
          </div>            
      </div>
    </main>
  );
}
