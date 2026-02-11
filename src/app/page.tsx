'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer, scrollReveal } from '@/lib/animations/variants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden bg-limestone">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-bronze)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p
            variants={fadeInUp}
            className="text-accent uppercase tracking-[0.3em] font-medium mb-6"
          >
            Architectural Excellence
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-basalt mb-8 max-w-4xl"
          >
            Crafting the Future of <br />
            <span className="text-accent">Premium Environments.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-basalt/60 max-w-2xl mb-10"
          >
            GCDD Group specializes in high-end commercial and residential architectural solutions,
            delivering precision and luxury in every detail.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/portfolio" variant="primary">
              Explore Portfolio
            </Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 px-6 bg-limestone">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollReveal}
          >
            <div className="max-w-2xl">
              <h2 className="text-basalt">
                Redefining the standard of luxury spaces.
              </h2>
            </div>
            <Button href="/about" variant="secondary" className="border-b-2 border-accent pb-1 !px-0 !py-0 !border-0 !bg-transparent hover:!bg-transparent">
              About GCDD Group
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: 'Commercial', desc: 'Premium retail, office, and hospitality environments.' },
              { title: 'Residential', desc: 'Tailored luxury living spaces designed for excellence.' },
              { title: 'Remodeling', desc: 'Revitalizing existing spaces with high-end finishes.' }
            ].map((service, i) => (
              <motion.div key={i} variants={scrollReveal}>
                <Card>
                  <span className="text-accent text-caption block mb-4">0{i + 1}</span>
                  <h3 className="mb-4">{service.title}</h3>
                  <p className="text-basalt/60">
                    {service.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
