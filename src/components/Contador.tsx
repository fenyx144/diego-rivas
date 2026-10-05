"use client";

/** Contador animado: de 0 al valor final al entrar en vista. */
import { useEffect, useRef, useState } from "react";

export default function Contador({ valor, sufijo = "" }: { valor: number; sufijo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || listo) return;

    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const iniciar = () => {
      setListo(true);
      if (reducir) {
        // Sin animación: el valor final se aplica en el siguiente frame vía rAF (no setState síncrono en el efecto).
        raf = requestAnimationFrame(() => setN(valor));
        return;
      }
      const t0 = performance.now();
      const dur = 1100;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(valor * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        iniciar();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valor, listo]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {sufijo}
    </span>
  );
}
