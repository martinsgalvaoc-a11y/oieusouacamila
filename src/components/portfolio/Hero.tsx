import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import portrait from "@/assets/portrait.jpeg";
import LocalClock from "./LocalClock";
import MagneticButton from "./MagneticButton";

const pdfHref = `${import.meta.env.BASE_URL}curriculo-camila-renata.pdf`;

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden grain bg-brand"
    >
      {/* Portrait — large silhouette dominating the right side, like the reference */}
      <div className="absolute inset-0 flex items-end justify-center sm:justify-end pointer-events-none">
        <motion.img
          src={portrait}
          alt="Retrato de Camila Renata segurando câmera fotográfica"
          initial={{ scale: 1.15, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
          className="h-[88vh] sm:h-[92vh] lg:h-[100vh] w-auto max-w-none object-contain object-bottom mix-blend-multiply contrast-[1.15] saturate-[0.6] sm:translate-x-[6%] lg:translate-x-[4%]"
        />
        {/* Brand color wash to fuse silhouette with bg */}
        <div className="absolute inset-0 bg-brand/30 mix-blend-color" />
        {/* Soft fade left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/60 to-transparent" />
        {/* Bottom fade to deepen base */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand/90 to-transparent" />
      </div>

      {/* Top bar — clock + status */}
      <div className="relative z-10 container pt-28 lg:pt-32 flex items-center justify-between">
        <LocalClock />
        <div className="hidden sm:flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
          </span>
          <span className="eyebrow text-foreground/90">
            Disponível · Maio 2026
          </span>
        </div>
      </div>

      {/* Main content — left aligned text */}
      <div className="relative z-10 container pt-12 lg:pt-16 pb-44 lg:pb-56 min-h-[calc(100vh-200px)] flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-foreground/80" />
            <span className="eyebrow text-foreground/90">
              Comunicação Visual · Design · 2026
            </span>
          </motion.div>

          {/* Headline like reference: short, bold, uppercase */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
            className="display text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.9] tracking-[-0.04em] text-foreground"
          >
            Desbloqueie
            <br />
            o potencial
            <br />
            da <span className="text-outline">sua marca</span>
          </motion.h1>

          {/* Manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 text-base sm:text-lg text-foreground/90 leading-relaxed max-w-xl"
          >
            Comunicação visual estratégica para marcas que precisam se apresentar com
            clareza, profissionalismo e consistência.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <MagneticButton
              href="#portfolio"
              className="group bg-foreground text-brand px-7 py-4 hover:bg-foreground/90"
              strength={0.4}
            >
              <span className="eyebrow flex items-center gap-3">
                Ver trabalhos
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#perfil"
              className="group border border-foreground/60 text-foreground px-7 py-4 hover:border-foreground hover:bg-foreground/10"
              strength={0.25}
            >
              <span className="eyebrow">Conhecer perfil</span>
            </MagneticButton>

            <MagneticButton
              href={pdfHref}
              download
              className="group text-foreground/80 hover:text-foreground px-3 py-4"
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
      </div>

      {/* Giant cropped name at bottom — like "BRANDING" in the reference */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden"
      >
        <h2
          aria-hidden="true"
          className="display text-foreground/95 leading-[0.8] tracking-[-0.05em] whitespace-nowrap translate-y-[18%] sm:translate-y-[22%] px-4 sm:px-0"
          style={{ fontSize: "clamp(3.5rem, 19vw, 22rem)" }}
        >
          CAMILA
        </h2>
      </motion.div>

      {/* Bottom corner ticks */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 hidden md:flex items-center gap-3 z-20">
        <span className="w-6 h-px bg-foreground/60" />
        <span className="eyebrow text-foreground/80">Role para baixo</span>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden md:block z-20 eyebrow text-foreground/80">
        © 2026 — CR
      </div>
    </section>
  );
};

export default Hero;
