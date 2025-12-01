import AnimatedCard from '@/components/AnimatedCard';
import { BackButton } from '@/components/ui/back';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactLinks } from '@/data/contactlinks';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function ContactPage() {

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
                  <div className='rounded-2xl shadow-lg border p-6'>
                    <div className='space-y-6'>
                      <div className='space-y-2'>
                        <Label htmlFor="name">Name</Label>
                        <InputGroup>
                          <InputGroupInput placeholder='James Smith'/>
                        </InputGroup>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor="email">Email</Label>
                        <InputGroup>
                          <InputGroupInput placeholder='james@example.com'/>
                        </InputGroup>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor="message">Message</Label>
                        <Textarea className='h-30' placeholder='Type your message here.'/>
                      </div>
                      <Button>
                        Send Message
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3}> 
                  <div className='space-y-3'>
                    {contactLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`group flex items-center gap-2 p-2 rounded-xl shadow-md border-1 transition-all`}
                      >
                        <div className='flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
                            <link.icon className="w-6 h-6" />
                        </div>
                        <span className='font-medium flex-1'>{link.text}</span>
                        <ArrowLeft className='w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform' />
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
