/**
 * Página personal de Diego Rivas Revilla.
 * Una sola página estática: presentación, servicios, forma de trabajar,
 * proyectos, stack, sobre mí y contacto.
 */

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
    titulo: "Desarrollo web",
    texto: "Cotizadores, paneles internos y sitios que la gente usa todos los días. De la idea al despliegue.",
  },
  {
    n: "02",
    titulo: "Apps móviles",
    texto: "Aplicaciones con Flutter para iOS y Android, pensadas para el trabajo en campo o en el mostrador.",
  },
  {
    n: "03",
    titulo: "Automatizaciones e IA",
    texto: "Flujos y agentes que leen, clasifican y responden por ti. Menos copiar y pegar; más tiempo en lo que importa.",
  },
];

const FORMA_DE_TRABAJAR = [
  {
    antes: "Planillas y WhatsApp sueltos",
    despues: "Un sistema con precios, estados y PDF",
    ejemplo: "Cotizaciones que antes tomaban una tarde ahora salen en minutos.",
  },
  {
    antes: "Agendar a mano, olvidar visitas",
    despues: "Calendario y tablero compartidos",
    ejemplo: "El equipo ve qué toca hoy sin preguntar por el grupo.",
  },
  {
    antes: "Repetir la misma tarea cada semana",
    despues: "Un flujo o un agente que la hace",
    ejemplo: "Avisos, resúmenes y seguimientos que corren solos.",
  },
];

const PROYECTOS: Proyecto[] = [
  {
    numero: "01",
    nombre: "Cota",
    etiqueta: "Cotizador de cortinas",
    descripcion: "Para colegios y oficinas que miden muchas ventanas.",
    detalle:
      "Proyectos por ubicaciones, plano interactivo con anotaciones, importación desde Excel y un panel que arma la cotización en PDF y Excel.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    enlace: { href: "https://cotizadores-a-medida.vercel.app", texto: "Ver demo" },
    capturas: [
      { src: "/proyectos/cota/01.webp", alt: "Portada de Cota" },
      { src: "/proyectos/cota/02.webp", alt: "Plano interactivo con ventanas anotadas" },
      { src: "/proyectos/cota/03.webp", alt: "Panel con el plano de un proyecto" },
    ],
  },
  {
    numero: "02",
    nombre: "SunShade",
    etiqueta: "Toldos y pérgolas",
    descripcion: "Del configurador a la visita técnica.",
    detalle:
      "Configurador visual con precio en vivo, “pruébalo sobre tu foto” para ver el toldo en la fachada, y un panel con solicitudes y calendario.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    enlace: { href: "https://cotizadores-a-medida-toldos.vercel.app", texto: "Ver demo" },
    capturas: [
      { src: "/proyectos/sunshade/01.webp", alt: "Portada de SunShade" },
      { src: "/proyectos/sunshade/02.webp", alt: "Configurador con precio en vivo" },
      { src: "/proyectos/sunshade/03.webp", alt: "Toldo sobre una foto de fachada" },
      { src: "/proyectos/sunshade/04.webp", alt: "Panel de solicitudes" },
    ],
  },
  {
    numero: "03",
    nombre: "Validador de ideas",
    etiqueta: "Análisis con IA",
    descripcion: "Puntúa una idea de negocio en segundos.",
    detalle:
      "Problema, mercado, competidores, riesgos y próximos pasos, más un punto de equilibrio editable con gráfico. Funciona también en modo demo.",
    stack: ["Next.js", "TypeScript", "Groq"],
    enlace: { href: "https://validador-ideas-five.vercel.app", texto: "Ver demo" },
    capturas: [
      { src: "/proyectos/validador/01.webp", alt: "Formulario del validador" },
      { src: "/proyectos/validador/02.webp", alt: "Reporte con puntaje" },
      { src: "/proyectos/validador/03.webp", alt: "Punto de equilibrio" },
    ],
  },
  {
    numero: "04",
    nombre: "Academia Hopper",
    etiqueta: "Gestión interna",
    descripcion: "Horarios, cursos y pagos a profesores.",
    detalle:
      "Grilla de horarios por profesor, cálculo de pagos, cursos y docentes. Sistema de uso interno; aquí solo se muestran capturas.",
    stack: ["PHP", "MySQL"],
    capturas: [
      { src: "/proyectos/academia/horarios.webp", alt: "Grilla de horarios" },
      { src: "/proyectos/academia/pagos.webp", alt: "Pagos a profesores" },
      { src: "/proyectos/academia/cursos.webp", alt: "Cursos" },
      { src: "/proyectos/academia/profesores.webp", alt: "Profesores" },
      { src: "/proyectos/academia/landing.webp", alt: "Página pública" },
      { src: "/proyectos/academia/landing-seccion.webp", alt: "Sección pública" },
    ],
  },
];

const STACK = [
  { area: "Web", items: "React, Next.js, TypeScript" },
  { area: "Móvil", items: "Flutter" },
  { area: "Backend", items: "Python, PHP / Laravel" },
  { area: "Datos", items: "PostgreSQL, MySQL" },
  { area: "IA", items: "APIs de LLM, automatizaciones" },
];

const WHATSAPP = "https://wa.me/51955140263";

export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main>
        <Hero />
        <Servicios />
        <ComoTrabajo />
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
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1120px] items-baseline justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-serif text-[1.35rem] leading-none tracking-tight">
          Diego Rivas <span className="text-muted">Revilla</span>
        </a>
        <nav className="hidden gap-7 text-[0.95rem] text-muted sm:flex">
          <a href="#servicios" className="link-underline hover:text-ink">Servicios</a>
          <a href="#proyectos" className="link-underline hover:text-ink">Proyectos</a>
          <a href="#contacto" className="link-underline hover:text-ink">Contacto</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent link-underline"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="grid gap-10 border-b border-ink pb-14 sm:pb-20 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-8">
          <p className="rise font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Arequipa, Perú · trabajo remoto
          </p>
          <h1 className="rise rise-d1 mt-5 max-w-[18ch] font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-[3.75rem]">
            Menos trabajo manual.{" "}
            <span className="text-accent">Procesos que corren solos.</span>
          </h1>
          <p className="rise rise-d2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Soy Diego Rivas Revilla. Construyo webs, apps y automatizaciones que resuelven problemas
            reales de un negocio: cotizar, agendar, cobrar, avisar.
          </p>
        </div>
        <aside className="rise rise-d3 flex flex-col justify-end gap-5 md:col-span-4 md:pl-4">
          <div className="border-l-2 border-accent pl-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Ahora</p>
            <p className="mt-1 text-[1.05rem] leading-snug">
              Abierto a proyectos freelance y colaboraciones a distancia, con horario compatible con Europa.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 text-paper transition-colors hover:bg-accent"
          >
            Hablemos de tu proceso
            <span aria-hidden className="font-mono text-sm">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-3xl sm:text-4xl">Qué hago</h2>
        <p className="max-w-sm text-muted">Tres frentes. El objetivo es el mismo: que tu equipo gaste menos horas en lo repetitivo.</p>
      </div>
      <ul className="grid gap-0 border-t border-ink sm:grid-cols-3">
        {SERVICIOS.map((s) => (
          <li key={s.n} className="border-b border-line py-8 sm:border-b-0 sm:border-r sm:border-line sm:px-6 sm:py-8 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0">
            <p className="font-mono text-xs text-accent">{s.n}</p>
            <h3 className="mt-3 font-serif text-2xl">{s.titulo}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ComoTrabajo() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/50">Cómo suelo trabajar</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Del lío cotidiano a una herramienta que el equipo usa sin pensarlo.
          </h2>
        </div>
        <ul className="space-y-0 divide-y divide-paper/15 border-y border-paper/15">
          {FORMA_DE_TRABAJAR.map((f) => (
            <li key={f.antes} className="grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
              <div className="md:col-span-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/45">Antes</p>
                <p className="mt-1 text-paper/70 line-through decoration-paper/30">{f.antes}</p>
              </div>
              <div className="md:col-span-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-accent-soft">Después</p>
                <p className="mt-1 font-serif text-xl text-paper">{f.despues}</p>
              </div>
              <p className="text-paper/65 md:col-span-4">{f.ejemplo}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-8">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">Selección</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-5xl">Proyectos</h2>
        </div>
        <p className="max-w-xs text-sm text-muted">
          Proyectos propios con datos de demostración. Empresas, nombres y precios son ficticios.
        </p>
      </div>

      <div className="space-y-24">
        {PROYECTOS.map((p, i) => (
          <article key={p.numero} className="group">
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">{p.numero}</span>
                  <span className="font-mono text-xs text-muted">{p.etiqueta}</span>
                </div>
                <h3 className="mt-3 font-serif text-4xl leading-none tracking-tight">{p.nombre}</h3>
                <p className="mt-4 text-lg">{p.descripcion}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.detalle}</p>
                <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
                {p.enlace ? (
                  <a
                    href={p.enlace.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {p.enlace.texto}
                    <span aria-hidden className="font-mono text-sm">↗</span>
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-muted">Sin enlace público · capturas del sistema</p>
                )}
              </div>
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Galeria capturas={p.capturas} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Galeria({ capturas }: { capturas: Captura[] }) {
  const [principal, ...resto] = capturas;
  return (
    <div className="space-y-2.5">
      <Figura captura={principal} className="aspect-[16/10]" />
      {resto.length > 0 && (
        <div className={`grid gap-2.5 ${resto.length >= 5 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}>
          {resto.map((c) => (
            <Figura key={c.src} captura={c} className="aspect-[16/10]" />
          ))}
        </div>
      )}
    </div>
  );
}

function Figura({ captura, className }: { captura: Captura; className: string }) {
  return (
    <a href={captura.src} target="_blank" rel="noopener" className="block overflow-hidden border border-line bg-paper-2">
      {/* WebP ya optimizados; export estático sin image optimizer de Next. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={captura.src}
        alt={captura.alt}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className={`${className} w-full object-cover object-top transition duration-300 hover:opacity-95`}
      />
    </a>
  );
}

function Stack() {
  return (
    <section className="border-y border-line bg-paper-2/60">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-12">
        <h2 className="font-serif text-3xl md:col-span-4">Stack</h2>
        <dl className="md:col-span-8">
          {STACK.map((s) => (
            <div key={s.area} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]">
              <dt className="font-mono text-xs leading-6 text-muted">{s.area}</dt>
              <dd className="text-lg">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-8 border-t border-ink pt-12 md:grid-cols-12">
        <h2 className="font-serif text-3xl md:col-span-4">Sobre mí</h2>
        <div className="space-y-4 text-lg leading-relaxed md:col-span-7">
          <p>
            Vivo en Arequipa. Me gusta sentarme con alguien que tiene un proceso engorroso —cotizar,
            agendar, cobrar, reportar— y dejarle una herramienta clara que el equipo pueda usar sin
            capacitación eterna.
          </p>
          <p className="text-muted">
            Trabajo en remoto. Mis mañanas en Perú son las tardes en Europa, así que hay varias horas
            en común para reuniones y revisiones.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-accent text-paper">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] sm:text-6xl">
          ¿Qué proceso te está quitando tiempo?
        </h2>
        <p className="mt-5 max-w-lg text-lg text-paper/75">
          Cuéntame en dos líneas qué hace tu equipo a mano hoy. Te respondo con una idea concreta,
          sin compromiso.
        </p>
        <ul className="mt-12 divide-y divide-paper/20 border-y border-paper/20">
          <FilaContacto etiqueta="Correo" href="mailto:diegorivasrev@gmail.com" texto="diegorivasrev@gmail.com" />
          <FilaContacto etiqueta="WhatsApp" href={WHATSAPP} texto="+51 955 140 263" externo />
          <FilaContacto etiqueta="GitHub" href="https://github.com/fenyx144" texto="github.com/fenyx144" externo />
        </ul>
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
        <span className="font-mono text-xs text-paper/55">{etiqueta}</span>
        <span className="text-lg transition-opacity group-hover:opacity-80">
          {texto}
          {externo ? <span className="ml-2 font-mono text-sm opacity-60">↗</span> : null}
        </span>
      </a>
    </li>
  );
}

function Pie() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-5 py-6 font-mono text-[0.7rem] text-muted sm:px-8">
        <span>Diego Rivas Revilla · Arequipa, Perú</span>
        <span>Remoto · horario compatible con Europa</span>
      </div>
    </footer>
  );
}
