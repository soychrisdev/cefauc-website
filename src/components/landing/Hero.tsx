'use client'
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Hero = () => {
  const [symbol, setSymbol] = useState<string | undefined>('✝️');

  useEffect(() => {
    const symbols = ['✝️', '❤️'];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % symbols.length;
      setSymbol(symbols[index]);
    }, 2000); // Cambia el símbolo cada 2 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);
  return (
    <motion.section
      className="animate-in w-ful"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* <motion.img
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        height="550"
                        src="/placeholder.svg"
                        width="550"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        // transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.06 }}
                        whileInView={{ scale: 1.03, transition: { duration: 0.5 } }}
                    /> */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            whileInView={{ scale: 1.01 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforma tu vida {symbol}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Brindamos un espacio de fe y esperanza para todos. Únete a nuestra comunidad y experimenta el amor y la gracia de Dios.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className=" inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#contacto"
              >
                Unirme
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section >
  )
}