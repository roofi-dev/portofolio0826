const techLogos = [
    "Laravel 10/11", "PHP", "Vue 3", "React 18",
    "Inertia.js", "Livewire 3", "JavaScript ES6+",
    "TailwindCSS", "shadcn/ui", "Vite", "Chart.js",
    "MySQL 8.0", "PostgreSQL", "Spatie",
    "Laravel Reverb", "MQTT", "Mosquitto",
    "Accurate.id API", "OAuth 2.0", "Queue Jobs",
    "Docker", "docker-compose", "Nginx", "Ubuntu Server",
    "PHPUnit", "Git", "Postman",
];

export function TechLogoMarquee() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <div className="border-[3px] border-ink bg-ink py-4 overflow-hidden">
                <div className="marquee-container font-mono font-bold text-cream/70 uppercase tracking-[0.3em] text-xs md:text-sm">
                    <div className="marquee-content animate-marquee" style={{ animationDuration: "40s" }}>
                        {techLogos.map((logo) => (
                            <span key={logo} className="px-6 md:px-8 hover:text-acid transition-colors">{logo}&nbsp;•&nbsp;</span>
                        ))}
                    </div>
                    <div className="marquee-content animate-marquee" aria-hidden="true" style={{ animationDuration: "40s" }}>
                        {techLogos.map((logo) => (
                            <span key={`dup-${logo}`} className="px-6 md:px-8">{logo}&nbsp;•&nbsp;</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
