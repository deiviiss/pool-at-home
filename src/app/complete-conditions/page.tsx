'use client'

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Variants for container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

// Variants for child element animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const conditions = [
  {
    title: "1. Responsabilidades del Cliente",
    items: [
      "El cliente es responsable del cuidado y supervisión de la piscina durante todo el período de renta.",
      "Se debe mantener la piscina limpia y libre de objetos extraños.",
      "Los niños deben estar supervisados en todo momento por un adulto responsable.",
      "El cliente debe reportar cualquier daño o problema inmediatamente.",
      "No se permite el uso de la piscina bajo los efectos del alcohol o sustancias que alteren la conciencia.",
    ],
  },
  {
    title: "2. Restricciones de Uso",
    items: [
      "No se permiten objetos punzantes, cortantes o abrasivos dentro o cerca de la piscina.",
      "No se permite el acceso de mascotas a la piscina.",
      "No exceder la capacidad máxima recomendada de personas.",
      "No mover la piscina una vez instalada.",
      "No utilizar productos químicos no autorizados por nuestra empresa.",
    ],
  },
  {
    title: "3. Requisitos del Espacio",
    items: [
      "El área debe estar nivelada, con una pendiente máxima de 5%.",
      "El espacio debe estar limpio, libre de piedras, ramas u otros objetos.",
      "Se requiere un espacio mínimo de 3.5m x 2.5m para la instalación.",
      "Debe haber acceso a una toma de agua.",
      "El área debe tener un drenaje adecuado para el vaciado.",
    ],
  },
  {
    title: "4. Términos de Renta",
    items: [
      "Opciones disponibles: renta por día (24 horas) o fin de semana (viernes a domingo).",
      "El pago completo debe realizarse antes de la instalación.",
      "En caso de condiciones climáticas adversas, se podrá reprogramar sin costo adicional.",
    ],
  },
  {
    title: "5. Daños y Responsabilidad",
    items: [
      "Cualquier daño causado a la piscina o equipos será cubierto por el cliente.",
      "Nuestra empresa no se hace responsable por accidentes o lesiones durante el uso de la piscina.",
      "No nos responsabilizamos por daños a la propiedad causados por fugas o derrames de agua.",
      "El cliente debe firmar un deslinde de responsabilidades antes de la instalación.",
    ],
  },
]

export default function CompleteConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <motion.header
        className="sticky top-0 z-40 w-full border-b bg-white"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container flex h-16 items-center px-4 md:px-6">
          <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2 text-sky-700">
              <ArrowLeft className="h-4 w-4" />
              Volver a inicio
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-3xl space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Condiciones Completas del Servicio
                </motion.h1>
                <motion.p
                  className="text-gray-500 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Información detallada sobre nuestro servicio de renta de piscinas portátiles
                </motion.p>
              </div>

              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                {
                  conditions.map((section, sectionIndex) => (
                    <motion.div key={sectionIndex} variants={itemVariants}>
                      <motion.h2
                        className="text-xl font-semibold text-sky-700 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {section.title}
                      </motion.h2>
                      <motion.ul
                        className="list-disc pl-6 space-y-2 text-gray-700"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  ))}
              </motion.div>

              <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/" className="text-sky-600 hover:text-sky-700 flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Volver a la página principal
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}