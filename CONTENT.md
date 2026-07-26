# CONTENT.md — Extracted from Resume.pdf (source of truth)

> Everything below is derived only from `Resume.pdf`. Nothing here is invented. Gaps are flagged, not filled — see **OPEN QUESTIONS** at the bottom.

## Identity

| Field | Value |
|---|---|
| Full name | Hardik Baraiya |
| Title/role | Software Developer in Test / SDET |
| Location | Ontario, Canada (current role based in Ottawa, ON) |
| Email | hardikbaraiya35@gmail.com |
| Phone | +1 (343) 573-3112 |
| LinkedIn | linkedin.com/in/hardikb35 |
| GitHub | **Not present in resume** |
| Personal site | **Not present in resume** |

## Professional Summary (portfolio voice)

Software Developer in Test with 7+ years architecting automated testing solutions across distributed systems, networking protocols, and cloud-native platforms. Builds agentic, self-healing test frameworks and integrates AI-assisted test generation to move faster without trading away reliability. Has validated DNS and TCP/IP protocol stacks in production, hardened CI/CD quality gates, and sustained 99.9% uptime through SRE-grounded observability. Leads shift-left initiatives, mentors engineers, and tunes cloud infrastructure for cost and performance at scale.

## Work Experience

### The Canadian Internet Registration Authority (CIRA) — Ottawa, ON
**Software Developer in Test** · Jun 2024 – Present

- Led end-to-end validation strategy for the DNS PIVOT project, migrating DNS Firewall from Akamai to a self-hosted PowerDNS architecture with custom TCP/IP and DNS protocol stacks — refactored the full regression suite with zero customer-impacting downtime.
- Designed and executed functional, scale, and interoperability test plans for Off-Network Protection across Windows, macOS, Android, and iOS, acting as primary technical liaison with third-party vendors on cross-platform protocol compliance.
- Architected an agentic, self-healing E2E automation framework for CiraHub using Playwright MCP and TypeScript — autonomously detects UI/API contract changes and regenerates affected selectors and test steps, reaching 95% test coverage with near-zero flakiness.
- Integrated AI/Copilot-assisted test generation (Claude, GitHub Copilot) to auto-draft Python test cases from feature specs, accelerating test authoring by 40% while keeping pace with rapidly evolving API contracts.
- Engineered a distributed load and performance testing suite with Locust and Docker, stress-testing the DNS Firewall Device Registration API at 2x production traffic and catching a critical memory leak before it hit SLO compliance.
- Drove AWS cost optimization by automating non-production environment shutdowns via tag-based policies across EC2, ECS, and RDS, cutting idle compute usage by nearly 60%.

*(Resume includes 3 additional bullets for this role — visual regression via S3/Parquet, GitLab CI/CD optimization, and 24/7 on-call reliability via Splunk/Datadog — trimmed here per the 3–5 rule; full list preserved in raw resume for reference.)*

### ZIZO Technologies, Inc — Remote, Canada
**Lead Software Development Engineer in Test (SDET)** · Aug 2023 – May 2024

- Directed a shift-left testing strategy across the engineering org, surfacing 30% more defects during development and accelerating release velocity by 20% through early-stage test design reviews.
- Deployed ReportPortal on Docker/AWS EC2 with AI-driven failure analytics, eliminating 15 hours/week of manual failure triage.
- Architected a greenfield test platform on CodeceptJS with the Playwright engine, establishing self-healing locator patterns and AI-assisted test maintenance to cut script obsolescence.
- Ran performance testing with k6, uncovering bottlenecks that let the system scale to 2x previous concurrent user loads.
- Mentored a team of engineers on automation best practices, cutting test code review cycles by 50%.

*(One additional bullet on CI-integrated accessibility auditing trimmed per the 3–5 rule.)*

### ZIZO Technologies, Inc — Remote, Canada
**Software Development Engineer in Test (SDET)** · Aug 2021 – Jul 2023

- Built and maintained comprehensive API test suites in Python and Postman, reaching 100% reliability across internal microservices.
- Cut manual regression effort by 40% by building modular automated scripts into Azure DevOps CI/CD pipelines.
- Used Datadog for real-time error tracking, dropping Mean Time to Resolution for production issues by 35%.
- Integrated automated quality gates into Azure DevOps pipelines, enforcing a green-build culture ahead of staging.
- Authored technical documentation and wiki guides for the automation framework, shortening ramp-up time for new engineers.

### TatvaSoft — Gujarat, India
**Associate Software Engineer in Test** · Jan 2019 – Jul 2021

- Wrote 200+ functional test scenarios with UX/UI and Product teams for enterprise clients across web and mobile.
- Automated legacy manual processes with Selenium/TestNG in Python, cutting end-to-end testing time by 50% for bi-weekly releases.
- Implemented the Page Object Model to improve test maintainability and reduce script failures from UI changes.
- Led cross-browser testing with BrowserStack across Chrome, Safari, and Firefox for a global user base.
- Managed defect lifecycles in Jira, holding a 98% defect-fix verification rate before production deployments.

## Projects

**None listed in the resume.** See OPEN QUESTIONS — do not fabricate project content.

## Education

- **Carleton University**, Ottawa, ON — Master of Electrical & Computer Engineering (Software Engineering), Apr 2023
- **Gujarat Technological University**, Gujarat, India — Bachelor of Electronics and Communications Engineering, Apr 2019

## Certifications

- CN120: Kubernetes Application Essentials (Mirantis)
- The Ultimate Docker Course

## Skills (grouped as in resume)

- **Languages & Scripting:** Python, JavaScript, TypeScript, Java, Bash, SQL
- **Networking & Protocols:** TCP/IP, DNS, HTTP/S, Routing Fundamentals, distributed systems protocol testing
- **Testing & Automation:** Playwright (incl. Playwright MCP), Agentic & Self-Healing Test Frameworks, Selenium WebDriver, CodeceptJS, Postman, Pytest, TestNG, k6, Locust
- **AI-Assisted Development:** Copilot-Assisted Test Generation, Agentic Testing Pipelines, LLM-Powered Failure Analysis
- **DevOps & CI/CD:** GitLab CI/CD, Azure DevOps, Jenkins, Git, DevSecOps (SAST/DAST), Automated Quality Gates
- **Cloud & Infrastructure:** AWS (EC2, ECS, RDS, S3), Docker, Kubernetes, Terraform, CloudFormation, Ansible
- **Observability & Reliability:** Datadog, Splunk, AWS CloudWatch, ReportPortal, SRE Principles (SLIs/SLOs), Performance Analytics
- **Databases:** PostgreSQL, MySQL, MongoDB, DynamoDB

## Images inventory

- Expected `/images` directory at project root: **does not exist.**
- Root contains one file: `myimage.png` (2083×1172px) — this is a stylized illustration of a generic, faceless character coding at a multi-monitor desk, surrounded by floating labels ("Playwright Scripts," "Python Algorithms," "AI Models," "AI Training Data"). **It is not a photo of Hardik** — no face is visible and it reads as generic stock/AI-generated art, not a personal portrait.

## RESOLVED DECISIONS (2026-07-25)

1. **No Projects section.** Confirmed: no separate "Projects" section. Instead, 2–4 of the strongest initiatives from Experience are promoted into deep **Case Study** cards using the same problem → approach → outcome treatment the brief specifies for projects — built entirely from resume facts above, no live/repo links (none exist). Candidates, in order of visual/technical richness:
   - **DNS PIVOT migration** (CIRA) — Akamai → self-hosted PowerDNS, custom TCP/IP/DNS stack, zero-downtime cutover.
   - **CiraHub agentic self-healing E2E framework** (CIRA) — Playwright MCP + TypeScript, autonomous selector/test regeneration, 95% coverage.
   - **Distributed load/performance suite** (CIRA) — Locust + Docker at 2x production traffic, caught a critical memory leak pre-SLO-breach.
   - **ReportPortal AI failure-analytics rollout** (ZIZO) — Docker/EC2 deploy, cut 15 hrs/week of manual triage.
2. **No GitHub link.** Confirmed omitted everywhere. Contact/footer leads with email, phone, LinkedIn only.
3. **`myimage.png`.** Confirmed: decorative/hero art only, never labeled "me" or used in an About-with-photo layout. About section will be text-only, first person, no photo.
