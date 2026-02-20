"use client"

import { useEffect, useRef, useState } from "react"
import {
  Pill,
  Stethoscope,
  Baby,
  HeartPulse,
  ShoppingBag,
  Droplets,
} from "lucide-react"

const services = [
  {
    icon: Pill,
    title: "Prescription Medicines",
    description:
      "All major prescription medicines available from trusted pharmaceutical brands with proper storage conditions.",
  },
  {
    icon: Stethoscope,
    title: "OTC Medicines",
    description:
      "Over-the-counter medicines for common ailments like cold, fever, headache, and digestive issues.",
  },
  {
    icon: Baby,
    title: "Baby Care Products",
    description:
      "Complete range of baby care essentials including diapers, baby food, skincare, and health supplements.",
  },
  {
    icon: HeartPulse,
    title: "Health Supplements",
    description:
      "Vitamins, minerals, protein supplements, and health tonics to support your wellbeing.",
  },
  {
    icon: ShoppingBag,
    title: "General Store Items",
    description:
      "Daily essentials and general store products for your convenience, all under one roof.",
  },
  {
    icon: Droplets,
    title: "Personal Care",
    description:
      "Skincare, haircare, oral hygiene, and personal grooming products from leading brands.",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            What We Offer
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Products & Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Everything your family needs for health and daily essentials,
            available at fair prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
