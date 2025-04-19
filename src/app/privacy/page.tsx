"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Mail, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

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

export default function PrivacidadPage() {
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
                  Política de Privacidad
                </motion.h1>
                <motion.p
                  className="text-gray-500 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  En Piscina en Casa, valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos,
                  usamos y protegemos tu información.
                </motion.p>
              </div>

              <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
                {/* Información que recopilamos */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-sky-600"
                      >
                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                        <path d="M16.5 9.4 7.55 4.24" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" x2="12" y1="22" y2="12" />
                        <circle cx="18.5" cy="15.5" r="2.5" />
                        <path d="M20.27 17.27 22 19" />
                      </svg>
                    </motion.div>
                    <h2 className="text-xl font-bold text-sky-700">Información que recopilamos</h2>
                  </div>

                  <div className="space-y-4 pl-2">
                    <p className="text-gray-700">Recopilamos información personal cuando:</p>

                    <motion.ul
                      className="list-disc pl-6 space-y-2 text-gray-700"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Nos contactas por WhatsApp, teléfono o formulario.
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Realizas una reserva o solicitas información.
                      </motion.li>
                    </motion.ul>

                    <p className="text-gray-700">La información puede incluir:</p>

                    <motion.ul
                      className="list-disc pl-6 space-y-2 text-gray-700"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Nombre
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Teléfono
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Dirección de instalación
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Mensajes o notas adicionales
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>

                {/* Information Usage */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Shield className="h-5 w-5 text-sky-600" />
                    </motion.div>
                    <h2 className="text-xl font-bold text-sky-700">Uso de la información</h2>
                  </div>

                  <div className="space-y-4 pl-2">
                    <p className="text-gray-700">Utilizamos tus datos únicamente para:</p>

                    <motion.ul
                      className="list-disc pl-6 space-y-2 text-gray-700"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Confirmar tu reserva
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Brindarte atención al cliente
                      </motion.li>
                      <motion.li variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        Mejorar nuestro servicio
                      </motion.li>
                    </motion.ul>

                    <motion.p
                      className="text-gray-700 font-medium mt-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      No vendemos ni compartimos tu información con terceros.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Security */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-sky-600"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </motion.div>
                    <h2 className="text-xl font-bold text-sky-700">Seguridad</h2>
                  </div>

                  <motion.p className="text-gray-700 pl-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    Guardamos tu información en dispositivos seguros y no la conservamos por más tiempo del necesario.
                  </motion.p>
                </motion.div>

                {/* Contact */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mail className="h-5 w-5 text-sky-600" />
                    </motion.div>
                    <h2 className="text-xl font-bold text-sky-700">Contacto</h2>
                  </div>

                  <div className="space-y-4 pl-2">
                    <p className="text-gray-700">Si tienes dudas sobre esta política, puedes escribirnos a:</p>

                    <motion.div
                      className="flex items-center gap-2 text-gray-700"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-4 w-4 text-sky-600" />
                      <span>info@mitiendaenlinea.shop</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2 text-gray-700"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageSquare className="h-4 w-4 text-sky-600" />
                      <span>WhatsApp: +52 981 125 0049</span>
                    </motion.div>
                  </div>
                </motion.div>
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
