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
  <div className="mb-6 last:mb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
    <div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-serif">{title}</h3>
      <p className="text-md text-gray-600 dark:text-gray-400 font-sans">{company}</p>
    </div>
    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-1 sm:mt-0">{date}</span>
  </div>
);

const SkillSection: React.FC<SkillItemProps> = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="text-xs font-bold font-sans uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300 font-serif">{skills}</p>
  </div>
);

const MyWork = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-10">

      {/* Work Experience */}
      <section className="bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-academic-border-light/60 dark:border-academic-border-dark/60 pb-3">
          <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-gray-950 dark:text-gray-50">
            <Briefcase className="w-5 h-5 text-academic-accent-light dark:text-academic-accent-dark" /> Experience
          </h2>
          <span className="text-xl text-academic-accent-light dark:text-academic-accent-dark filter drop-shadow-[0.5px_0.5px_0px_currentColor] opacity-80 select-none">🀐</span>
        </div>
        <div className="space-y-6">
          <ExperienceItem
            title="Growth Engineer"
            company="Tractable AI, India"
            date="July 2025 – Present"
          />

          <ExperienceItem
            title="Senior Software Engineer"
            company="Gojiberry, EDOCODE Inc, Tokyo, Japan"
            date="Aug 2023 – June 2025"
          />
          <ExperienceItem
            title="Software Engineer"
            company="Kuroco (Headless CMS), Diverta Inc, Tokyo, Japan"
            date="Jun 2021 – Jul 2023"
          />
          <ExperienceItem
            title="ML Engineer Intern"
            company="Conduta Systems, Diverta Inc, Tokyo, Japan"
            date="May 2020 – Jul 2020"
          />
          <ExperienceItem
            title="Software Engineer Intern (Data), Seismic Division"
            company="Reliance Industries, Navi Mumbai, India"
            date="May 2019 – Jul 2019"
          />
          <ExperienceItem
            title="Research Intern, Seismology Division"
            company="National Geophysical Research Institute, Hyderabad, India"
            date="May 2019 – Jul 2019"
          />
        </div>
      </section>

      {/* Education */}
      <section className="bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-academic-border-light/60 dark:border-academic-border-dark/60 pb-3">
          <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-gray-950 dark:text-gray-50">
            <GraduationCap className="w-5 h-5 text-academic-accent-light dark:text-academic-accent-dark" /> Education
          </h2>
          <span className="text-xl text-academic-accent-light dark:text-academic-accent-dark filter drop-shadow-[0.5px_0.5px_0px_currentColor] opacity-80 select-none">🀆</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-serif">Indian Institute of Technology Roorkee (IIT)</h3>
            <p className="text-md text-gray-600 dark:text-gray-400 font-sans">Integrated Master of Technology (Bachelor + Master)</p>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-1 sm:mt-0">Jul 2016 – Jun 2021</span>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-academic-border-light/60 dark:border-academic-border-dark/60 pb-3">
          <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-gray-950 dark:text-gray-50">
            <Code className="w-5 h-5 text-academic-accent-light dark:text-academic-accent-dark" /> Skills
          </h2>
          <span className="text-xl text-academic-accent-light dark:text-academic-accent-dark filter drop-shadow-[0.5px_0.5px_0px_currentColor] opacity-80 select-none">🀅</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <SkillSection
            title="Programming Languages"
            skills="C++, Golang, PHP, Node.js, TypeScript, JavaScript, Python, R"
          />
          <SkillSection
            title="Web Development"
            skills="React, Next.js, Vue, Nuxt.js, Echo Framework, Smarty"
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
            skills="GCP, GitHub Actions CI/CD, Docker"
          />
          <SkillSection
            title="Languages"
            skills="English (Bilingual), Hindi (Bilingual), Japanese (Basic conversational)"
          />
        </div>
      </section>

      {/* Open Source Contribution */}
      <section className="bg-transparent border border-academic-border-light dark:border-academic-border-dark rounded-xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-academic-border-light/60 dark:border-academic-border-dark/60 pb-3">
          <h2 className="text-xl font-bold font-serif flex items-center gap-2 text-gray-950 dark:text-gray-50">
            <Globe className="w-5 h-5 text-academic-accent-light dark:text-academic-accent-dark" /> Contributions
          </h2>
          <span className="text-xl text-academic-accent-light dark:text-academic-accent-dark filter drop-shadow-[0.5px_0.5px_0px_currentColor] opacity-80 select-none">🀄</span>
        </div>
        <div className="bg-[#faf8f5] dark:bg-[#0a2217]/50 rounded-xl border border-academic-border-light/50 dark:border-academic-border-dark/50 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-serif mb-2">Textbook Companion Project in R | FOSSEE, IIT Bombay</h3>
          <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed mb-4 text-sm">
            Ported exercise solutions from the OpenIntro Statistics textbook to R, fostering
            the use of free and open-source software in education and research. The project was approved by the American
            Institute of Mathematics for use as a Statistics codebook at the university undergraduate level.
          </p>
          <a
            href="https://github.com/thesaltree/OpenIntro-Statistics-in-R"
            className="font-sans text-sm font-semibold inline-flex items-center gap-1 hover:underline text-academic-accent-light dark:text-academic-accent-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code Repository
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MyWork;