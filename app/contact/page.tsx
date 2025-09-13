import CoolNavigation from "@/components/cool-navigation"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <CoolNavigation />
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get
                back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
