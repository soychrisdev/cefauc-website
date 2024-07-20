'use client'
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export const Presentacion = () => {
  return (
    <motion.section
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div >
        <div className="flex flex-col space-y-4 text-center">
          <motion.div
            className="relative items-center justify-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              alt="Imagen"
              className="mx-auto w-full aspect-[2/1] overflow-hidden object-cover z-0"
              height="310"
              src="https://www.marinerschurch.org/wp-content/uploads/2020/08/hero_1.jpg"
              width="550"
            // initial={{ scale: 1 }}
            // animate={{ scale: 1.1 }}
            // transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-50">
              Bienvenido a Cefauc, una iglesia que te abraza con amor
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}