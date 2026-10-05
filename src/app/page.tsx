/**
 * Página personal de Diego Rivas Revilla.
 * Contenido estático: presentación, servicios, método, proyectos, stack y contacto.
 */
import { Fragment, type CSSProperties } from "react";
import Reveal from "@/components/Reveal";

type Captura = { src: string; alt: string };
type Proyecto = {
  numero: string;
  nombre: string;
  etiqueta: string;
  descripcion: string;
  detalle: string;
  stack: string[];
  enlace?: { href: string; texto: string };
  capturas: Captura[];
};

const SERVICIOS = [
  {
    n: "01",
    titulo: "Aplicaciones web",
    texto:
      "Cotizadores, paneles internos y portales hechos a la medida: con datos reales, permisos claros y reportes que se pueden exportar.",
  },
  {
    n: "02",
    titulo: "Apps móviles (Flutter)",
    texto:
      "Apps para iOS y Android pensadas para quien trabaja en campo o en el mostrador, conectadas al sistema que ya usas.",
  },
  {
    n: "03",
    titulo: "Automatización e IA",
    texto:
      "Flujos y agentes que clasifican información, arman documentos y hacen el seguimiento —siempre con una persona al mando.",
  },
];

const METODO = [
  {
    paso: "01",
    titulo: "Entender el proceso",
    texto: "Me siento contigo a ver dónde se pierde tiempo, dónde aparecen errores y qué datos ya tienes en planillas o en otros sistemas.",
  },
  {
    paso: "02",
    titulo: "Definir la herramienta",
    texto: "Acordamos pantallas, reglas y automatizaciones con un alcance claro: qué entra, qué no, y cómo medimos el resultado.",
  },
  {
    paso: "03",
    titulo: "Construir y acompañar",
    texto: "Entrego algo usable, te acompaño en la puesta en marcha y dejo el sistema listo para el día a día.",
  },
];

const PROYECTOS: Proyecto[] = [
  {
    numero: "01",
    nombre: "Cota",
    etiqueta: "Cotizador de cortinas",
    descripcion: "Cotización por ubicaciones para colegios y oficinas.",
    detalle:
      "Proyectos organizados por ambientes, plano interactivo con anotaciones por ventana, importación desde Excel y generación de cotización en PDF y Excel.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    enlace: { href: "https://cotizadores-a-medida.vercel.app", texto: "Ver la demo" },
    capturas: [
      { src: "/proyectos/cota/01.webp", alt: "Portada de Cota" },
      { src: "/proyectos/cota/02.webp", alt: "Plano interactivo con ventanas anotadas" },
      { src: "/proyectos/cota/03.webp", alt: "Panel interno con el plano del proyecto" },
    ],
  },
  {
    numero: "02",
    nombre: "SunShade",
    etiqueta: "Toldos y pérgolas",
    descripcion: "Configuración de producto, precio en vivo y agenda de visitas.",
    detalle:
      "Configurador visual con precio actualizado, visualización del toldo sobre una fotografía de la fachada, y panel interno con solicitudes y calendario.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    enlace: { href: "https://cotizadores-a-medida-toldos.vercel.app", texto: "Ver la demo" },
    capturas: [
      { src: "/proyectos/sunshade/01.webp", alt: "Portada de SunShade" },
      { src: "/proyectos/sunshade/02.webp", alt: "Configurador con precio en vivo" },
      { src: "/proyectos/sunshade/03.webp", alt: "Visualización del toldo sobre una fachada" },
      { src: "/proyectos/sunshade/04.webp", alt: "Panel de solicitudes" },
    ],
  },
  {
    numero: "03",
    nombre: "Validador de ideas",
    etiqueta: "Análisis asistido por IA",
    descripcion: "Evaluación estructurada de una idea de negocio.",
    detalle:
      "Genera un informe con problema, mercado, competidores, riesgos y próximos pasos, además de un punto de equilibrio editable con gráfico. Incluye modo demostración sin clave de API.",
    stack: ["Next.js", "TypeScript", "Groq"],
    enlace: { href: "https://validador-ideas-five.vercel.app", texto: "Ver la demo" },
    capturas: [
      { src: "/proyectos/validador/01.webp", alt: "Formulario del validador" },
      { src: "/proyectos/validador/02.webp", alt: "Informe con puntaje global" },
      { src: "/proyectos/validador/03.webp", alt: "Punto de equilibrio" },
    ],
  },
  {
    numero: "04",
    nombre: "Academia Hopper",
    etiqueta: "Gestión académica",
    descripcion: "Horarios, cursos y liquidación de pagos a profesores.",
    detalle:
      "Grilla de horarios por docente, registro de cursos y cálculo de pagos. Sistema de uso interno; se muestran capturas, sin acceso público.",
    stack: ["PHP", "MySQL"],
    capturas: [
      { src: "/proyectos/academia/horarios.webp", alt: "Grilla de horarios por profesor" },
      { src: "/proyectos/academia/pagos.webp", alt: "Liquidación de pagos a profesores" },
      { src: "/proyectos/academia/cursos.webp", alt: "Gestión de cursos" },
      { src: "/proyectos/academia/profesores.webp", alt: "Gestión de profesores" },
      { src: "/proyectos/academia/landing.webp", alt: "Página pública de la academia" },
      { src: "/proyectos/academia/landing-seccion.webp", alt: "Sección de la página pública" },
    ],
  },
];

const STACK = [
  { area: "Web", items: "React, Next.js, TypeScript" },
  { area: "Móvil", items: "Flutter" },
  { area: "Backend", items: "Python, PHP / Laravel" },
  { area: "Datos", items: "PostgreSQL, MySQL" },
  { area: "IA", items: "APIs de modelos de lenguaje y automatización de flujos" },
];

const WHATSAPP = "https://wa.me/51955140263";

// Titular dividido en palabras para la entrada escalonada.
const TITULAR = [
  ..."Desarrollo software que automatiza y simplifica la operación de".split(" ").map((t) => ({ t, acento: false })),
  { t: "tu", acento: true },
  { t: "negocio.", acento: true },
];

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Hero />
        <Servicios />
        <Metodo />
        <Proyectos />
        <Stack />
        <SobreMi />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}

function Cabecera() {
  return (
    <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1120px] items-baseline justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-serif text-[1.3rem] leading-none tracking-tight text-paper">
          Diego Rivas <span className="text-paper/55">Revilla</span>
        </a>
        <nav className="hidden gap-7 text-[0.95rem] text-paper/65 sm:flex">
          <a href="#servicios" className="link-underline hover:text-paper">Servicios</a>
          <a href="#proyectos" className="link-underline hover:text-paper">Proyectos</a>
          <a href="#contacto" className="link-underline hover:text-paper">Contacto</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent link-underline">
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <FondoHero />
      <div className="relative mx-auto max-w-[1120px] px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="reveal-hero grid gap-10 pb-16 sm:pb-24 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper/60">
            Diego Rivas Revilla · Arequipa, Perú · remoto
          </p>
          <h1
            className="hero-title mt-5 max-w-[22ch] font-serif text-[2.45rem] leading-[1.08] tracking-tight text-paper sm:text-[3.4rem]"
            aria-label="Desarrollo software que automatiza y simplifica la operación de tu negocio."
          >
            {TITULAR.map((w, i) => (
              <Fragment key={i}>
                <span aria-hidden className="word-wrap">
                  <span className={`word ${w.acento ? "text-accent" : ""}`} style={{ "--i": i } as CSSProperties}>
                    {w.t}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60 sm:text-xl">
            Construyo aplicaciones web, apps móviles con Flutter y automatizaciones con IA.
            El objetivo es concreto: menos trabajo a mano, menos errores y más tiempo para lo que
            de verdad mueve tu negocio.
          </p>
        </div>
        <aside className="flex flex-col justify-end gap-6 md:col-span-4">
          <div className="border-l-2 border-accent pl-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-paper/60">Ahora</p>
            <p className="mt-2 leading-snug text-paper/90">
              Abierto a proyectos freelance. Trabajo desde Arequipa, en remoto, con horario que
              encaja con Europa.
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-cta inline-flex w-fit items-center gap-2 bg-accent px-5 py-3.5 font-medium text-ink"
          >
            Cuéntame tu proceso
            <span aria-hidden className="btn-arrow font-mono text-sm">→</span>
          </a>
        </aside>
      </div>
      </div>
    </section>
  );
}

/** Fondo del hero: retícula fina que deriva y un flujo de proceso en ámbar que se dibuja. */
function FondoHero() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="hero-grid absolute inset-0" />
      <svg className="absolute inset-x-0 bottom-0 h-[38%] w-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
        <path
          className="flow-path"
          d="M -20 170 C 160 170 220 120 340 120 S 520 170 660 160 S 860 70 980 80 S 1140 30 1240 20"
          fill="none"
          stroke="#c47a2c"
          strokeWidth="1.5"
          pathLength={1}
        />
        {[
          [340, 120],
          [660, 160],
          [980, 80],
        ].map(([cx, cy], i) => (
          <g key={i} className="flow-node" style={{ "--i": i } as CSSProperties}>
            <circle cx={cx} cy={cy} r="9" fill="none" stroke="#c47a2c" strokeOpacity="0.35" />
            <circle cx={cx} cy={cy} r="3.5" fill="#c47a2c" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">Servicios</h2>
        <p className="max-w-md text-muted">
          Tres formas de ayudarte. En todas busco lo mismo: que tu equipo deje de pelearse con
          planillas y pase a usar una herramienta clara.
        </p>
      </Reveal>
      <ul className="grid border-t border-ink sm:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <li key={s.n} className="border-b border-line py-8 sm:border-b-0 sm:border-r sm:border-line sm:px-6 sm:py-8 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0">
            <Reveal delay={(i + 1) as 1 | 2 | 3}>
              <p className="font-mono text-xs text-accent-deep">{s.n}</p>
              <h3 className="mt-3 font-serif text-2xl text-ink">{s.titulo}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.texto}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Metodo() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper/45">Método</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Cómo me gusta trabajar contigo.
          </h2>
          <p className="mt-4 text-paper/65">
            Prefiero estar cerca del problema real —no de un brief genérico— y entregar algo que el
            equipo use desde la primera semana.
          </p>
        </Reveal>

        <Reveal>
          {/* Línea de proceso animada */}
          <div className="relative mb-10 hidden sm:block" aria-hidden>
          <svg className="h-2 w-full" viewBox="0 0 1000 8" preserveAspectRatio="none">
            <line x1="0" y1="4" x2="1000" y2="4" stroke="rgb(247 244 236 / 0.15)" strokeWidth="2" />
            <line className="process-line" x1="0" y1="4" x2="1000" y2="4" stroke="#c47a2c" strokeWidth="2" pathLength={1} />
          </svg>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="process-dot absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-accent bg-ink"
              style={{ left: `calc(${(i * 100) / 3}% )`, "--i": i } as CSSProperties}
            />
          ))}
          </div>
          <ol className="stagger grid gap-10 sm:grid-cols-3 sm:gap-8">
            {METODO.map((m) => (
              <li key={m.paso}>
                <p className="font-mono text-xs text-accent">{m.paso}</p>
                <h3 className="mt-3 font-serif text-2xl">{m.titulo}</h3>
                <p className="mt-3 leading-relaxed text-paper/65">{m.texto}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-8">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">Selección</p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-5xl">Proyectos</h2>
        </div>
        <p className="max-w-xs text-sm text-muted">
          Proyectos propios. Los datos de las demos son ficticios: sirven para mostrar cómo funciona cada sistema.
        </p>
      </Reveal>

      <div className="space-y-24">
        {PROYECTOS.map((p, i) => (
          <Reveal key={p.numero}>
            <article className="group/project">
              <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                <div className={`stagger md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent-deep">{p.numero}</span>
                    <span className="font-mono text-xs text-muted">{p.etiqueta}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-4xl leading-none tracking-tight text-ink">{p.nombre}</h3>
                  <p className="mt-4 text-lg text-ink">{p.descripcion}</p>
                  <p className="mt-3 leading-relaxed text-muted">{p.detalle}</p>
                  <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
                  {p.enlace ? (
                    <a
                      href={p.enlace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw mt-6 inline-flex items-center gap-2 pb-1 text-ink"
                    >
                      {p.enlace.texto}
                      <span aria-hidden className="font-mono text-sm">↗</span>
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-muted">Sin enlace público · te muestro capturas del sistema</p>
                  )}
                </div>
                <div className={`project-media md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Galeria capturas={p.capturas} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Galeria({ capturas }: { capturas: Captura[] }) {
  const [principal, ...resto] = capturas;
  return (
    <div className="space-y-2.5">
      <Figura captura={principal} className="project-shot project-shot-main aspect-[16/10]" />
      {resto.length > 0 && (
        <div className={`grid gap-2.5 ${resto.length >= 5 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}>
          {resto.map((c) => (
            <Figura key={c.src} captura={c} className="project-shot aspect-[16/10]" />
          ))}
        </div>
      )}
    </div>
  );
}

function Figura({ captura, className }: { captura: Captura; className: string }) {
  return (
    <a href={captura.src} target="_blank" rel="noopener" className="shot-frame block overflow-hidden border border-line bg-paper-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={captura.src}
        alt={captura.alt}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className={`${className} w-full object-cover object-top`}
      />
    </a>
  );
}

function Stack() {
  return (
    <section className="border-y border-line bg-paper-2/60">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <h2 className="font-serif text-3xl text-ink">Stack</h2>
        </Reveal>
        <Reveal delay={1} className="md:col-span-8">
          <dl>
            {STACK.map((s) => (
              <div
                key={s.area}
                className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="font-mono text-xs leading-6 text-muted">{s.area}</dt>
                <dd className="text-lg text-ink">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="grid gap-8 border-t border-ink pt-12 md:grid-cols-12">
        <h2 className="font-serif text-3xl text-ink md:col-span-4">Sobre mí</h2>
        <div className="space-y-4 text-lg leading-relaxed md:col-span-7">
          <p>
            Vivo en Arequipa y trabajo en remoto. Lo que más me gusta de este oficio es sentarme
            con alguien que tiene un lío cotidiano —cotizar, agendar, cobrar, reportar— y dejarle
            una herramienta que el equipo entiende sin un manual eterno.
          </p>
          <p className="text-muted">
            Prefiero proyectos cercanos al cliente: entender el proceso de verdad, proponer algo
            concreto y estar disponible cuando hace falta. Mis mañanas en Perú son las tardes en
            Europa, así que hay varias horas en común para hablar y revisar.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] sm:text-5xl">
            ¿Qué proceso te está costando tiempo o errores?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-paper/70">
            Escríbeme en dos o tres líneas qué hace tu equipo hoy y qué te gustaría mejorar.
            Te respondo con una idea concreta, sin compromiso.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ul className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
            <FilaContacto etiqueta="Correo" href="mailto:diegorivasrev@gmail.com" texto="diegorivasrev@gmail.com" />
            <FilaContacto etiqueta="WhatsApp" href={WHATSAPP} texto="+51 955 140 263" externo />
            <FilaContacto etiqueta="GitHub" href="https://github.com/fenyx144" texto="github.com/fenyx144" externo />
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function FilaContacto({
  etiqueta,
  href,
  texto,
  externo,
}: {
  etiqueta: string;
  href: string;
  texto: string;
  externo?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[9rem_1fr]"
      >
        <span className="font-mono text-xs text-paper/50">{etiqueta}</span>
        <span className="text-lg transition-colors group-hover:text-accent">
          {texto}
          {externo ? <span className="ml-2 font-mono text-sm opacity-50">↗</span> : null}
        </span>
      </a>
    </li>
  );
}

function Pie() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-5 py-6 font-mono text-[0.7rem] text-muted sm:px-8">
        <span>Diego Rivas Revilla · Arequipa, Perú</span>
        <span>Remoto · horario compatible con Europa</span>
      </div>
    </footer>
  );
}
