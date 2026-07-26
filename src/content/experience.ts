export type Job = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "The Canadian Internet Registration Authority (CIRA)",
    role: "Software Developer in Test",
    location: "Ottawa, ON",
    start: "Jun 2024",
    end: "Present",
    bullets: [
      "Led end-to-end validation strategy for the DNS PIVOT project, migrating DNS Firewall from Akamai to a self-hosted PowerDNS architecture with custom TCP/IP and DNS protocol stacks — refactored the full regression suite with zero customer-impacting downtime.",
      "Designed and executed functional, scale, and interoperability test plans for Off-Network Protection across Windows, macOS, Android, and iOS, acting as primary technical liaison with third-party vendors on cross-platform protocol compliance.",
      "Architected an agentic, self-healing E2E automation framework for CiraHub using Playwright MCP and TypeScript — autonomously detects UI/API contract changes and regenerates affected selectors and test steps, reaching 95% test coverage with near-zero flakiness.",
      "Integrated AI/Copilot-assisted test generation (Claude, GitHub Copilot) to auto-draft Python test cases from feature specs, accelerating test authoring by 40% while keeping pace with rapidly evolving API contracts.",
      "Engineered a distributed load and performance testing suite with Locust and Docker, stress-testing the DNS Firewall Device Registration API at 2x production traffic and catching a critical memory leak before it hit SLO compliance.",
      "Drove AWS cost optimization by automating non-production environment shutdowns via tag-based policies across EC2, ECS, and RDS, cutting idle compute usage by nearly 60%.",
    ],
  },
  {
    company: "ZIZO Technologies, Inc",
    role: "Lead Software Development Engineer in Test (SDET)",
    location: "Remote, Canada",
    start: "Aug 2023",
    end: "May 2024",
    bullets: [
      "Directed a shift-left testing strategy across the engineering org, surfacing 30% more defects during development and accelerating release velocity by 20% through early-stage test design reviews.",
      "Deployed ReportPortal on Docker/AWS EC2 with AI-driven failure analytics, eliminating 15 hours/week of manual failure triage.",
      "Architected a greenfield test platform on CodeceptJS with the Playwright engine, establishing self-healing locator patterns and AI-assisted test maintenance to cut script obsolescence.",
      "Ran performance testing with k6, uncovering bottlenecks that let the system scale to 2x previous concurrent user loads.",
      "Mentored a team of engineers on automation best practices, cutting test code review cycles by 50%.",
    ],
  },
  {
    company: "ZIZO Technologies, Inc",
    role: "Software Development Engineer in Test (SDET)",
    location: "Remote, Canada",
    start: "Aug 2021",
    end: "Jul 2023",
    bullets: [
      "Built and maintained comprehensive API test suites in Python and Postman, reaching 100% reliability across internal microservices.",
      "Cut manual regression effort by 40% by building modular automated scripts into Azure DevOps CI/CD pipelines.",
      "Used Datadog for real-time error tracking, dropping Mean Time to Resolution for production issues by 35%.",
      "Integrated automated quality gates into Azure DevOps pipelines, enforcing a green-build culture ahead of staging.",
      "Authored technical documentation and wiki guides for the automation framework, shortening ramp-up time for new engineers.",
    ],
  },
  {
    company: "TatvaSoft",
    role: "Associate Software Engineer in Test",
    location: "Gujarat, India",
    start: "Jan 2019",
    end: "Jul 2021",
    bullets: [
      "Wrote 200+ functional test scenarios with UX/UI and Product teams for enterprise clients across web and mobile.",
      "Automated legacy manual processes with Selenium/TestNG in Python, cutting end-to-end testing time by 50% for bi-weekly releases.",
      "Implemented the Page Object Model to improve test maintainability and reduce script failures from UI changes.",
      "Led cross-browser testing with BrowserStack across Chrome, Safari, and Firefox for a global user base.",
      "Managed defect lifecycles in Jira, holding a 98% defect-fix verification rate before production deployments.",
    ],
  },
];
