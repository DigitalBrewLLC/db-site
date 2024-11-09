import GithubIcon from "@/app/icons/GithubIcon";
import LinkedInIcon from "@/app/icons/LinkedInIcon";

export default function BrianaPeppersResume() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family:var(--font-geist-sans)] bg-background text-text">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl w-full">
        {/* Banner/Header Section */}
        <div className="w-full text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Briana Peppers</h1>
          <p className="text-xl text-text-secondary">Software Engineer</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/brianadpeppers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent flex items-center gap-2"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/BDPeppers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent flex items-center gap-2"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-accent pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Pluralsight Position */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Frontend Software Engineer (ReactJs)
                </h3>
                <span className="text-sm text-text-secondary">
                  MAR 2022 – PRESENT
                </span>
              </div>
              <p className="text-text-secondary font-medium">
                Pluralsight Flow, Remote
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-text">
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
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Freelance Web Developer/Designer (ReactJs/NextJs)
                </h3>
                <span className="text-sm text-text-secondary">
                  OCT 2018 – JUN 2023
                </span>
              </div>
              <p className="text-text-secondary font-medium">Atlanta, GA</p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-text">
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
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Full Stack Developer (.NET/AngularJS/Angular)
                </h3>
                <span className="text-sm text-text-secondary">
                  FEB 2020 – JAN 2022
                </span>
              </div>
              <p className="text-text-secondary font-medium">
                MaxEx, Atlanta, GA
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-text">
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-accent pb-2">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-text">
                  Languages & Frameworks
                </h3>
                <p className="text-text-secondary">
                  TypeScript, CSS/SCSS/SASS, Tailwind, Styled Components, C#,
                  SQL, Python
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text">
                  Testing & Monitoring
                </h3>
                <p className="text-text-secondary">
                  Jest, React Testing Library, Cypress, DataDog, Synk,
                  LaunchDarkly
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text">Design & CMS</h3>
                <p className="text-text-secondary">Figma, TinaCMS, Sanity</p>
              </div>
              <div>
                <h3 className="font-semibold text-text">
                  Development & Deployment
                </h3>
                <p className="text-text-secondary">
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2">
            Technical Articles & Publications
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Integrating Accessibility into Frontend Development
                </h3>
                <span className="text-sm text-text-secondary">OCT 2023</span>
              </div>
              <p className="text-text-secondary">Published on Medium</p>
              <p className="text-text-secondary mt-2">
                <a
                  href="https://www.linkedin.com/pulse/integrating-accessibility-frontend-development-briana-peppers-0rxje/?trackingId=Ct3r6AtYSnWdKqIU79y0Dg%3D%3D"
                  className="flex items-center gap-2 hover:underline hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read article: A comprehensive guide on leveraging Next.js features for building performant web applications"
                >
                  A comprehensive guide on leveraging Next.js features for
                  building performant web applications
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Best Practices for TypeScript in Large-Scale Applications
                </h3>
                <span className="text-sm text-text-secondary">MAR 2023</span>
              </div>
              <p className="text-text-secondary">Published on HashNode</p>
              <p className="text-text-secondary mt-2">
                Exploring TypeScript patterns and practices for maintaining
                complex codebases.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Building POCs with Cursor
                </h3>
                <span className="text-sm text-text-secondary">JAN 2023</span>
              </div>
              <p className="text-text-secondary">Published on Dev.to</p>
              <p className="text-text-secondary mt-2">
                A guide to rapidly prototyping applications using AI-assisted
                development with Cursor.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2">
            Education & Certifications
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Georgia State University
                </h3>
                <span className="text-sm text-text-secondary">
                  AUG 2016 – DEC 2019
                </span>
              </div>
              <p className="text-text-secondary">Computer Science, B.S.</p>
              <p className="text-text-secondary">
                Geographic Information Systems, Professional Certificate
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-text">Certifications</h3>
              <ul className="list-disc ml-4 text-text">
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
