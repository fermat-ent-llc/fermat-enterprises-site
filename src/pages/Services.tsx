import Layout from "@/components/Layout";
import { Briefcase, Monitor, Building2, Home, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Consulting",
    description: "We partner with organizations to solve complex challenges through data-driven strategies and deep industry expertise.",
    features: ["Strategic Planning & Advisory", "Operational Efficiency", "Market Analysis & Research", "Risk Assessment & Mitigation"],
  },
  {
    icon: Monitor,
    title: "IT Technology",
    description: "End-to-end technology solutions that modernize your infrastructure, protect your assets, and accelerate digital growth.",
    features: ["Infrastructure Design & Management", "Cybersecurity Solutions", "Cloud Migration & Optimization", "Custom Software Development"],
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Comprehensive property management services that maximize value, minimize vacancy, and ensure seamless operations.",
    features: ["Tenant Relations & Leasing", "Maintenance & Facilities", "Financial Reporting & Budgeting", "Regulatory Compliance"],
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Expertise across the full real estate lifecycle — from acquisition and development to disposition and portfolio strategy.",
    features: ["Commercial & Residential Sales", "Investment Analysis", "Market Valuation", "Portfolio Management"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 math-bg math-bg-dark relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="font-body text-primary-foreground/75 text-lg max-w-2xl">
            Four areas of expertise, each delivered with the precision and rigor that defines Fermat Enterprises.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </section>

      {/* Services detail */}
      <section className="py-20 math-bg">
        <div className="relative z-10 container mx-auto px-4 md:px-8 space-y-16">
          {services.map(({ icon: Icon, title, description, features }, i) => (
            <div
              key={title}
              className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary flex items-center justify-center">
                  <Icon className="h-12 w-12 text-accent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">{title}</h2>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">{description}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
