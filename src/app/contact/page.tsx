'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.p variants={fadeInUp} className="text-accent uppercase tracking-[0.3em] font-medium mb-4">
                        Get In Touch
                    </motion.p>
                    <motion.h1 variants={fadeInUp} className="text-basalt mb-12">
                        Start Your Project
                    </motion.h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-body-lg text-basalt/60 mb-12">
                            Ready to elevate your space? Contact our team of experts to discuss your architectural goals and requirements.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-accent font-bold uppercase tracking-widest text-caption mb-2">Office</h4>
                                <p className="text-basalt/60">123 Architectural Lane, Design District<br />Austin, TX 78701</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-bold uppercase tracking-widest text-caption mb-2">Inquiries</h4>
                                <p className="text-basalt/60">hello@gcddgroup.com<br />+1 (512) 555-ARCH</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-10 border border-basalt/5 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="space-y-6">
                            <Input label="Full Name" type="text" placeholder="John Doe" />
                            <Input label="Email Address" type="email" placeholder="john@example.com" />
                            <Input label="Project Type" type="text" placeholder="Residential, Commercial, etc." />
                            <Textarea label="Message" placeholder="Tell us about your project..." rows={6} />
                            <Button variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
