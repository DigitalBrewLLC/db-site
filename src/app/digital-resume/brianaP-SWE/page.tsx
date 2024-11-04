export default function BrianaPeppersResume() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl w-full">
        {/* Banner/Header Section */}
        <div className="w-full text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Briana Peppers</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/brianadpeppers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/BDPeppers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Pluralsight Position */}
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Frontend Software Engineer (ReactJs)
                </h3>
                <span className="text-sm text-gray-600">
                  MAR 2022 – PRESENT
                </span>
              </div>
              <p className="text-gray-700 font-medium">
                Pluralsight Flow, Remote
              </p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-800">
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
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Freelance Web Developer/Designer (ReactJs/NextJs)
                </h3>
                <span className="text-sm text-gray-600">
                  OCT 2018 – JUN 2023
                </span>
              </div>
              <p className="text-gray-700 font-medium">Atlanta, GA</p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-800">
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
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Full Stack Developer (.NET/AngularJS/Angular)
                </h3>
                <span className="text-sm text-gray-600">
                  FEB 2020 – JAN 2022
                </span>
              </div>
              <p className="text-gray-700 font-medium">MaxEx, Atlanta, GA</p>
              <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-800">
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700">
                  Languages & Frameworks
                </h3>
                <p className="text-gray-600">
                  TypeScript, CSS/SCSS/SASS, Tailwind, Styled Components, C#,
                  SQL, Python
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">
                  Testing & Monitoring
                </h3>
                <p className="text-gray-600">
                  Jest, React Testing Library, Cypress, DataDog, Synk,
                  LaunchDarkly
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Design & CMS</h3>
                <p className="text-gray-600">Figma, TinaCMS, Sanity</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">
                  Development & Deployment
                </h3>
                <p className="text-gray-600">
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
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Integrating Accessibility into Frontend Development
                </h3>
                <span className="text-sm text-gray-600">OCT 2023</span>
              </div>
              <p className="text-gray-700">Published on Medium</p>
              <p className="text-gray-600 mt-2">
                <a
                  href="https://www.linkedin.com/pulse/integrating-accessibility-frontend-development-briana-peppers-0rxje/?trackingId=Ct3r6AtYSnWdKqIU79y0Dg%3D%3D"
                  className="flex items-center gap-2 hover:underline hover:text-purple-600"
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

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Best Practices for TypeScript in Large-Scale Applications
                </h3>
                <span className="text-sm text-gray-600">MAR 2023</span>
              </div>
              <p className="text-gray-700">Published on HashNode</p>
              <p className="text-gray-600 mt-2">
                Exploring TypeScript patterns and practices for maintaining
                complex codebases.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Building POCs with Cursor
                </h3>
                <span className="text-sm text-gray-600">JAN 2023</span>
              </div>
              <p className="text-gray-700">Published on Dev.to</p>
              <p className="text-gray-600 mt-2">
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
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-semibold">
                  Georgia State University
                </h3>
                <span className="text-sm text-gray-600">
                  AUG 2016 – DEC 2019
                </span>
              </div>
              <p className="text-gray-700">Computer Science, B.S.</p>
              <p className="text-gray-700">
                Geographic Information Systems, Professional Certificate
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Certifications</h3>
              <ul className="list-disc ml-4 text-gray-800">
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
