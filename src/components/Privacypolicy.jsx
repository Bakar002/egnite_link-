import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-black text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Privacy Policy
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
            Your privacy is of the utmost importance to us. This Privacy Policy explains how we collect, use, protect, and share your information when you engage with our website, digital platforms, and AI-powered services.
          </p>
          <p>
            By using E-Gnite Link AI Systems™ or any affiliated platform, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <Section title="1. Introduction">
            <p>
              E-Gnite Link AI Systems™ ("E-Gnite," "we," "our," or "us") is a technology infrastructure company specializing in AI automation, advanced digital marketing, and software engineering ecosystems.
            </p>
            <p>
              We operate under the principle that intelligence should serve people — ethically, transparently, and responsibly.
            </p>
            <p>
              This document outlines how we collect and manage personal and business data to deliver secure, intelligent, and personalized experiences.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              We collect data to improve system performance, user experience, and platform intelligence. The types of information we may collect include:
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">A. Information You Provide Directly</h3>
            <ul className="list-none space-y-2">
              <li>Name, email address, company name, and role.</li>
              <li>Business and communication preferences.</li>
              <li>Data submitted through contact forms, consultations, or AI integrations.</li>
              <li>Uploaded files, project documentation, or demo requests.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">B. Information Collected Automatically</h3>
            <p>When you visit our website or use our services, we may automatically collect:</p>
            <ul className="list-none space-y-2">
              <li>IP address, device type, browser type, and system metadata.</li>
              <li>Session data, time spent on pages, and navigation behavior.</li>
              <li>AI learning metrics such as engagement frequency and intent recognition.</li>
              <li>Log files and telemetry data for security and system optimization.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">C. Information from Integrations and APIs</h3>
            <p>
              If you connect third-party tools (e.g., HubSpot, Google, or calendar integrations), we may access limited data necessary to enable seamless functionality between your tools and E-Gnite systems.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>
              We use your information to deliver intelligent, efficient, and secure digital experiences. Examples include:
            </p>
            <ul className="list-none space-y-2">
              <li>To operate, personalize, and optimize AI-driven systems.</li>
              <li>To automate workflows, communications, and performance analytics.</li>
              <li>To deliver relevant insights, forecasts, and business recommendations.</li>
              <li>To improve AI accuracy through anonymized data analysis.</li>
              <li>To ensure system security, detect anomalies, and prevent misuse.</li>
              <li>To communicate updates, support responses, or promotional materials (only with your consent).</li>
            </ul>
            <p className="mt-3 font-semibold text-white">
              We never sell, rent, or trade your data.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing (GDPR Compliance)">
            <p>
              Under the General Data Protection Regulation (GDPR), E-Gnite processes your personal data based on the following legal grounds:
            </p>
            <ul className="list-none space-y-2">
              <li><span className="text-white font-semibold">Consent</span> — when you voluntarily provide data.</li>
              <li><span className="text-white font-semibold">Contractual necessity</span> — to deliver requested services or software functionality.</li>
              <li><span className="text-white font-semibold">Legitimate interest</span> — to improve our systems, protect security, and provide better user experience.</li>
              <li><span className="text-white font-semibold">Legal obligation</span> — to comply with applicable laws and regulations.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain personal and business data only as long as necessary for operational, contractual, or compliance purposes.
            </p>
            <p>
              Once data is no longer required, it is securely deleted, anonymized, or archived under encryption protocols.
            </p>
            <p>Retention periods vary depending on:</p>
            <ul className="list-none space-y-2">
              <li>Account activity and system usage.</li>
              <li>Legal retention requirements.</li>
              <li>Ongoing support or contractual agreements.</li>
            </ul>
          </Section>

          <Section title="6. Data Sharing and Third-Party Access">
            <p>
              E-Gnite Link AI Systems™ may share data with trusted partners only when necessary for system functionality or compliance. Examples include:
            </p>
            <ul className="list-none space-y-2">
              <li>Cloud service providers (AWS, Vercel, Azure).</li>
              <li>Payment and billing systems.</li>
              <li>Analytics and performance monitoring tools.</li>
              <li>AI language and speech systems for voice or chat functionality.</li>
            </ul>
            <p className="mt-3">
              Each third party is contractually obligated to maintain data confidentiality and operate under GDPR/CCPA standards.
            </p>
            <p className="font-semibold text-white">
              We never share sensitive or identifiable client data for marketing, resale, or external analysis purposes.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              Your data security is foundational to our infrastructure. We implement enterprise-grade encryption, access control, and continuous monitoring.
            </p>
            <p>Security measures include:</p>
            <ul className="list-none space-y-2">
              <li><span className="text-white font-semibold">Encryption:</span> TLS 1.3 in transit, AES-256-GCM at rest.</li>
              <li><span className="text-white font-semibold">Access Control:</span> Multi-factor authentication (MFA) for all admin operations.</li>
              <li><span className="text-white font-semibold">Monitoring:</span> 24/7 anomaly detection and incident response.</li>
              <li><span className="text-white font-semibold">Backups:</span> Redundant encrypted storage with regional failover.</li>
              <li><span className="text-white font-semibold">Privacy Audits:</span> Regular compliance checks and vulnerability testing.</li>
            </ul>
          </Section>

          <Section title="8. Cookies and Tracking Technologies">
            <p>
              E-Gnite uses cookies and pixel tags to improve system performance and user experience.
            </p>
            <p>
              Cookies allow us to remember user preferences, analyze engagement, and personalize services.
            </p>
            <ul className="list-none space-y-2">
              <li>You can modify or disable cookies in your browser settings.</li>
              <li>Disabling cookies may limit access to certain system functionalities.</li>
            </ul>
          </Section>

          <Section title="9. AI Learning and Data Ethics">
            <p>
              Our AI systems may analyze anonymized interaction data to improve reasoning, prediction accuracy, and response time.
            </p>
            <p>
              We do not use this data for profiling or external marketing.
            </p>
            <p>
              E-Gnite is committed to ethical AI development — ensuring transparency, accountability, and human oversight in all autonomous decision systems.
            </p>
          </Section>

          <Section title="10. Your Rights">
            <p>
              Under global data protection laws, you have the right to:
            </p>
            <ul className="list-none space-y-2">
              <li>Access a copy of your personal data.</li>
              <li>Request correction or deletion of inaccurate or outdated information.</li>
              <li>Withdraw consent at any time.</li>
              <li>Request data portability to another provider.</li>
              <li>Object to automated decision-making.</li>
            </ul>
            <p className="mt-3">
              You may exercise these rights by contacting us at <span className="text-white">egnitelinkaisystems@gmail.com</span>.
            </p>
          </Section>

          <Section title="11. International Data Transfers">
            <p>
              As a global company, data may be processed in different countries.
            </p>
            <p>
              Whenever data is transferred outside the European Economic Area (EEA), we apply strict security measures and Standard Contractual Clauses (SCCs) to maintain GDPR-level protection.
            </p>
          </Section>

          <Section title="12. Children's Privacy">
            <p>
              E-Gnite Link AI Systems™ does not knowingly collect personal data from individuals under 16.
            </p>
            <p>
              If you believe a minor has provided us data, contact us immediately at <span className="text-white">egnitelinkaisystems@gmail.com</span> for removal.
            </p>
          </Section>

          <Section title="13. Policy Updates">
            <p>
              We may update this Privacy Policy periodically to reflect system improvements, legal requirements, or AI architecture changes.
            </p>
            <p>
              The "Last Updated" date at the top of this page will indicate revisions.
            </p>
            <p>
              Significant updates will be communicated via our website or email.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p>If you have questions, concerns, or data requests, please contact:</p>
            <p className="mt-2">📍 New Jersey, United States</p>
            <p>✉️ egnitelinkaisystems@gmail.com</p>
            <p>🌐 www.egnitelinkaisystems.com</p>
          </Section>

          <Section title="15. Commitment to Trust and Transparency">
            <p>
              At E-Gnite, privacy is not a compliance checkbox — it's part of our design philosophy.
            </p>
            <p>
              We believe intelligent systems must respect human context, data ownership, and ethical transparency.
            </p>
            <p>
              Our infrastructures are built to protect, empower, and evolve — without compromise.
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

export default PrivacyPolicy;