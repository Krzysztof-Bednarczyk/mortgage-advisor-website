import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-brand flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      
      {/* Abstract Background Design Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none transform translate-x-1/4 -skew-x-12 bg-gradient-to-l from-brand-accent/40 to-transparent mix-blend-multiply"></div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand-dark">
              EMILIA FINANSE
            </h1>
            <p className="text-xl lg:text-2xl font-light text-brand-dark/80 tracking-wide uppercase">
              Twój Ekspert Kredytowy
            </p>
          </div>
          
          <ul className="space-y-4 text-xl lg:text-2xl font-medium text-brand-dark/90">
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kredyty gotówkowe</li>
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kredyty konsolidacyjne</li>
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kredyty hipoteczne</li>
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kredyty refinansowe</li>
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kredyty firmowe</li>
            <li className="flex items-center gap-3 pt-4 border-t border-brand-dark/10 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-dark"></span> Ubezpieczenia na życie</li>
            <li className="flex items-center gap-3 transition-transform hover:translate-x-2"><span className="w-2 h-2 rounded-full bg-brand-dark"></span> Oszczędności</li>
          </ul>
        </div>

        {/* Right Contact Form Area */}
        <div className="glass-panel p-8 lg:p-10 flex flex-col gap-6 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-2">Umów się na spotkanie:</h2>
          
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-brand-dark/80">Imię i Nazwisko</label>
              <input type="text" id="name" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-brand-dark/80">Email</label>
              <input type="email" id="email" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-brand-dark/80">Telefon</label>
              <input type="tel" id="phone" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className="text-sm font-semibold text-brand-dark/80">Temat spotkania</label>
              <textarea id="topic" rows="3" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"></textarea>
            </div>

            <button type="button" className="mt-2 w-full py-4 bg-brand-dark text-white font-semibold text-lg rounded-md hover:bg-brand-dark/90 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98]">
              Wyślij
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;