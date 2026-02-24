import React from 'react';

const servicesData = [
  {
    title: 'kredyty',
    subtitle: 'w zależności od Twoich potrzeb mogę Ci zaproponować różnego rodzaju kredyty.',
    items: [],
  },
  {
    title: 'rodzaje kredytów:',
    subtitle: '',
    items: [
      'gotówkowe na dowolny cel',
      'konsolidacyjne na spłatę zobowiązań',
      'hipoteczne - na budowę lub zakup nieruchomości',
      'firmowe na bieżącą działalność firmy',
      'refinansowe - na poniesione koszty związane z nieruchomością.'
    ],
  },
  {
    title: 'ubezpieczenia',
    subtitle: 'na życie - informuję na czym polega ubezpieczenie i jak ważna jest jego funkcja w życiu codziennym, analizuję Twoją obecną polisę i rozmawiam o Twoich planach na przyszłość.',
    items: [],
  },
  {
    title: 'oszczędności',
    subtitle: 'oferuję dostępne na rynku nowoczesne narzędzia oszczędzania i inwestowania.',
    items: [],
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-2xl lg:text-3xl font-medium text-brand-dark leading-relaxed">
            Posiadam wieloletnie doświadczenie w pracy z różnego rodzaju instrumentami finansowymi. Moja oferta obejmuje:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-brand-dark/90">
          
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col gap-3 relative group">
              <h3 className="text-lg font-bold text-[#8B3A3A] group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              {service.subtitle && (
                <p className="text-sm leading-relaxed text-brand-dark/80">
                  {service.subtitle}
                </p>
              )}

              {service.items.length > 0 && (
                <ul className="flex flex-col gap-2 text-sm leading-relaxed text-brand-dark/80">
                  {service.items.map((item, id) => (
                    <li key={id} className="flex items-start gap-2">
                       <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-dark/60 shrink-0"></span> {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subtle divider for mobile/tablet wrapped views */}
              {index !== servicesData.length - 1 && (
                <div className="absolute top-0 -right-6 w-px h-full bg-brand-dark/10 hidden lg:block"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;