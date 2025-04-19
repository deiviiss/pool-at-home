'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export const Footer = () => {
  return (
    < motion.footer
      className="border-t bg-sky-50 py-6 md:py-0"
      initial={{ opacity: 0 }
      }
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2025 Piscina en casa. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/complete-conditions" className="text-sm text-gray-500 hover:text-sky-600">
              Condiciones de servicio
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-sky-600 font-medium">
              Política de privacidad
            </Link>
          </motion.div>
        </div>
      </div>
    </ motion.footer >
  )
}
