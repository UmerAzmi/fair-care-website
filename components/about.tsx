"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Heart, Shield, Users, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Heart, label: "Healthcare Products", value: "1000+" },
  { icon: Shield, label: "Trusted Quality", value: "100%" },
  { icon: Users, label: "Happy Customers", value: "5000+" },
  { icon: ThumbsUp, label: "Years of Service", value: "4+" },
]

export function About() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            About Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Your Trusted Health Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Located in the heart of Municipal Market, Jogeshwari West, Fair Care
            has been serving the community with genuine medicines and quality
            healthcare products.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/store-front.jpg"
                alt="Fair Care Medical Store exterior"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h3 className="mb-4 text-center text-2xl font-bold text-foreground">
              Quality Care, Close to Home
            </h3>
            <p className="mb-4 text-center leading-relaxed text-muted-foreground">
              At Fair Care Medical & General Store, we believe that access to
              quality healthcare should be convenient and affordable. Our
              experienced team is dedicated to providing you with genuine
              medicines, expert guidance, and a wide range of healthcare
              products.
            </p>
            <p className="mb-8 text-center leading-relaxed text-muted-foreground">
              From prescription medicines to daily health essentials, we stock
              everything your family needs under one roof. Our commitment to fair
              pricing and genuine products makes us the most trusted medical store
              in the Bandivali-Jogeshwari area.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-secondary p-4 text-center transition-shadow hover:shadow-md"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
