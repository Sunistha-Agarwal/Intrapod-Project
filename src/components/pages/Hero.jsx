import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto  "
      >
        <Highlight className="text-black dark:text-white font-serif">Rizz-u.me</Highlight>
      </motion.h1>
    </HeroHighlight>
  )
}

