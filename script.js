const profile = {
  name: "Satyam Gawali",
  email: "your.email@example.com",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    resume: "resume.pdf",
  },
  skills: [
    "JavaScript",
    "Swift",
    "SwiftUI",
    "Node.js",
    "Local-first apps",
    "OCR workflows",
    "CSV exports",
    "Product thinking",
    "GitHub Pages",
  ],
  projects: [
    {
      title: "Job Resume Tailor",
      summary:
        "A local web app that searches job-role leads, extracts job keywords, scores resume alignment, and generates tailored resume drafts for each role.",
      tags: ["Node.js", "Resume tooling", "Job search"],
      links: [
        { label: "Repository", href: "https://github.com/your-username/job-resume-tailor" },
        { label: "Live demo", href: "#" },
      ],
    },
    {
      title: "LinkedIn Hiring Capture",
      summary:
        "An iOS MVP that imports screenshots of hiring posts, performs local Apple Vision OCR, extracts lead fields, and exports tracker data as CSV.",
      tags: ["SwiftUI", "Apple Vision", "Local storage"],
      links: [
        { label: "Repository", href: "https://github.com/your-username/LinkedInHiringCapture" },
        { label: "Setup notes", href: "#" },
      ],
    },
  ],
  experience: [
    {
      period: "Now",
      title: "Building recruiter-facing portfolio projects",
      detail:
        "Creating practical tools around job search workflows, resume tailoring, screenshot capture, OCR parsing, and lightweight data export.",
    },
    {
      period: "Next update",
      title: "Add your most relevant role or internship",
      detail:
        "Replace this item with your strongest experience, measurable impact, and technologies used.",
    },
  ],
};

const projectList = document.querySelector("#project-list");
const skillList = document.querySelector("#skill-list");
const experienceList = document.querySelector("#experience-list");
const contactLinks = document.querySelector("#contact-links");

function createLink({ label, href }, className = "") {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  if (className) link.className = className;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}

profile.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.textContent = project.summary;

  const tags = document.createElement("div");
  tags.className = "project-meta";
  project.tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tags.append(tagEl);
  });

  const links = document.createElement("div");
  links.className = "project-links";
  project.links.forEach((link) => links.append(createLink(link)));

  card.append(title, tags, summary, links);
  projectList.append(card);
});

profile.skills.forEach((skill) => {
  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = skill;
  skillList.append(pill);
});

profile.experience.forEach((item) => {
  const row = document.createElement("article");
  row.className = "timeline-item";

  const period = document.createElement("time");
  period.textContent = item.period;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const detail = document.createElement("p");
  detail.textContent = item.detail;

  row.append(period, title, detail);
  experienceList.append(row);
});

[
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Resume", href: profile.links.resume },
].forEach((link) => contactLinks.append(createLink(link, "button secondary")));

document.querySelector("#year").textContent = new Date().getFullYear();
