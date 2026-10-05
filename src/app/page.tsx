/**
 * Página personal de una sola sección por bloque: presentación, proyectos,
 * stack, sobre mí y contacto. Todo es estático (sin servidor).
 */

type Captura = { src: string; alt: string };
type Proyecto = {
  numero: string;
  nombre: string;
  descripcion: string;
  detalle: string;
  stack: string[];
  enlace?: { href: string; texto: string };
  capturas: Captura[];
};

const PROYECTOS: Proyecto[] = [
  {
    numero: "01",
    nombre: "Cota",
    descripcion: "Cotizador de cortinas para colegios y oficinas.",
    detalle:
      "Proyectos organizados por ubicaciones, plano interactivo con anotaciones por ventana, importación desde Excel y un panel interno que genera la cotización en PDF y Excel.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle"],
    enlace: { href: "https://cotizadores-a-medida.vercel.app", texto: "cotizadores-a-medida.vercel.app" },
    capturas: [
      { src: "/proyectos/cota/01.webp", alt: "Portada de Cota" },
      { src: "/proyectos/cota/02.webp", alt: "Plano interactivo con ventanas anotadas" },
      { src: "/proyectos/cota/03.webp", alt: "Panel interno con el plano de un proyecto" },
    ],
  },
  {
    numero: "02",
    nombre: "SunShade",
    descripcion: "Toldos y pérgolas: del configurador a la visita técnica.",
    detalle:
      "Configurador visual con precio en vivo, “pruébalo sobre tu foto” para ver el toldo en la fachada propia y un panel con tablero de solicitudes y calendario de visitas.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Canvas"],
    enlace: { href: "https://cotizadores-a-medida-toldos.vercel.app", texto: "cotizadores-a-medida-toldos.vercel.app" },
    capturas: [
      { src: "/proyectos/sunshade/01.webp", alt: "Portada de SunShade" },
      { src: "/proyectos/sunshade/02.webp", alt: "Configurador con precio en vivo" },
      { src: "/proyectos/sunshade/03.webp", alt: "Prueba del toldo sobre una foto" },
      { src: "/proyectos/sunshade/04.webp", alt: "Panel de solicitudes" },
    ],
  },
  {
    numero: "03",
    nombre: "Validador de ideas con IA",
    descripcion: "Analiza y puntúa ideas de negocio.",
    detalle:
      "Recibe una idea y devuelve un reporte con problema, mercado, competidores, riesgos y próximos pasos, más un punto de equilibrio editable con gráfico.",
    stack: ["Next.js", "TypeScript", "LLM (Groq)", "Zod"],
    enlace: { href: "https://validador-ideas-five.vercel.app", texto: "validador-ideas-five.vercel.app" },
    capturas: [
      { src: "/proyectos/validador/01.webp", alt: "Formulario del validador" },
      { src: "/proyectos/validador/02.webp", alt: "Reporte con puntaje global" },
      { src: "/proyectos/validador/03.webp", alt: "Punto de equilibrio con gráfico" },
    ],
  },
  {
    numero: "04",
    nombre: "Sistema de gestión para academia",
    descripcion: "Horarios, cursos y pagos a profesores en un solo lugar.",
    detalle:
      "Grilla de horarios por profesor, registro y cálculo de pagos a profesores, y gestión de cursos y docentes. Uso interno, sin enlace público.",
    stack: ["PHP", "MySQL", "JavaScript"],
    capturas: [
      { src: "/proyectos/academia/horarios.webp", alt: "Grilla de horarios por profesor" },
      { src: "/proyectos/academia/pagos.webp", alt: "Pagos a profesores" },
      { src: "/proyectos/academia/cursos.webp", alt: "Gestión de cursos" },
      { src: "/proyectos/academia/profesores.webp", alt: "Gestión de profesores" },
      { src: "/proyectos/academia/landing.webp", alt: "Página pública de la academia" },
      { src: "/proyectos/academia/landing-seccion.webp", alt: "Sección de la página pública" },
    ],
  },
];

const STACK = [
  { area: "Web", items: "React, Next.js, TypeScript" },
  { area: "Backend", items: "Python, PHP / Laravel" },
  { area: "Móvil", items: "Flutter" },
  { area: "Datos", items: "PostgreSQL, MySQL" },
];

const WHATSAPP = "https://wa.me/51955140263";

export default function Inicio() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
      <header className="flex items-baseline justify-between border-b border-line py-5 text-sm">
        <a href="#" className="font-serif text-xl">Diego Rivas</a>
        <nav className="hidden gap-6 text-muted sm:flex">
          <a href="#proyectos" className="hover:text-ink">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-ink">Sobre mí</a>
          <a href="#contacto" className="hover:text-ink">Contacto</a>
        </nav>
        <a href="#contacto" className="text-accent underline-offset-4 hover:underline sm:hidden">Contacto</a>
      </header>

      {/* Presentación */}
      <section className="grid gap-10 border-b border-line py-16 sm:py-24 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="font-mono text-xs text-muted">Desarrollador full-stack freelance · Arequipa, Perú</p>
          <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.02] tracking-tight sm:text-7xl">
            Construyo webs y apps que convierten procesos en herramientas simples.
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-4 text-muted md:col-span-3 md:col-start-10">
          <p>Cotizadores, paneles internos y sistemas de gestión a medida, de la idea al despliegue.</p>
          <a href="#contacto" className="w-fit border-b border-ink pb-0.5 text-ink hover:border-accent hover:text-accent">
            Escríbeme
          </a>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="scroll-mt-6 py-16 sm:py-20">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-4xl sm:text-5xl">Proyectos</h2>
          <p className="max-w-sm text-sm text-muted">Proyectos propios con datos de demostración: empresas, nombres y precios son ficticios.</p>
        </div>

        <div className="space-y-20">
          {PROYECTOS.map((p) => (
            <article key={p.numero} className="border-t border-ink pt-6">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-muted">{p.numero}</p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight">{p.nombre}</h3>
                  <p className="mt-3 text-lg">{p.descripcion}</p>
                  <p className="mt-3 text-muted">{p.detalle}</p>
                  <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
                  {p.enlace ? (
                    <a
                      href={p.enlace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block border-b border-ink pb-0.5 hover:border-accent hover:text-accent"
                    >
                      Ver demo ↗
                    </a>
                  ) : (
                    <p className="mt-5 text-sm text-muted">Sin enlace público · capturas del sistema</p>
                  )}
                </div>

                <div className="md:col-span-8">
                  <Galeria capturas={p.capturas} ancha={p.numero === "04"} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="grid gap-8 border-t border-line py-16 md:grid-cols-12">
        <h2 className="font-serif text-4xl md:col-span-4">Stack</h2>
        <dl className="divide-y divide-line border-y border-line md:col-span-8">
          {STACK.map((s) => (
            <div key={s.area} className="grid grid-cols-3 gap-4 py-4">
              <dt className="font-mono text-xs leading-6 text-muted">{s.area}</dt>
              <dd className="col-span-2 text-lg">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="grid scroll-mt-6 gap-8 border-t border-line py-16 md:grid-cols-12">
        <h2 className="font-serif text-4xl md:col-span-4">Sobre mí</h2>
        <div className="space-y-4 text-lg md:col-span-7">
          <p>
            Soy Diego, desarrollador en Arequipa. Me gusta entender cómo trabaja un negocio y convertir ese proceso en una
            herramienta que el equipo use todos los días.
          </p>
          <p className="text-muted">
            Trabajo en remoto y con horario compatible con Europa: mis mañanas en Perú son sus tardes, así que hay varias
            horas en común cada día para reuniones y revisiones.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-6 border-t border-ink py-16 sm:py-24">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">¿Tienes un proceso que podría ser más simple?</h2>
        <ul className="mt-10 divide-y divide-line border-y border-line text-lg">
          <Contacto etiqueta="Correo" href="mailto:diegorivasrev@gmail.com" texto="diegorivasrev@gmail.com" />
          <Contacto etiqueta="WhatsApp" href={WHATSAPP} texto="+51 955 140 263" externo />
          <Contacto etiqueta="GitHub" href="https://github.com/fenyx144" texto="github.com/fenyx144" externo />
        </ul>
      </section>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-6 font-mono text-xs text-muted">
        <span>Diego Rivas · Arequipa, Perú</span>
        <span>Trabajo remoto · horario compatible con Europa</span>
      </footer>
    </div>
  );
}

/** Captura principal grande y el resto en miniatura debajo. */
function Galeria({ capturas, ancha }: { capturas: Captura[]; ancha: boolean }) {
  const [principal, ...resto] = capturas;
  const proporcion = ancha ? "aspect-[2/1]" : "aspect-[16/10]";
  return (
    <div className="space-y-3">
      <Imagen captura={principal} className={proporcion} prioridad={false} />
      <div className={`grid gap-3 ${resto.length > 3 ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-3"}`}>
        {resto.map((c) => (
          <Imagen key={c.src} captura={c} className={proporcion} />
        ))}
      </div>
    </div>
  );
}

function Imagen({ captura, className, prioridad = false }: { captura: Captura; className: string; prioridad?: boolean }) {
  return (
    <a href={captura.src} target="_blank" rel="noopener" className="group block">
      {/* Imágenes ya optimizadas a WebP; el sitio es estático, sin optimizador de Next. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={captura.src}
        alt={captura.alt}
        loading={prioridad ? "eager" : "lazy"}
        decoding="async"
        width={1440}
        height={900}
        className={`${className} w-full border border-line bg-white object-cover object-top transition-opacity group-hover:opacity-90`}
      />
    </a>
  );
}

function Contacto({ etiqueta, href, texto, externo }: { etiqueta: string; href: string; texto: string; externo?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group grid grid-cols-3 gap-4 py-4"
      >
        <span className="font-mono text-xs leading-7 text-muted">{etiqueta}</span>
        <span className="col-span-2 group-hover:text-accent">{texto} {externo ? "↗" : ""}</span>
      </a>
    </li>
  );
}
