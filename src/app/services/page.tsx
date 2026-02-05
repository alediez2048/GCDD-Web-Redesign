export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="text-accent uppercase tracking-[0.3em] font-medium mb-4">What We Do</p>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-basalt mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 border border-basalt/5 shadow-sm">
                        <h2 className="text-2xl font-display font-bold mb-4">Commercial Architecture</h2>
                        <p className="text-basalt/60">High-end retail, office, and institutional projects delivered with precision.</p>
                    </div>
                    <div className="bg-white p-12 border border-basalt/5 shadow-sm">
                        <h2 className="text-2xl font-display font-bold mb-4">Luxury Residential</h2>
                        <p className="text-basalt/60">Bespoke home designs that redefine the standard of excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
