export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <p className="text-accent uppercase tracking-[0.3em] font-medium mb-4">Our Story</p>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-basalt mb-8">Architects of Excellence.</h1>
                        <p className="text-xl text-basalt/60 leading-relaxed mb-8">
                            Founded on the principles of precision and innovation, GCDD Group has become a leader in
                            delivering high-end architectural solutions for a discerning clientele.
                        </p>
                        <p className="text-basalt/60 leading-relaxed">
                            Our multidisciplinary team combines technical expertise with a refined aesthetic sense,
                            ensuring that every project we undertake is not just a building, but a masterpiece.
                        </p>
                    </div>
                    <div className="aspect-square bg-basalt/5 border border-basalt/10 flex items-center justify-center p-12">
                        <span className="text-accent font-display text-8xl font-bold opacity-10">GCDD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
