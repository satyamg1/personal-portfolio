const profile = {
  name: "Satyam Gawali",
  email: "your.email@example.com",
  links: {
    github: "https://github.com/satyamg1",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    resume: "resume.pdf",
  },
  skills: [
    "JavaScript",
    "Swift",
    "SwiftUI",
    "Node.js",
    "Apple Vision",
    "Local-first apps",
    "OCR workflows",
    "CSV exports",
    "GitHub Pages",
  ],
  projects: [
    {
      title: "Job Resume Tailor",
      summary:
        "Local web app for role targeting, job keyword extraction, resume alignment scoring, and tailored resume draft generation.",
      tags: ["Node.js", "Resume tooling", "Job search"],
      links: [
        { label: "Repository", href: "https://github.com/satyamg1/job-resume-tailor" },
        { label: "Demo", href: "#" },
      ],
    },
    {
      title: "LinkedIn Hiring Capture",
      summary:
        "iOS MVP that imports hiring-post screenshots, runs local Apple Vision OCR, extracts lead fields, and exports tracker-ready CSV data.",
      tags: ["SwiftUI", "Apple Vision", "Local storage"],
      links: [
        { label: "Repository", href: "https://github.com/satyamg1/LinkedInHiringCapture" },
        { label: "Setup notes", href: "#" },
      ],
    },
  ],
  activity: [
    {
      date: "6/1/2026",
      type: "Build",
      title: "Published personal portfolio to GitHub Pages",
    },
    {
      date: "Recent",
      type: "Ship",
      title: "Job Resume Tailor local adapter and tailored resume flow",
    },
    {
      date: "Recent",
      type: "Prototype",
      title: "LinkedIn hiring screenshot OCR capture workflow",
    },
  ],
};

const projectList = document.querySelector("#project-list");
const skillList = document.querySelector("#skill-list");
const activityList = document.querySelector("#activity-list");
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

  card.append(title, summary, tags, links);
  projectList.append(card);
});

profile.activity.forEach((item) => {
  const row = document.createElement("article");
  row.className = "activity-item";

  const date = document.createElement("span");
  date.className = "activity-date";
  date.textContent = item.date;

  const type = document.createElement("span");
  type.className = "activity-type";
  type.textContent = item.type;

  const title = document.createElement("h3");
  title.textContent = item.title;

  row.append(date, type, title);
  activityList.append(row);
});

profile.skills.forEach((skill) => {
  const item = document.createElement("span");
  item.className = "skill";
  item.textContent = skill;
  skillList.append(item);
});

[
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Resume", href: profile.links.resume },
].forEach((link) => contactLinks.append(createLink(link, "terminal-button")));

document.querySelector("#deploy-stamp").textContent =
  `Last Deploy: ${new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
document.querySelector("#year").textContent = new Date().getFullYear();
