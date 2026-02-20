"use client"

import { MapPin, Clock, Navigation } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Location() {
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
    <section id="location" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Find Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Visit Our Store
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Conveniently located in Municipal Market, Jogeshwari West. Easy to
            find and always ready to serve you.
          </p>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-5 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg lg:col-span-3 flex">
            <iframe
              src="https://www.google.com/maps?q=Fair+Care+Medical+%26+General+Store+Municipal+Market+Bandivali+Jogeshwari+West+Mumbai+400102&output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fair Care Medical Store Location"
              className="h-[350px] w-full lg:h-full lg:min-h-[450px]"
            />
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Address Card */}
            <div className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md text-center md:text-left flex flex-col items-center md:items-start">
              {/* <div className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"> */}
              {/* <div className="mb-3 flex items-center gap-3"> */}
              <div className="mb-3 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start">
                {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"> */}
                <div className="mx-auto md:mx-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Address</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Shop No. 1, Municipal Market,
                <br />
                Captain Sawant Marg,
                <br />
                Village Bandivali,
                <br />
                Jogeshwari (W), Mumbai - 400102
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md text-center md:text-left flex flex-col items-center md:items-start">
              <div className="mb-3 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Store Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex flex-col items-center gap-1 md:flex-row md:justify-between">
                  <span>All Days</span>
                  <span className="font-medium text-foreground">8:00 AM - 2:00 AM</span>
                </div>
                <div className="flex flex-col items-center gap-1 md:flex-row md:justify-between">
                  <span className="text-accent font-medium">Open every day</span>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/f1BBPFZdFPca1KY27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <Navigation className="h-4 w-4" />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
