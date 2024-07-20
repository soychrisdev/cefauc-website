'use client'
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Reuniones = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col space-y-4 text-center">
          <motion.div
            className="items-center justify-center space-y-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Únete a nuestras reuniones</h2>
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Transmisión en vivo
            </div>
            <motion.iframe
              className="mx-auto w-full aspect-[3/1] overflow-hidden z-0"
              height="600"
              src="https://www.youtube.com/embed/OP-00EwLdiU"
              width="550"
              // initial={{ scale: 1 }}
              // animate={{ scale: 1.1 }}
              // transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* <motion.img
                            alt="Imagen"
                            className="mx-auto w-full aspect-[2/1] overflow-hidden rounded-xl object-cover"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        /> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}