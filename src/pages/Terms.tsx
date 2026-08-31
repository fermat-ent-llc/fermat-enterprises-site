import LegalPage, { LegalSection } from "@/components/LegalPage";

const CONTACT = (
  <a href="mailto:operations@fermatenterprisesllc.xyz">operations@fermatenterprisesllc.xyz</a>
);
const ENTITY = "Fermat Enterprises LLC";
const JURISDICTION = "Utah";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms of Service ("Terms") govern your access to and use of
          fermatenterprisesllc.xyz, <strong>Hermes Agent</strong>, and any other
          application or service operated by {ENTITY} ("we," "us," or "our")
          (together, the "Services").
        </p>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms. If
          you do not agree, do not use the Services. If you use the Services on behalf
          of an organization, you represent that you have authority to bind that
          organization to these Terms.
        </p>
      </>
    ),
  },
  {
    heading: "Eligibility",
    body: (
      <p>
        You must be at least 18 years old and capable of forming a binding contract to
        use the Services. By using the Services, you represent and warrant that you
        meet these requirements.
      </p>
    ),
  },
  {
    heading: "The Services",
    body: (
      <>
        <p>
          {ENTITY} provides consulting, information technology, property management,
          and real estate services, and develops <strong>Hermes Agent</strong>, which
          we offer both as a service and as a product to clients and customers. The
          website and any associated applications provide information about, and
          access to, those offerings.
        </p>
        <p>
          Content presented through the Services is provided for general informational
          purposes. It does not constitute legal, financial, investment, tax, or other
          professional advice, and it does not create a professional or fiduciary
          relationship. Engagements are governed by a separate written agreement
          between you and {ENTITY}; where such an agreement conflicts with these
          Terms, that agreement controls.
        </p>
      </>
    ),
  },
  {
    heading: "Accounts and Security",
    body: (
      <p>
        Where the Services require an account, you agree to provide accurate and
        complete information and to keep it current. You are responsible for
        safeguarding your credentials and for all activity that occurs under your
        account. Notify us promptly at {CONTACT} of any unauthorized use or suspected
        breach of security.
      </p>
    ),
  },
  {
    heading: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services in violation of any applicable law or regulation.</li>
          <li>Attempt to gain unauthorized access to the Services or related systems.</li>
          <li>Interfere with, disrupt, or place undue load on the Services or their infrastructure.</li>
          <li>Introduce malware or any other harmful or destructive code.</li>
          <li>Scrape, harvest, or systematically extract data except as expressly permitted.</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Services except where such restriction is prohibited by law.</li>
          <li>Use the Services to transmit unlawful, infringing, defamatory, or otherwise objectionable material.</li>
          <li>Misrepresent your identity or affiliation with any person or entity.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    body: (
      <>
        <p>
          The Services and all content within them — including text, graphics, logos,
          design, and software — are owned by {ENTITY} or its licensors and are
          protected by intellectual property laws. Except as expressly permitted, you
          may not copy, modify, distribute, publicly display, or create derivative
          works from any part of the Services.
        </p>
        <p>
          We grant you a limited, revocable, non-exclusive, non-transferable license to
          access and use the Services for their intended purpose. All rights not
          expressly granted are reserved.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Links and Services",
    body: (
      <p>
        The Services may link to or integrate with third-party websites and services
        that we do not control. We are not responsible for their content, policies, or
        practices, and inclusion of a link does not imply endorsement. Your use of any
        third-party service is governed by that party's terms.
      </p>
    ),
  },
  {
    heading: "Disclaimer of Warranties",
    body: (
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY
        KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, {ENTITY}{" "}
        DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT
        WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
        OR THAT ANY CONTENT IS ACCURATE OR COMPLETE.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    body: (
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, {ENTITY} AND ITS MEMBERS, OFFICERS,
        EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
        PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF
        THE SERVICES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE
        SERVICES SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100) OR THE AMOUNT YOU
        PAID US FOR THE SERVICES IN THE TWELVE MONTHS PRECEDING THE CLAIM, WHICHEVER IS
        GREATER. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO THESE MAY NOT
        APPLY TO YOU.
      </p>
    ),
  },
  {
    heading: "Indemnification",
    body: (
      <p>
        You agree to indemnify, defend, and hold harmless {ENTITY} and its members,
        officers, employees, and agents from any claims, liabilities, damages, losses,
        and expenses, including reasonable attorneys' fees, arising out of or related
        to your use of the Services, your violation of these Terms, or your violation
        of any rights of a third party.
      </p>
    ),
  },
  {
    heading: "Termination",
    body: (
      <p>
        We may suspend or terminate your access to the Services at any time, with or
        without notice, for any reason, including violation of these Terms. Provisions
        that by their nature should survive termination — including intellectual
        property, disclaimers, limitation of liability, and indemnification — will
        survive.
      </p>
    ),
  },
  {
    heading: "Governing Law and Disputes",
    body: (
      <p>
        These Terms are governed by the laws of the State of {JURISDICTION}, without
        regard to its conflict of law principles. You agree that any dispute arising
        out of or relating to these Terms or the Services shall be brought exclusively
        in the state or federal courts located in {JURISDICTION}, and you consent to
        the personal jurisdiction of those courts.
      </p>
    ),
  },
  {
    heading: "Changes to These Terms",
    body: (
      <p>
        We may revise these Terms at any time. When we do, we will update the "Last
        updated" date above. Material changes will be communicated through the Services
        or by direct notice where appropriate. Your continued use of the Services after
        changes take effect constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    heading: "Miscellaneous",
    body: (
      <p>
        These Terms constitute the entire agreement between you and {ENTITY} regarding
        the Services, except where a separate written engagement agreement applies. If
        any provision is held unenforceable, the remaining provisions remain in full
        force. Our failure to enforce any provision is not a waiver of it. You may not
        assign these Terms without our prior written consent.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        Questions about these Terms may be directed to {ENTITY} at {CONTACT}.
      </p>
    ),
  },
];

const Terms = () => (
  <LegalPage
    title="Terms of Service"
    intro="The terms governing your use of the Fermat Enterprises LLC website and applications."
    updated="August 31, 2026"
    sections={sections}
  />
);

export default Terms;
