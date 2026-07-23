import { galleryImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="galeria" className="bg-cream-100 py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-coffee-500">
            Fotók & Videók
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-coffee-900 sm:text-5xl">
            Egy kis ízelítő a hangulatról
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-coffee-700">
            Ételek, italok és a kávézó meghitt atmoszférája – nézz be hozzánk képek által.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[260px]">
          {galleryImages.map((img) => (
            <figure
              key={img.url}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="h-4 w-4" />
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
