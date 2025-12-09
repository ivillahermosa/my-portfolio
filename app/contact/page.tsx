import AnimatedCard from '@/components/AnimatedCard';
import ContactList from '@/components/contact/ContactList';
import ContactForm from '@/components/forms/ContactForm';
import { BackButton } from '@/components/ui/back';
import React from 'react';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl md:p-4">
      <div className="mx-auto py-4">
          <AnimatedCard delay={0.01}>          
            <BackButton/>
          </AnimatedCard>

          <div className='p-4 gap-8'> 
            <div className='space-y-8'>
              <AnimatedCard delay={0.1}> 
                <div>   
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Get In Touch
                  </h1>
                  <p className='text-base'>
                      I'm actively seeking new opportunities. Let's connect and discuss how I can contribute to your team.
                  </p>
                </div>
              </AnimatedCard>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <AnimatedCard delay={0.2}> 
                  <ContactForm />
                </AnimatedCard>

                <AnimatedCard delay={0.3}> 
                  <ContactList />
                </AnimatedCard>
            </div>
            </div>        
            
          </div>            
      </div>
    </main>
  );
}
