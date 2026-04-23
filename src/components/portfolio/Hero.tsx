import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import portrait from "@/assets/portrait.jpeg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--brand)/0.45)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative pt-40 pb-20 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          {/* Left: copy */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-brand" />
              <span className="eyebrow text-muted-foreground">Portfólio · 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="display text-[18vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82]"
            >
              Camila
              <br />
              <span className="text-outline">Renata</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed"
            >
              Especialista em comunicação visual & fotografia. Construo narrativas estéticas
              focadas em conversão e posicionamento de marcas que querem ser lembradas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 bg-brand text-primary-foreground px-7 py-4 eyebrow hover:bg-brand-glow transition-all"
              >
                Ver trabalhos
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <a
                href="#perfil"
                className="eyebrow text-muted-foreground hover:text-foreground transition-colors px-2 py-4"
              >
                Conhecer →
              </a>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={portrait}
                alt="Retrato preto e branco de Camila Renata segurando câmera fotográfica"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              {/* Red wash overlay */}
              <div className="absolute inset-0 bg-brand mix-blend-multiply opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              {/* Frame ticks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-foreground/60" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-foreground/60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-foreground/60" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-foreground/60" />
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-4 lg:-left-16 bottom-10 bg-background border border-border p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm"
            >
              <div className="display text-4xl">05<span className="text-brand">+</span></div>
              <div className="eyebrow text-muted-foreground mt-1">Anos de prática</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Giant background word */}
        <div
          aria-hidden
          className="absolute -bottom-6 left-0 right-0 overflow-hidden pointer-events-none select-none"
        >
          <div className="display text-outline text-[28vw] leading-none whitespace-nowrap opacity-40">
            PORTFÓLIO
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
