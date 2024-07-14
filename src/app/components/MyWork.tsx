import React from 'react';
import { Briefcase, GraduationCap, Code, Globe } from 'lucide-react';

type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
}

type SkillItemProps = {
  title: string;
  skills: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-lg text-gray-600">{company}</p>
    <p className="text-sm text-gray-500 mt-1">{date}</p>
  </div>
);


const SkillSection: React.FC<SkillItemProps> = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{skills}</p>
  </div>
);

const MyWork = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
          <Briefcase className="mr-2" /> Work Experience
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ExperienceItem
            title="Software Engineer"
            company="Gojiberry, EDOCODE Inc, Tokyo, Japan"
            date="August 2023–Present"
          />
          <ExperienceItem
            title="Software Engineer"
            company="Kuroco- headless CMS, Diverta Inc, Tokyo, Japan"
            date="June 2021–July 2023"
          />
          <ExperienceItem
            title="ML Engineer Intern"
            company="Conduta Systems, Diverta Inc, Tokyo, Japan"
            date="May 2020–July 2020"
          />
          <ExperienceItem
            title="Software Engineer Intern (Data), Seismic Division"
            company="Reliance Industries, Navi Mumbai, India"
            date="May 2019–July 2019"
          />
          <ExperienceItem
            title="Research Intern, Seismology Division"
            company="National Geophysical Research Institute, Hyderabad, India"
            date="May 2019–July 2019"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
          <GraduationCap className="mr-2" /> Education
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Indian Institute of Technology Roorkee (IIT), India</h3>
          <p className="text-lg text-gray-600">Integrated Master of Technology (Bachelor + Master)</p>
          <p className="text-sm text-gray-500 mt-1">July 2016–June 2021</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
          <Code className="mr-2" /> Skills
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillSection
            title="Programming Languages"
            skills="C++, Golang, PHP, NodeJS, TypeScript, JavaScript, Python, R"
          />
          <SkillSection
            title="Web Development"
            skills="React, NextJS, Vue, NuxtJS, Echo Framework, Smarty"
          />
          <SkillSection
            title="Database Management"
            skills="MySQL, PostgreSQL, GraphQL, BigQuery"
          />
          <SkillSection
            title="Testing"
            skills="Testify, PHPUnit, Jest, Selenium, Postman"
          />
          <SkillSection
            title="DevOps & Monitoring"
            skills="GCP, Github Actions, CI/CD, Docker"
          />
          <SkillSection
            title="Languages"
            skills="English (Bilingual), Hindi (Bilingual), Japanese (Basic conversational)"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
          <Globe className="mr-2" /> Open Source Contribution
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Textbook Companion Project in R | FOSSEE, IIT Bombay</h3>
          <p className="text-gray-600">
            Ported exercise solutions from the OpenIntro Statistics textbook to R, fostering
            the use of free and open-source software in education and research. The project was approved by the American
            Institute of Mathematics for use as a Statistics codebook at the university undergraduate level.
          </p>
          <a
            href="https://github.com/thesaltree/OpenIntro-Statistics-in-R"
            className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default MyWork;