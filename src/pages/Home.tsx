import React from 'react';
import { Link } from 'react-router-dom';

import { PAGE_EVENTS_HOME } from '@/data/constants';
import withPageTracking from '@/hocs/withPageTracking';
import HomeHighlighted from '@/widgets/HomeHighlighted';
import QuestionsAnswers from '@/widgets/QuestionsAnswers';
import { HTMBlockWidget } from '@sitecore-search/react';

const Home = (): JSX.Element => {
  return (
    <>
      {/* Main Content Section */}

      <main className="flex-grow">
        <section className="bg-gray-100 py-12">
          {/* "Get Care Now" Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#8c1360] mb-4">Making People's Lives BETTER</h2>
            <p className="text-gray-600 mb-6">
              At Chartwell, we're all about people. You could say we're in the business of health, happiness, and peace
              of mind—for older adults, their families, and the communities across Canada we call home.
            </p>

            {/* Care Options Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto w-full max-w-7xl relative">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-48 w-full mb-4">
                  <img
                    src="https://dam.chartwell.com/m/42ab2e080ec9763a/Tablet_Generic_Hero_webp-Chartwell-HOME-Care-Nurse-psw-blood-pressure.webp"
                    alt="Care nurse measuring blood pressure of the Chartwell senior resident"
                    className="object-cover h-full w-full rounded-t-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#8c1360] mb-4">Care & Support</h3>
                <p className="text-gray-600 mb-4">
                  You’re empowered to craft what the right level of support looks like for you at Chartwell. Our
                  retirement residences offer flexible care and support options that can help you feel your best each
                  day, catering to the needs and preferences of today’s seniors. Let us partner with you to build a
                  personalized plan of care that gives you the comfort and peace of mind you deserve. That way, you can
                  focus on what’s most important to you in your retirement years, with our friendly and dedicated staff
                  here to take care of the rest.
                </p>
                <button className="text-white bg-[#8c1360] px-6 py-3 rounded-md shadow hover:bg-[#73104f]">
                  Explore Chartwell’s living and care options
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-48 w-full mb-4">
                  <img
                    src="https://dam.chartwell.com/m/4dc7bcc0b7c96725/Tablet_Generic_Hero_webp-Chartwell_HOME_Life_Enrich.webp"
                    alt="Group of seniors playing a game. Groupe de personnes âgées jouant à un jeu."
                    className="object-cover h-full w-full rounded-t-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#8c1360] mb-4">Life Enrichment</h3>
                <p className="text-gray-600 mb-4">
                  What makes senior living at Chartwell a lifestyle that stands out from the rest? It’s thriving in a
                  welcoming and diverse community of people with shared experiences who you can count as new friends—as
                  well as having optional activity offerings that can enrich your life. Fitness classes, hobby clubs,
                  themed events, outings, and much more act as a springboard for connecting with others, exploring a
                  favourite passion, or supporting your wellness. The best part? The choice of how you spend each day
                  with us is entirely your own.
                </p>
                <button className="text-white bg-[#8c1360] px-6 py-3 rounded-md shadow hover:bg-[#73104f]">
                  Discover Chartwell’s life enrichment programming
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-48 w-full mb-4">
                  <img
                    src="https://dam.chartwell.com/m/5235d264e29059bb/Tablet_Generic_Hero_webp-Chartwell_HOME_lady_with_Cake.webp"
                    alt="Senior woman eating cake. Femme âgée mangeant un gâteau."
                    className="object-cover h-full w-full rounded-t-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#8c1360] mb-4">Dining Experience</h3>
                <p className="text-gray-600 mb-4">
                  What could be more enjoyable than gathering around a table with friends to share a story over a hot,
                  delicious meal? At Chartwell, we strive to deliver a dining experience based on wholesome food and
                  great service, where you can sit back and relax as friendly staff attend to your tastes and
                  preferences. Fresh produce, nutritional value, seasonal variety, flexible menu choices, and warm
                  service are the ingredients for an experience that we hope will leave you feeling very satisfied.
                </p>
                <button className="text-white bg-[#8c1360] px-6 py-3 rounded-md shadow hover:bg-[#73104f]">
                  Learn more about Chartwell’s dining experience
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <HTMBlockWidget rfkId="highlight_title" />
       */}
      <div className="container mx-auto px-4 pt-6">
        <h2 className="text-4xl font-extrabold text-[#8c1360] text-center mb-8">
          Discover a Chartwell Residence Near You
        </h2>
        <p>
          This block is driven by search and can be personalized as needed to highligh specific residence for your
          customer.
        </p>
        <HomeHighlighted rfkId="chartwell_search_home_highlight_residence" />
      </div>
      <HTMBlockWidget rfkId="chartwell_home_hero_banner" />
      <QuestionsAnswers
        rfkId="rfkid_qa"
        defaultKeyphrase="What are the six dimensions of wellness that Chartwell offers?" // How do they cater to the needs of seniors?
        defaultRelatedQuestions={4}
      />
    </>
  );
};

export default withPageTracking(Home, PAGE_EVENTS_HOME);
