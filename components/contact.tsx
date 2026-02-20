"use client"

import { useState, useRef, useEffect, type FormEvent } from "react"
import { Phone, MessageCircle, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const message = formData.get("message") as string

    // Open WhatsApp with pre-filled message
    const whatsappMessage = encodeURIComponent(
      `Hi, I'm ${name}. ${message}`
    )
    window.open(
      `https://wa.me/917977020402?text=${whatsappMessage}`,
      "_blank"
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Get in Touch
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Have a question about medicine availability or need health advice?
            Reach out to us through any of these channels.
          </p>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-2 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Contact Methods */}
          <div className="flex flex-col gap-4">
            {/* Phone Card */}
            <a
              href="tel:9321660774"
              className="group flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <Phone className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  93216 60774
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  Tap to call directly
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917977020402"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent">
                <MessageCircle className="h-6 w-6 text-accent transition-colors group-hover:text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  79770 20402
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  Tap to chat on WhatsApp
                </p>
              </div>
            </a>

            {/* Quick Note */}
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h4 className="mb-2 font-semibold text-foreground">Quick Tip</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For medicine availability queries, simply WhatsApp us a photo of
                your prescription and {"we'll"} check availability for you instantly.
              </p>
            </div>
          </div>

          {/* Contact Form (sends to WhatsApp) */}
          <div className="rounded-2xl bg-card p-6 shadow-sm sm:p-8">
            <h3 className="mb-1 text-xl font-bold text-foreground">
              Send us a Message
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in the form below and {"it'll"} open a WhatsApp chat with your
              message pre-filled.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-accent" />
                <h4 className="mb-2 text-lg font-semibold text-foreground">
                  Message Sent!
                </h4>
                <p className="text-sm text-muted-foreground">
                  We{"'"}ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Ask about medicine availability, store timings, etc."
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
