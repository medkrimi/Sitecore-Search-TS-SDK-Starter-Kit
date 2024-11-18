import React from 'react';

import { PAGE_EVENTS_HOME } from '@/data/constants';
import withPageTracking from '@/hocs/withPageTracking';
import HomeHighlighted from '@/widgets/HomeHighlighted';
import PreviewSearch from '@/widgets/PreviewSearch';
import QuestionsAnswers from '@/widgets/QuestionsAnswers';
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      <header className="bg-blue-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/doctors" className="text-lg text-blue-800 hover:text-blue-600">
              Doctors
            </a>
            <a href="/locations" className="text-lg text-blue-800 hover:text-blue-600">
              Locations
            </a>
            <a href="/conditions-and-treatments" className="text-lg text-blue-800 hover:text-blue-600">
              Conditions & Treatments
            </a>
            <a href="/patient-resources" className="text-lg text-blue-800 hover:text-blue-600">
              Patient Resources
            </a>
            <a href="/mywellspan" className="text-lg text-blue-800 hover:text-blue-600">
              MyWellSpan
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
            Let's Help You Feel Right and Live Well
          </h1>

          {/* Search Box */}
          <div className="flex justify-center mb-12">
            <PreviewSearch rfkId="rfkid_6" />
          </div>

          {/* "Get Care Now" Section */}
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-800 mb-8">BE SEEN TODAY</p>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Get Care Now</h2>
            <p className="mb-8">
              We have convenient options to get the right care for you when you need it.{' '}
              <a href="#" className="text-blue-600">
                View all care options.
              </a>
            </p>

            {/* Care Options Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Virtual On-Demand Care</h3>
                <p className="text-gray-600">
                  24/7 online access to a doctor through MyWellSpan on your phone, computer, or tablet.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Walk-In Urgent Care</h3>
                <p className="text-gray-600">
                  No appointment needed. You may reserve a spot online at some locations or walk in.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Emergency Care</h3>
                <p className="text-gray-600">Available 24/7. No appointment needed.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HTMBlockWidget rfkId="home_hero_wellspan" />
      <QuestionsAnswers rfkId="rfkid_qa" defaultKeyphrase="what does gilead sciences do?" defaultRelatedQuestions={4} />
      <HTMBlockWidget rfkId="highlight_title" />
      <HomeHighlighted rfkId="search_home_highlight_articles" />
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
