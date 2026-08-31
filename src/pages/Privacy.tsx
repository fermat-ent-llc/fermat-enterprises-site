import LegalPage, { LegalSection } from "@/components/LegalPage";

const CONTACT = "[CONTACT EMAIL]";
const ENTITY = "Fermat Enterprises LLC";

const sections: LegalSection[] = [
  {
    heading: "Overview",
    body: (
      <>
        <p>
          {ENTITY} ("we," "us," or "our") provides consulting, information
          technology, property management, and real estate services. This Privacy
          Policy explains how we collect, use, disclose, and safeguard information
          when you visit fermatenterprisesllc.xyz or use any application or service
          we operate (together, the "Services").
        </p>
        <p>
          By using the Services you agree to the practices described here. If you do
          not agree, please discontinue use of the Services.
        </p>
      </>
    ),
  },
  {
    heading: "Information You Provide",
    body: (
      <>
        <p>We collect information you choose to give us, which may include:</p>
        <ul>
          <li>Contact details such as name, email address, telephone number, and mailing address.</li>
          <li>Business information you share in the course of an engagement or inquiry.</li>
          <li>Account credentials, where an application requires you to register.</li>
          <li>The contents of messages, forms, and correspondence you send to us.</li>
        </ul>
        <p>
          <strong>Note:</strong> We do not intentionally collect sensitive personal
          information (such as government identifiers, health, or biometric data)
          unless it is necessary for a specific engagement and you provide it
          knowingly.
        </p>
      </>
    ),
  },
  {
    heading: "Information Collected Automatically",
    body: (
      <>
        <p>
          When you access the Services, certain technical information may be recorded
          automatically by our hosting and infrastructure providers, including IP
          address, browser type and version, device and operating system, referring
          pages, and the dates and times of access.
        </p>
        <p>
          This site is served as static content and does not set advertising or
          cross-site tracking cookies. Any cookies used are limited to those strictly
          necessary for the operation of the Services.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Information",
    body: (
      <>
        <p>We use the information described above to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Services.</li>
          <li>Respond to inquiries and deliver the services you request.</li>
          <li>Communicate about engagements, updates, and administrative matters.</li>
          <li>Monitor for security incidents, fraud, abuse, and technical faults.</li>
          <li>Comply with legal, regulatory, and contractual obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    heading: "Service Providers and Disclosure",
    body: (
      <>
        <p>
          We share information with third parties only as needed to operate the
          Services, and only to the extent necessary. These may include hosting and
          content delivery providers, email and productivity providers, and
          professional advisors bound by confidentiality obligations.
        </p>
        <p>We may also disclose information where we believe in good faith it is required to:</p>
        <ul>
          <li>Comply with applicable law, legal process, or a governmental request.</li>
          <li>Enforce our agreements or investigate potential violations.</li>
          <li>Protect the rights, property, or safety of {ENTITY}, our clients, or the public.</li>
        </ul>
        <p>
          If we are involved in a merger, acquisition, financing, or sale of assets,
          information may be transferred as part of that transaction.
        </p>
      </>
    ),
  },
  {
    heading: "Data Retention",
    body: (
      <p>
        We retain personal information for as long as necessary to fulfill the
        purposes described in this policy, to satisfy legal, accounting, or reporting
        requirements, and to resolve disputes or enforce agreements. When information
        is no longer required, we take reasonable steps to delete it or render it
        anonymous.
      </p>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        We employ reasonable administrative, technical, and physical safeguards
        designed to protect information against unauthorized access, disclosure,
        alteration, and destruction. No method of transmission over the internet or
        electronic storage is completely secure, however, and we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    heading: "Your Rights and Choices",
    body: (
      <>
        <p>
          Depending on where you reside, you may have the right to request access to,
          correction of, or deletion of your personal information; to object to or
          restrict certain processing; to request portability; and to withdraw consent
          where processing is based on consent.
        </p>
        <p>
          To exercise any of these rights, contact us at {CONTACT}. We will respond
          within the period required by applicable law. We will not discriminate
          against you for exercising these rights.
        </p>
      </>
    ),
  },
  {
    heading: "Children's Privacy",
    body: (
      <p>
        The Services are intended for businesses and individuals aged 18 and over. We
        do not knowingly collect personal information from children under 13. If you
        believe a child has provided us with personal information, contact us at{" "}
        {CONTACT} and we will take steps to delete it.
      </p>
    ),
  },
  {
    heading: "International Users",
    body: (
      <p>
        We operate in the United States. If you access the Services from outside the
        United States, you understand that your information may be transferred to,
        stored in, and processed in the United States, where data protection laws may
        differ from those in your jurisdiction.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the "Last updated" date above. Material changes will be communicated
        through the Services or by direct notice where appropriate. Continued use of
        the Services after a change takes effect constitutes acceptance of the revised
        policy.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        Questions or requests regarding this Privacy Policy may be directed to{" "}
        {ENTITY} at {CONTACT}.
      </p>
    ),
  },
];

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    intro="How Fermat Enterprises LLC collects, uses, and protects information across our website and applications."
    updated="August 31, 2026"
    sections={sections}
  />
);

export default Privacy;
