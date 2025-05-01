'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Droplets, Clock, FileCheck, Phone, ChevronRight, CheckCircle2, HomeIcon } from "lucide-react"
import MobileMenu from "@/components/mobile-menu/MobileMenu"
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop"

// Component to animate elements when they enter the viewport
interface AnimateWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

function AnimateWhenVisible({ children, delay = 0, className = "" }: AnimateWhenVisibleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

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

const specifications = [
  {
    icon: <Droplets className="h-5 w-5 text-sky-600" />,
    title: "Tamaño de la piscina",
    description: "2.6m x 1.6m x 65cm",
  },
  {
    icon: <HomeIcon className="h-5 w-5 text-sky-600" />,
    title: "Espacio mínimo requerido",
    description: "3.5m x 2.5m",
  },
  {
    icon: <Droplets className="h-5 w-5 text-sky-600" />,
    title: "Conexión a toma de agua",
    description: "Llave o manguera",
  },
  {
    icon: <Droplets className="h-5 w-5 text-sky-600" />,
    title: "Desagüe",
    description: "Por gravedad",
  },
]

const times = [
  {
    icon: <Clock className="h-5 w-5 text-sky-600" />,
    title: "Llenado",
    description: "~3 horas con presión normal",
  },
  {
    icon: <Clock className="h-5 w-5 text-sky-600" />,
    title: "Vaciado",
    description: "3.5 horas por gravedad",
  },
]

const conditions = [
  "El cliente es responsable del cuidado de la piscina mientras esté instalada.",
  "No se permiten objetos punzantes ni mascotas dentro.",
  "El espacio debe estar nivelado y limpio.",
  "Se firma contrato y responsiva antes de instalar.",
  "Opciones de renta: por día o fin de semana.",
]

const faqs = [
  {
    question: "¿Qué incluye el servicio de renta?",
    answer:
      "Incluye traslado a domicilio, instalación y desinstalación de la piscina. Tú solo necesitas el espacio y el agua, ¡nosotros nos encargamos del resto!",
  },
  {
    question: "¿Qué medidas debe tener mi patio o jardín?",
    answer:
      "Se necesita un espacio de al menos 3.5 metros de largo x 2.5 metros de ancho, nivelado y libre de piedras, ramas o cosas que puedan dañar la lona.",
  },
  {
    question: "¿Cómo se llena la piscina?",
    answer:
      "Conectamos una manguera a tu toma de agua (llave de jardín o interior). Con presión normal, el llenado toma aproximadamente 3 horas.",
  },
  {
    question: "¿Y cómo se vacía? ¿A qué hora vienen por ella?",
    answer:
      "El vaciado se hace por gravedad y tarda unas 3 horas. Nosotros te avisamos con tiempo para que puedas empezarlo sin prisas. La pasamos a buscar al día siguiente a la misma hora en que la instalamos, ya desaguada y lista.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "<ul class='list-disc pl-5 space-y-1'><li>1 día: $300</li><li>2 días: $500</li><li>Fin de semana (3 días): $700</li></ul><p class='mt-2'>El pago se realiza al instalar la piscina.</p>",
  },
  {
    question: "¿Pido con cuánta anticipación?",
    answer:
      "Lo ideal es apartar con al menos 24 horas de anticipación, especialmente en fines de semana o temporada de calor.",
  },
  {
    question: "¿Puedo mover la piscina de lugar una vez instalada?",
    answer:
      "No. Por seguridad, solo el proveedor debe manipular la piscina. Moverla puede dañar la lona o afectar el desagüe.",
  },
  {
    question: "¿Qué pasa si se daña la piscina?",
    answer:
      "Si el daño es por mal uso (como objetos punzantes o descuido), se te pedirá cubrir la reparación. Se firma una responsiva al inicio.",
  },
  {
    question: "¿Pueden usarla niños?",
    answer:
      "¡Claro! Pero siempre bajo supervisión de un adulto responsable. No se permite dejar niños solos en la piscina.",
  },
]

const prices = [
  {
    icon: "🏖",
    title: "1 día",
    price: "$300",
    features: ["Nosotros la instalamos", "Y también la pasamos a buscar", "Ideal para eventos de un día"],
  },
  {
    icon: "⏳",
    title: "2 días",
    price: "$500",
    features: ["Nosotros la instalamos", "Y también la pasamos a buscar", "Perfecto para un fin de semana corto"],
  },
  {
    icon: "🎉",
    title: "Fin de semana (3 días)",
    price: "$700",
    features: ["Nosotros la instalamos", "Y también la pasamos a buscar", "La experiencia completa de fin de semana"],
  },
]

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 w-full border-b bg-white"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px:6 w-full mx-auto">

          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-sky-500" />
            <span className="text-xl font-bold text-sky-700">Piscina en casa</span>
          </Link>

          {/* Navigation screen 1024px  */}
          <nav className="hidden lg:flex items-center gap-6">
            <motion.div
              className="flex items-center gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { id: "how-it-works", label: "¿Cómo funciona?" },
                { id: "specifications", label: "Especificaciones" },
                { id: "times", label: "Tiempos" },
                { id: "prices", label: "Precios" },
                { id: "conditions", label: "Condiciones" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Contacto" },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    href={`#${item.id}`}
                    className="text-sm font-medium hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </nav>

          <div className="flex items-center gap-4">
            {/* Contract button 640px */}
            <Link
              href="/contract"
              className="hidden min-[420px]:flex text-sm font-medium bg-sky-100 text-sky-700 px-4 py-2 rounded-md hover:bg-sky-200 items-center gap-1"
            >
              <FileCheck className="h-4 w-4" />
              Ver contrato
            </Link>

            {/* Toggle menu button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Toggle menu</span>
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
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-sky-50 to-white py-20 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="space-y-2">
                  <motion.h1
                    className="text-4xl font-bold tracking-tighter text-sky-800 sm:text-5xl xl:text-6xl/none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    ¡Convierte tu patio en un paraíso!
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    Renta una piscina portátil con instalación y recolección incluidas.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-6 text-lg">
                    <Link href="https://wa.me/529811250049?text=Hola%20deseo%20reservar">
                      Reserva tu fecha
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="mx-auto w-full max-w-[500px] lg:max-w-none"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <motion.div
                  className="aspect-video overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/imgs/image-pool.webp"
                    alt="Piscina portátil instalada en un jardín"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 bg-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    ¿Cómo funciona?
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Disfruta de una piscina en tu hogar en tres simples pasos
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  icon: <Calendar className="h-8 w-8 text-sky-600" />,
                  title: "Reservas tu fecha",
                  description: "Elige el día o fin de semana que deseas disfrutar de tu piscina.",
                },
                {
                  icon: <HomeIcon className="h-8 w-8 text-sky-600" />,
                  title: "Instalamos la piscina",
                  description: "Nuestro equipo profesional instala la piscina en tu espacio.",
                },
                {
                  icon: <Droplets className="h-8 w-8 text-sky-600" />,
                  title: "Disfrutas y nos encargamos",
                  description: "Tú solo disfruta, nosotros la recogemos cuando termines.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100"
                    whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-sky-700">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specifications" className="py-16 bg-sky-50 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    Especificaciones
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Todo lo que necesitas saber sobre nuestra piscina portátil
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {
                specifications.map((spec, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <motion.div
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                              whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                              transition={{ duration: 0.3 }}
                            >
                              {spec.icon}
                            </motion.div>
                            <div className="space-y-1">
                              <h3 className="text-xl font-bold text-sky-700">{spec.title}</h3>
                              <p className="text-gray-500">{spec.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Times */}
        <section id="times" className="py-16 bg-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    Tiempos aproximados
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Planifica tu experiencia con estos tiempos estimados
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {
                times.map((time, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <motion.div
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100"
                              whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                              transition={{ duration: 0.3 }}
                            >
                              {time.icon}
                            </motion.div>
                            <div className="space-y-1">
                              <h3 className="text-xl font-bold text-sky-700">{time.title}</h3>
                              <p className="text-gray-500">{time.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="prices" className="py-16 bg-sky-50">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    Precios y opciones de renta
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Elige el plan que mejor se adapte a tus necesidades
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {
                prices.map((plan, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="flex flex-1 flex-col overflow-hidden border-2 hover:border-sky-300 transition-colors">
                      <CardContent className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="mb-4 flex items-center justify-center">
                            <span className="text-4xl">{plan.icon}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-center text-sky-700 mb-2">{plan.title}</h3>
                          <div className="text-center mb-4">
                            <span className="text-4xl font-bold text-sky-800">{plan.price}</span>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CheckCircle2 className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-auto">
                          <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Reservar ahora</Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>

            <motion.div
              className="mx-auto max-w-3xl mt-8 text-center bg-sky-100 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Nota:</span> El tiempo cuenta desde que se instala. La pasamos a buscar al
                finalizar los días contratados, pero hay que empezar a vaciarla antes para que esté lista.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conditions */}
        <section id="conditions" className="py-16 bg-sky-50 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    Condiciones del servicio
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Información importante para garantizar una experiencia segura y agradable
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto max-w-2xl space-y-4 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {
                conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle2 className="h-6 w-6 text-sky-600 mt-0.5" />
                    </motion.div>
                    <p className="text-gray-700">{condition}</p>
                  </motion.div>
                ))}

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/complete-conditions"
                    className="inline-flex items-center justify-center rounded-md bg-sky-100 px-6 py-3 text-sm font-medium text-sky-700 hover:bg-sky-200"
                  >
                    Ver condiciones completas
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                    Preguntas Frecuentes
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Todo lo que necesitas saber sobre nuestro servicio
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <AnimateWhenVisible delay={2}>
              <div className="mx-auto max-w-4xl space-y-4 pt-10">
                <motion.div
                  className="rounded-lg border border-gray-200 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid divide-y divide-gray-200">
                    {
                      faqs.map((faq, index) => (
                        <motion.details
                          key={index}
                          className="group p-6 [&_summary::-webkit-details-marker]:hidden"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <motion.summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <div className="relative h-5 w-5 shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                              </svg>
                            </div>
                          </motion.summary>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-gray-700"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </motion.details>
                      ))}
                  </div>
                </motion.div>
              </div>
            </AnimateWhenVisible>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-sky-50">
          <div className="container px-4 md:px-6">
            <AnimateWhenVisible>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">Contacto</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ¿Listo para refrescarte? Contáctanos ahora
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>

            <motion.div
              className="mx-auto max-w-md space-y-8 pt-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ duration: 0.3 }}>
                  <Phone className="h-8 w-8 text-sky-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-sky-700">Teléfono</h3>
                  <p className="text-lg text-gray-700">+52 981 125 0049</p>
                </div>
              </motion.div>

              <motion.div className="flex justify-center pt-4" variants={itemVariants}>
                <Button
                  size={"lg"}
                  className="w-full max-w-xs py-6 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-md flex items-center justify-center"
                  asChild
                >
                  <Link
                    href="https://wa.me/529811250049?text=Hola%20deseo%20reservar">
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
                      className="h-6 w-6 mr-2"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                    </svg>
                    Chatea con nosotros
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div >
  )
}
