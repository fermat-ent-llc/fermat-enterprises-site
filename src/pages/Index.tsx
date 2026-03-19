import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Monitor, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground math-bg math-bg-dark overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Precision. Strategy.{" "}
              <span className="text-accent">Results.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Fermat Enterprises LLC delivers expert consulting, technology solutions, property management, and real estate services — built on a foundation of analytical rigor and proven methodology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base">
                <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </section>

      {/* Services overview */}
      <section className="py-20 math-bg">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-center font-semibold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-center text-muted-foreground font-body mb-14 max-w-2xl mx-auto">
            Four pillars of expertise, one commitment to excellence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: "Consulting", desc: "Strategic advisory services that drive measurable outcomes for your business." },
              { icon: Monitor, title: "IT Technology", desc: "Modern infrastructure, cybersecurity, and digital transformation solutions." },
              { icon: Building2, title: "Property Management", desc: "Full-service property oversight ensuring asset value and tenant satisfaction." },
              { icon: Home, title: "Real Estate", desc: "Acquisitions, dispositions, and investment strategy across commercial and residential markets." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-md p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <Icon className="h-6 w-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">Ready to Work with Us?</h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Like Fermat's elegant proofs, the best solutions are precise, efficient, and enduring. Let's build yours.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
