export type SkillGroup = {
  category: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Scripting",
    note: "What I write test logic and tooling in day to day.",
    items: ["Python", "JavaScript", "TypeScript", "Java", "Bash", "SQL"],
  },
  {
    category: "Networking & Protocols",
    note: "The layer I actually test — where most of my depth lives.",
    items: ["TCP/IP", "DNS", "HTTP/S", "Routing Fundamentals", "Distributed systems protocol testing"],
  },
  {
    category: "Testing & Automation",
    note: "Frameworks I build and maintain, not just run.",
    items: ["Playwright (incl. Playwright MCP)", "Agentic & Self-Healing Frameworks", "Selenium WebDriver", "CodeceptJS", "Postman", "Pytest", "TestNG", "k6", "Locust"],
  },
  {
    category: "AI-Assisted Development",
    note: "Where AI actually earns its place in my workflow.",
    items: ["Copilot-Assisted Test Generation", "Agentic Testing Pipelines", "LLM-Powered Failure Analysis"],
  },
  {
    category: "DevOps & CI/CD",
    note: "The quality gates that keep bad builds out.",
    items: ["GitLab CI/CD", "Azure DevOps", "Jenkins", "Git", "DevSecOps (SAST/DAST)", "Automated Quality Gates"],
  },
  {
    category: "Cloud & Infrastructure",
    note: "Where the systems I test actually run.",
    items: ["AWS (EC2, ECS, RDS, S3)", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Ansible"],
  },
  {
    category: "Observability & Reliability",
    note: "How I know a system is healthy, not just deployed.",
    items: ["Datadog", "Splunk", "AWS CloudWatch", "ReportPortal", "SRE Principles (SLIs/SLOs)", "Performance Analytics"],
  },
  {
    category: "Databases",
    note: "Where the state under test actually lives.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  },
];
