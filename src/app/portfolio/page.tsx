export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-accent uppercase tracking-[0.3em] font-medium mb-4">Our Gallery</p>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-basalt mb-6">Notable Projects</h1>
                <p className="max-w-2xl mx-auto text-basalt/60 text-lg mb-16 underline decoration-accent underline-offset-8">
                    A collection of our most prestigious architectural achievements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[4/3] bg-basalt/5 border border-basalt/10 flex items-center justify-center group relative overflow-hidden">
                            <div className="absolute inset-0 bg-basalt opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center p-6">
                                <p className="text-white font-display text-xl font-bold">Project Name 0{i}</p>
                            </div>
                            <span className="text-basalt/20 font-display text-4xl font-bold">0{i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
