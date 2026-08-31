import Layout from "@/components/Layout";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Shared shell for the static legal pages (Privacy Policy, Terms of Service).
 * Mirrors the hero + content rhythm used by Services so the pages don't read
 * as bolted on.
 */
const LegalPage = ({ title, intro, updated, sections }: LegalPageProps) => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 math-bg math-bg-dark relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="font-body text-primary-foreground/75 text-lg max-w-2xl">{intro}</p>
        <p className="font-body text-primary-foreground/50 text-sm mt-4">Last updated: {updated}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>

    <section className="py-16 md:py-20 math-bg">
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((section, i) => (
            <section key={section.heading} aria-labelledby={`s-${i}`}>
              <h2
                id={`s-${i}`}
                className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3"
              >
                <span className="text-accent mr-2">{i + 1}.</span>
                {section.heading}
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-3 [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_strong]:text-foreground">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default LegalPage;
