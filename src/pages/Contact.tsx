import Layout from "@/components/Layout";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 math-bg math-bg-dark relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="font-body text-primary-foreground/75 text-lg max-w-2xl">
            We'd love to hear from you. Reach out and let's discuss how we can work together.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </section>

      <section className="py-20 math-bg">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                    rows={5}
                    className="font-body"
                  />
                </div>
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-gold-light font-body font-semibold px-8 py-5">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Email</p>
                    <p className="font-body text-muted-foreground text-sm">info@fermatenterprisesllc.xyz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Office</p>
                    <p className="font-body text-muted-foreground text-sm">926 W Little Tiger Ct<br />Saratoga Springs, UT 84045</p>
                  </div>
                </div>
              </div>

              {/* Math quote */}
              <div className="mt-12 p-6 bg-primary rounded-md">
                <p className="font-heading text-primary-foreground italic text-lg">"It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second, into two like powers."</p>
                <p className="font-body text-accent text-sm mt-3">— Fermat's Last Theorem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
