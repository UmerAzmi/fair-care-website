import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Fair Care Medical Store interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/90 via-[#1a2332]/70 to-[#1a2332]/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-32">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground backdrop-blur-sm"
            style={{ color: "#2bb556" }}
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-gentle" />
            Trusted Neighborhood Pharmacy
          </div>

          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "#ffffff" }}
          >
            <span className="text-primary-foreground">Fair Care</span>
            <br />
            <span style={{ color: "#93b4e0" }}>
              Medical & General Store
            </span>
          </h1>

          <p
            className="animate-fade-in-up mb-8 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ animationDelay: "0.2s", color: "#c8d6e5" }}
          >
            Your health is our priority. We provide quality medicines, healthcare
            products, and general store essentials with personalized care in the
            heart of Jogeshwari West, Mumbai.
          </p>

          {/* Quick Info */}
          <div
            className="animate-fade-in-up mb-8 flex flex-col gap-4 sm:flex-row sm:gap-6"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2 text-sm" style={{ color: "#c8d6e5" }}>
              <MapPin className="h-4 w-4 text-accent" />
              Jogeshwari West, Mumbai
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#c8d6e5" }}>
              <Clock className="h-4 w-4 text-accent" />
              Open Daily
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="tel:9321660774"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              <Phone className="h-4 w-4" />
              Call: 93216 60774
            </a>
            <a
              href="https://wa.me/917977020402"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#c8d6e5]/30 bg-[#ffffff]/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-[#ffffff]/20"
              style={{ color: "#ffffff" }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 80h1440V40c-240 30-480 40-720 30S240 20 0 40v40z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
