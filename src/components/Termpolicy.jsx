import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-black text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Last Updated: December 2025
        </p>

        {/* Intro */}
        <div className="mb-10 space-y-3">
          <p>
            Welcome to <span className="text-white font-semibold">E-Gnite Link AI Systems™</span>.
          </p>
          <p>
            By accessing or using our website, platforms, or AI-driven systems, you agree
            to be bound by the following Terms & Conditions.
          </p>
          <p>
            Please read them carefully before using any E-Gnite services or technology solutions.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <Section title="1. Overview">
            <p>
              E-Gnite Link AI Systems™ (“E-Gnite,” “we,” “our,” or “us”) provides AI-powered
              digital infrastructures, software engineering, and advanced automation systems
              for businesses worldwide.
            </p>
            <p>
              By using our website or services, you acknowledge that you have read,
              understood, and agree to comply with these terms, our Privacy Policy,
              and all applicable laws and regulations.
            </p>
          </Section>

          <Section title="2. Acceptance of Terms">
            <ul className="list-none space-y-2">
              <li>Your use of E-Gnite’s services constitutes acceptance of these Terms.</li>
              <li>If you do not agree, please discontinue use immediately.</li>
              <li>
                We may modify these Terms from time to time — continued use of our services following updates constitutes acceptance of the revised Terms.
              </li>
            </ul>
          </Section>

          <Section title="3. Services Description">
            <ul className="list-none space-y-2">
              <li>AI Digital Infrastructures & Automation Ecosystems</li>
              <li>Advanced Digital Marketing Frameworks</li>
              <li>Custom Software Engineering & Application Development</li>
              <li>AI CRM and Workforce Intelligence Platforms</li>
              <li>Predictive and Conversational AI Systems</li>
            </ul>
            <p className="mt-3">
              All services are designed to help clients engineer self-sufficient
              business growth through automation, intelligence, and adaptive architecture.
            </p>
          </Section>

          <Section title="4. Intellectual Property Rights">
            <ul className="list-none space-y-2">
              <li>All content, algorithms, systems, visuals, and documentation within E-Gnite Link AI Systems™ are protected by international copyright, trademark, and intellectual property laws.</li>
              <li>The E-Gnite Link AI Systems™ name, logo, and brand assets are registered trademarks.</li>
              <li>All software frameworks, system models, and documentation remain proprietary property.</li>
              <li>You may not reproduce, modify, distribute, or reverse-engineer any E-Gnite technology without prior written consent.</li>
              <li>Violations of these terms may result in immediate account suspension and legal action.</li>
            </ul>
          </Section>

          <Section title="5. User Responsibilities">
            <ul className="list-none space-y-2">
              <li>Use all services lawfully and ethically.</li>
              <li>Provide accurate information during setup or onboarding.</li>
              <li>Maintain confidentiality of login credentials and access data.</li>
              <li>Avoid unauthorized access, tampering, or misuse of E-Gnite infrastructure.</li>
              <li>Not exploit E-Gnite software or AI frameworks for malicious or competitive purposes.</li>
              <li>Failure to comply may result in termination of access and potential legal liability.</li>
            </ul>
          </Section>

          <Section title="6. Account Creation and Access">
            <ul className="list-none space-y-2">
              <li>Certain features require account registration.</li>
              <li>You are responsible for safeguarding your credentials and any actions under your account.</li>
              <li>E-Gnite reserves the right to:
                <ul className="list-disc ml-5 space-y-1">
                  <li>Restrict or suspend access if misuse is detected.</li>
                  <li>Deny account creation or terminate access for violations or inactivity.</li>
                  <li>Require authentication or multi-factor verification for sensitive operations.</li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="7. Confidentiality and Data Protection">
            <ul className="list-none space-y-2">
              <li>All data processed through E-Gnite systems is handled in accordance with our Privacy Policy and relevant data protection laws (GDPR, CCPA).</li>
              <li>We maintain the highest levels of encryption, compliance, and data security.</li>
              <li>You retain ownership of your business and customer data.</li>
              <li>E-Gnite acts as a data processor, using information solely for delivering and improving services.</li>
            </ul>
          </Section>

          <Section title="8. AI Predictions, Automation, and Limitations">
            <ul className="list-none space-y-2">
              <li>AI recommendations are probabilistic, not absolute.</li>
              <li>E-Gnite is not liable for decisions made solely based on AI predictions.</li>
              <li>Users should maintain human oversight in all critical decision processes.</li>
              <li>E-Gnite systems assist, augment, and accelerate — they do not replace human accountability.</li>
            </ul>
          </Section>

          <Section title="9. Service Availability and Maintenance">
            <ul className="list-none space-y-2">
              <li>We strive to maintain 99.9% uptime across all cloud infrastructures.</li>
              <li>Temporary interruptions may occur for maintenance, upgrades, or unforeseen circumstances.</li>
              <li>E-Gnite will:
                <ul className="list-disc ml-5 space-y-1">
                  <li>Notify clients in advance of planned maintenance.</li>
                  <li>Restore access promptly after disruptions.</li>
                  <li>Not be held liable for indirect losses arising from downtime, force majeure, or third-party system failure.</li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="10. Payments and Subscriptions">
            <ul className="list-none space-y-2">
              <li>Pricing, billing cycles, and renewal terms will be clearly stated before purchase.</li>
              <li>All payments are processed through secure third-party systems.</li>
              <li>Refunds, where applicable, are governed by your specific service agreement.</li>
              <li>Late payments or disputes may result in service suspension until resolved.</li>
            </ul>
          </Section>

          <Section title="11. Third-Party Integrations">
            <ul className="list-none space-y-2">
              <li>E-Gnite systems integrate with external tools (e.g., HubSpot, Google, Microsoft, Twilio).</li>
              <li>We ensure compatibility and data security, but are not responsible for third-party availability, data handling, or policy changes.</li>
              <li>You should review the terms of each integrated service to ensure compliance.</li>
            </ul>
          </Section>

          <Section title="12. Liability Disclaimer">
            <p>
              E-Gnite Link AI Systems™ provides all services “as is” and “as available.”
              We do not guarantee that our AI systems will be error-free, uninterrupted, or meet every operational expectation.
              To the maximum extent permitted by law, E-Gnite shall not be liable for:
              indirect, incidental, or consequential damages, loss of business data, profits, or opportunity, or service delays beyond our control.
              Your use of E-Gnite systems is at your own discretion and risk.
            </p>
          </Section>

          <Section title="13. Termination">
            <p>
              E-Gnite reserves the right to suspend or terminate service access at any time if:
            </p>
            <ul className="list-none space-y-2">
              <li>Terms are violated.</li>
              <li>Unauthorized or malicious use is detected.</li>
              <li>Payment obligations are not fulfilled.</li>
            </ul>
            <p>Upon termination, all licenses and access rights are immediately revoked.</p>
          </Section>

          <Section title="14. Compliance and Legal Jurisdiction">
            <p>
              E-Gnite Link AI Systems™ complies with applicable data, cybersecurity, and AI governance laws.
              These Terms are governed by the laws of the State of New York, United States.
              Any disputes will be resolved under the jurisdiction of New York state or federal courts.
            </p>
          </Section>

          <Section title="15. Indemnification">
            <p>
              You agree to indemnify and hold harmless E-Gnite Link AI Systems™, its affiliates, officers, and employees from any claims, damages, or liabilities arising from your misuse of the system, violation of terms, or unlawful use of E-Gnite technologies.
            </p>
          </Section>

          <Section title="16. Updates to These Terms">
            <p>
              We may revise these Terms to reflect system upgrades, new regulations, or structural improvements.
              Updated Terms will be published on our website, and continued use signifies acceptance of the new conditions.
            </p>
          </Section>

          <Section title="17. Contact Information">
            <p>📍 New Jersey, United States</p>
            <p>✉️ egnitelinkaisystems@gmail.com</p>
            <p>🌐 www.egnitelinkaisystems.com</p>
          </Section>

          <Section title="18. Ethical AI Commitment">
            <p>
              E-Gnite is committed to ethical, transparent, and human-aligned AI development.
              Our mission is to empower innovation responsibly — protecting user rights, privacy, and fairness in every layer of our digital infrastructure.
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
      {title}
    </h2>
    <div className="space-y-3 leading-relaxed">
      {children}
    </div>
  </div>
);

export default TermsAndConditions;
