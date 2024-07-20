'use client'
import { motion, Variants } from "framer-motion";

const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const zoomIn: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const Encuentranos = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      animate="visible"
    >
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Deseamos conocerte, visitanos!</h2>
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Nuestra dirección es: Direccion de la iglesia, 1400. Santiago.
            </div>
          </motion.div>
          <motion.img
            alt="Imagen"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
            height="310"
            src="/placeholder.svg"
            width="550"
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.section>
  )
}