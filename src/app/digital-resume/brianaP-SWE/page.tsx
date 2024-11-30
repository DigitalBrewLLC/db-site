import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

export default function BrianaPeppersResume() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-20 pb-20 gap-8 sm:gap-12 md:gap-16 font-[family:var(--font-geist-sans)] bg-background text-text">
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        {/* Banner/Header Section */}
        <div className="w-full text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
            Briana Peppers
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary">
            Software Engineer
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/brianadpeppers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent flex items-center gap-2 text-sm sm:text-base"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/BDPeppers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent flex items-center gap-2 text-sm sm:text-base"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-accent pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {/* Pluralsight Position */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Frontend Software Engineer (ReactJs)
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  MAR 2022 – PRESENT
                </span>
              </div>
              <p className="text-text-secondary font-medium text-sm sm:text-base">
                Pluralsight Flow, Remote
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-sm sm:text-base text-text">
                <li>
                  Developed interactive reports for user metrics and team
                  performance data on the Pluralsight Flow platform, enabling
                  data-driven insights for stakeholders.
                </li>
                <li>
                  Completed a comprehensive accessibility audit, identifying and
                  resolving critical issues, and integrated accessibility
                  linters and testing into the CI pipeline.
                </li>
                <li>
                  Led feature initiatives to develop and consolidate reports and
                  retire outdated ones; presented beta and alpha releases to the
                  go-to-market team.
                </li>
                <li>
                  Increased test coverage by backfilling integrations and unit
                  tests using Cypress and Jest.
                </li>
                <li>
                  Extended the component library for the Flow BU by developing
                  reusable widgets and standardizing common components.
                </li>
                <li>
                  Mentored interns and conducted interviews for front-end
                  candidates.
                </li>
                <li>
                  Served as a teaching assistant for Web Development classes in
                  a Pluralsight X Year Up collaboration.
                </li>
              </ul>
            </div>

            {/* Freelance Position */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Freelance Web Developer/Designer (ReactJs/NextJs)
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  OCT 2018 – JUN 2023
                </span>
              </div>
              <p className="text-text-secondary font-medium text-sm sm:text-base">
                Atlanta, GA
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-sm sm:text-base text-text">
                <li>
                  Developed and maintained responsive, user-friendly, and
                  SEO-optimized websites for local businesses.
                </li>
                <li>
                  Established and managed Google Business Profiles to improve
                  client visibility and search rankings.
                </li>
                <li>
                  Led project management and provided end-to-end client
                  consultations.
                </li>
              </ul>
            </div>

            {/* MaxEx Position */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Full Stack Developer (.NET/AngularJS/Angular)
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  FEB 2020 – JAN 2022
                </span>
              </div>
              <p className="text-text-secondary font-medium text-sm sm:text-base">
                MaxEx, Atlanta, GA
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-sm sm:text-base text-text">
                <li>
                  Developed, tested, and documented new and modified business
                  processes and features
                </li>
                <li>
                  Researched system workflow, data usage/storage, and business
                  logic to optimize and refactor the codebase
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-accent pb-2">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-text text-sm sm:text-base">
                  Languages & Frameworks
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  TypeScript, CSS/SCSS/SASS, Tailwind, Styled Components, C#,
                  SQL, Python
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm sm:text-base">
                  Testing & Monitoring
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  Jest, React Testing Library, Cypress, DataDog, Synk,
                  LaunchDarkly
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm sm:text-base">
                  Design & CMS
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  Figma, TinaCMS, Sanity
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm sm:text-base">
                  Development & Deployment
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  Atlassian Suite, Node.js (NPM/Yarn), React.Js, Next.js,
                  Vite.js, Webpack, GraphQL, REST, Git/GitHub, Jenkins, Argo CD,
                  Vercel, Netlify
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-accent pb-2">
            Technical Articles & Publications
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  <a
                    href="https://www.linkedin.com/pulse/integrating-accessibility-frontend-development-briana-peppers-0rxje/?trackingId=Ct3r6AtYSnWdKqIU79y0Dg%3D%3D"
                    className="flex items-center gap-2 hover:underline hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read article: Integrating Accessibility into Frontend Development"
                  >
                    Integrating Accessibility into Frontend Development
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  OCT 2024
                </span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base">
                Published on LinkedIn
              </p>
              <p className="text-text-secondary mt-2 text-sm sm:text-base">
                The CARE (Coding for Accessible and Responsive Experiences)
                principle should be integral to a holistic development approach.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  <a
                    href="https://medium.com/@peppersbre/integrating-the-mailchimp-api-with-a-vite-react-app-8ca3cda88d6c"
                    className="flex items-center gap-2 hover:underline hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read article: Integrating the Mailchimp API with a Vite + React App"
                  >
                    Integrating the Mailchimp API with a Vite + React App
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  NOV 2024
                </span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base">
                Published on Medium
              </p>
              <p className="text-text-secondary mt-2 text-sm sm:text-base">
                A guide to integrating the Mailchimp API with a Vite + React
                app.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  <a
                    href="https://medium.com/@peppersbre/why-local-seo-is-crucial-for-small-businesses-414400e857c3"
                    className="flex items-center gap-2 hover:underline hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read article: Why Local SEO is Crucial for Small Businesses"
                  >
                    Why Local SEO is Crucial for Small Businesses
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  NOV 2024
                </span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base">
                Published on Medium
              </p>
              <p className="text-text-secondary mt-2 text-sm sm:text-base">
                Use effective SEO strategies to increase your small
                business&apos;s local visibility and attract more customers.
                This article covers optimization techniques and common pitfalls
                to avoid, helping you strengthen your presence in local search
                results.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-accent pb-2">
            Education & Certifications
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Georgia State University
                </h3>
                <span className="text-xs sm:text-sm text-text-secondary">
                  AUG 2016 – DEC 2019
                </span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base">
                Computer Science, B.S.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                Geographic Information Systems, Professional Certificate
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-text text-sm sm:text-base">
                Certifications
              </h3>
              <ul className="list-disc ml-4 text-sm sm:text-base text-text">
                <li>AWS Certified AI Practioner (Expected Dec 2024)</li>
                <li>
                  AWS Certified Solutions Architect (June 2021 - June 2024)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
