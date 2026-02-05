import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden bg-basalt">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-accent uppercase tracking-[0.3em] font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Architectural Excellence
          </p>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-limestone mb-8 leading-[0.9] max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Crafting the Future of <br />
            <span className="text-accent">Premium Environments.</span>
          </h1>
          <p className="text-lg md:text-xl text-limestone/60 max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            GCDD Group specializes in high-end commercial and residential architectural solutions,
            delivering precision and luxury in every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-accent text-white font-medium uppercase tracking-widest hover:scale-105 transition-transform text-center"
            >
              Explore Portfolio
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-white/20 text-white font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 px-6 bg-limestone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-basalt mb-6">
                Redefining the standard of luxury spaces.
              </h2>
            </div>
            <Link href="/about" className="text-accent font-bold uppercase tracking-widest border-b-2 border-accent pb-1">
              About GCDD Group
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Commercial', desc: 'Premium retail, office, and hospitality environments.' },
              { title: 'Residential', desc: 'Tailored luxury living spaces designed for excellence.' },
              { title: 'Remodeling', desc: 'Revitalizing existing spaces with high-end finishes.' }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-basalt/10 hover:border-accent transition-colors">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl font-display font-bold text-basalt mb-4">{service.title}</h3>
                <p className="text-basalt/60 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
