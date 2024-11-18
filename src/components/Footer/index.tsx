import React from 'react';

import footerData from '@/data/footer.json';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#003366] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* For Patients Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">For Patients</h3>
          <ul className="space-y-2">
            <li>
              <a href="/mywellspan" className="hover:text-[#0099cc]">
                MyWellSpan Login
              </a>
            </li>
            <li>
              <a href="/resources/patient-resources" className="hover:text-[#0099cc]">
                All Patient Resources
              </a>
            </li>
            <li>
              <a href="/billing" className="hover:text-[#0099cc]">
                Billing & Insurance
              </a>
            </li>
            <li>
              <a href="/financial-assistance" className="hover:text-[#0099cc]">
                Financial Assistance
              </a>
            </li>
            <li>
              <a href="/medical-records" className="hover:text-[#0099cc]">
                Medical Records
              </a>
            </li>
            <li>
              <a href="/patient-policies" className="hover:text-[#0099cc]">
                Patient Policies
              </a>
            </li>
            <li>
              <a href="/price-transparency" className="hover:text-[#0099cc]">
                Price Transparency
              </a>
            </li>
          </ul>
        </div>

        {/* Explore WellSpan Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore WellSpan</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-[#0099cc]">
                About Us
              </a>
            </li>
            <li>
              <a href="/leadership" className="hover:text-[#0099cc]">
                Leadership & Advocacy
              </a>
            </li>
            <li>
              <a href="/newsroom" className="hover:text-[#0099cc]">
                Newsroom
              </a>
            </li>
            <li>
              <a href="/awards" className="hover:text-[#0099cc]">
                Awards & Recognition
              </a>
            </li>
            <li>
              <a href="/employer-services" className="hover:text-[#0099cc]">
                Employer Services
              </a>
            </li>
          </ul>
        </div>

        {/* Get Involved Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
          <ul className="space-y-2">
            <li>
              <a href="/donate" className="hover:text-[#0099cc]">
                Donate to WellSpan
              </a>
            </li>
            <li>
              <a href="/support-our-mission" className="hover:text-[#0099cc]">
                Support Our Mission
              </a>
            </li>
            <li>
              <a href="/classes-events" className="hover:text-[#0099cc]">
                Attend a Class or Event
              </a>
            </li>
            <li>
              <a href="/volunteer" className="hover:text-[#0099cc]">
                Volunteer
              </a>
            </li>
            <li>
              <a href="/participate-in-research" className="hover:text-[#0099cc]">
                Participate in Research
              </a>
            </li>
            <li>
              <a href="/host-an-event" className="hover:text-[#0099cc]">
                Host an Event
              </a>
            </li>
            <li>
              <a href="/gene-health-project" className="hover:text-[#0099cc]">
                Participate in Gene Health Project
              </a>
            </li>
          </ul>
        </div>

        {/* For Healthcare Professionals Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">For Healthcare Professionals</h3>
          <ul className="space-y-2">
            <li>
              <a href="/careers" className="hover:text-[#0099cc]">
                Careers at WellSpan
              </a>
            </li>
            <li>
              <a href="/provider-resources" className="hover:text-[#0099cc]">
                Provider Resources
              </a>
            </li>
            <li>
              <a href="/refer-a-patient" className="hover:text-[#0099cc]">
                Refer a Patient
              </a>
            </li>
            <li>
              <a href="/education-development" className="hover:text-[#0099cc]">
                Education & Development
              </a>
            </li>
            <li>
              <a href="/research" className="hover:text-[#0099cc]">
                Research
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Contact Section */}
      <div className="text-center text-sm mt-12">
        <p>
          Contact WellSpan | To schedule an appointment, call 800-840-5905. For other customer service needs, call
          877-232-5807
        </p>
        <p className="mt-4 space-x-4">
          <a href="/team-members" className="hover:text-[#0099cc]">
            WellSpan Team Members & Partners
          </a>
          |
          <a href="/disclaimer" className="hover:text-[#0099cc]">
            {' '}
            Disclaimer & Policies
          </a>
          |
          <a href="/non-discrimination" className="hover:text-[#0099cc]">
            {' '}
            Non-Discrimination Notice
          </a>
          |
          <a href="/sitemap" className="hover:text-[#0099cc]">
            {' '}
            Sitemap
          </a>
        </p>
      </div>

      {/* Language Assistance & Copyright Section */}
      <div className="text-center text-xs mt-8">
        <p>
          If your primary language is not English, language assistance services, free of charge, are available to you.
          Call 866-593-3086 (Deaf/Hard of Hearing Customers: PA Relay 711)
        </p>
        <p className="mt-2">© 2024 WellSpan Health</p>
      </div>
    </footer>
  );
};

export default Footer;
