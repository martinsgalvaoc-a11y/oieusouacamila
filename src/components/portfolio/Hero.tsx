import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import portrait from "@/assets/portrait.jpeg";
import LocalClock from "./LocalClock";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden grain"
    >
      {/* Background portrait — full screen */}
      <div className="absolute inset-0">
        <motion.img
          src={portrait}
          alt="Retrato de Camila Renata segurando câmera fotográfica"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
          className="w-full h-full object-cover object-[60%_center] sm:object-[65%_center] lg:object-center grayscale contrast-[1.15]"
        />
        {/* Color washes */}
        <div className="absolute inset-0 bg-brand mix-blend-multiply opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,hsl(var(--brand)/0.35)_0%,transparent_55%)]" />
      </div>

      {/* Top bar — clock + status */}
      <div className="relative z-10 container pt-28 lg:pt-32 flex items-center justify-between">
        <LocalClock />
        <div className="hidden sm:flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="eyebrow text-foreground/80">
            Disponível · Maio 2026
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container pt-12 lg:pt-20 pb-32 lg:pb-40 min-h-[calc(100vh-200px)] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-12 bg-brand" />
          <span className="eyebrow text-foreground/80">
            Comunicação Visual · Design · Marketing · 2026
          </span>
        </motion.div>

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="max-w-2xl text-base sm:text-lg text-foreground/90 leading-relaxed mb-8"
        >
          Comunicação visual estratégica para marcas que precisam se apresentar com{" "}
          <span className="text-brand">clareza</span>, profissionalismo e consistência.
        </motion.p>

        {/* Giant name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display text-[18vw] sm:text-[15vw] lg:text-[12vw] leading-[0.8] tracking-[-0.045em]"
        >
          Camila
          <br />
          <span className="text-outline">Renata</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-5"
        >
          <MagneticButton
            href="#portfolio"
            className="group bg-brand text-primary-foreground px-7 py-4 hover:bg-brand-glow"
            strength={0.4}
          >
            <span className="eyebrow flex items-center gap-3">
              Ver trabalhos
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </span>
          </MagneticButton>

          <MagneticButton
            href="#perfil"
            className="group border border-foreground/30 text-foreground px-7 py-4 hover:border-foreground hover:bg-foreground/5"
            strength={0.25}
          >
            <span className="eyebrow">Conhecer perfil</span>
          </MagneticButton>

          <MagneticButton
            href="/curriculo-camila-renata.pdf"
            className="group text-muted-foreground hover:text-foreground px-3 py-4"
            strength={0.2}
            ariaLabel="Baixar currículo em PDF"
          >
            <span className="eyebrow flex items-center gap-2">
              <Download className="w-3.5 h-3.5" />
              Baixar CV
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom corner ticks */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 z-10">
        <span className="w-6 h-px bg-foreground/40" />
        <span className="eyebrow text-muted-foreground">Role para baixo</span>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:block z-10 eyebrow text-muted-foreground">
        © 2026 — CR
      </div>
    </section>
  );
};

export default Hero;