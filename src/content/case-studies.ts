export type CaseStudy = {
  slug: string;
  name: string;
  pitch: string;
  company: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dns-pivot",
    name: "DNS PIVOT",
    pitch: "Migrating DNS Firewall off Akamai onto a self-hosted protocol stack, with zero customer-impacting downtime.",
    company: "CIRA",
    stack: ["DNS", "TCP/IP", "PowerDNS", "Regression Suites"],
    problem:
      "CIRA needed to move DNS Firewall off a third-party Akamai deployment and onto a self-hosted PowerDNS architecture with a custom TCP/IP and DNS protocol stack — without customers noticing the switch.",
    approach:
      "Led the end-to-end validation strategy for the migration, refactoring the entire regression suite to specifically validate routing policy enforcement across the new stack before any traffic cut over.",
    outcome: "Full migration shipped with zero customer-impacting downtime.",
  },
  {
    slug: "cirahub-self-healing",
    name: "CiraHub Self-Healing Framework",
    pitch: "An agentic E2E automation framework that detects UI/API contract changes and repairs its own tests.",
    company: "CIRA",
    stack: ["Playwright MCP", "TypeScript", "Agentic Testing"],
    problem:
      "CiraHub's UI and API contracts changed fast enough that hand-maintained end-to-end selectors and test steps were a constant source of flaky, broken test runs.",
    approach:
      "Architected an agentic, self-healing E2E framework on Playwright MCP and TypeScript that autonomously detects contract changes and regenerates the affected selectors and test steps itself.",
    outcome: "95% test coverage sustained with near-zero flakiness.",
  },
  {
    slug: "load-testing-2x",
    name: "Distributed Load & Performance Suite",
    pitch: "Stress-testing the DNS Firewall Device Registration API at 2x production traffic to catch failures before they shipped.",
    company: "CIRA",
    stack: ["Locust", "Docker", "Performance Testing"],
    problem:
      "The DNS Firewall Device Registration API needed to survive well beyond normal production load, and any memory issues under sustained pressure had to surface before they threatened SLO compliance.",
    approach:
      "Engineered a distributed load and performance testing suite with Locust and Docker capable of stress-testing the API at 2x production traffic.",
    outcome: "Identified and resolved a critical memory leak before it could impact SLO compliance at scale.",
  },
  {
    slug: "reportportal-rollout",
    name: "ReportPortal Failure Analytics",
    pitch: "An AI-driven failure-analytics rollout that cut a team's manual triage load by 15 hours a week.",
    company: "ZIZO Technologies",
    stack: ["ReportPortal", "Docker", "AWS EC2", "Failure Analytics"],
    problem:
      "The team was spending significant manual effort triaging test failures and separating genuine regressions from flaky-test noise.",
    approach:
      "Deployed ReportPortal on Docker/AWS EC2 and put its AI-driven failure analytics and pattern-based flakiness classification in front of the team's CI pipeline.",
    outcome: "Eliminated 15 hours per week of manual failure triage.",
  },
];
