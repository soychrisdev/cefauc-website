'use client'
import { motion, Variants } from "framer-motion";
import Link from 'next/link';

const fadeInScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const Noticias = () => {
  const noticias = Array.from({ length: 12 });

  return (
    <section className="w-full">
      <div className="container space-y-4 px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Enterate de nuestras noticias!</h2>
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          Revisa las noticias de la iglesia y de la comunidad
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {noticias.map((_, index) => {
            const isLastItem = index === noticias.length - 1;

            return (
              <motion.div
                key={index}
                variants={fadeInScaleUp}
                initial="hidden"
                animate="visible"
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {isLastItem ? (
                  <Link href="/noticias">
                    <div className="relative">
                      <img
                        alt="Imagen"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                      />
                      <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-50 rounded-xl">Ver más</p>
                    </div>
                  </Link>
                ) : (
                  <Link href="/noticias/1">
                    <img
                      alt="Imagen"
                      className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover"
                      height="310"
                      src="/placeholder.svg"
                      width="550"
                    />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}