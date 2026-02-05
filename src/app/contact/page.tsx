export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="text-accent uppercase tracking-[0.3em] font-medium mb-4">Get In Touch</p>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-basalt mb-12">Start Your Project</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <p className="text-xl text-basalt/60 leading-relaxed mb-12">
                            Ready to elevate your space? Contact our team of experts to discuss your architectural goals and requirements.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Office</h4>
                                <p className="text-basalt/60">123 Architectural Lane, Design District<br />Austin, TX 78701</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Inquiries</h4>
                                <p className="text-basalt/60">hello@gcddgroup.com<br />+1 (512) 555-ARCH</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 border border-basalt/5 shadow-lg">
                        <div className="space-y-6">
                            {['Full Name', 'Email Address', 'Project Type', 'Message'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-basalt mb-2 opacity-60">{field}</label>
                                    {field === 'Message' ? (
                                        <textarea className="w-full bg-basalt/5 border-none p-4 h-32 outline-none focus:ring-1 focus:ring-accent" />
                                    ) : (
                                        <input type="text" className="w-full bg-basalt/5 border-none p-4 outline-none focus:ring-1 focus:ring-accent" />
                                    )}
                                </div>
                            ))}
                            <button className="w-full bg-accent text-white py-4 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
