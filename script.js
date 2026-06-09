const profile = {
  email: "satyam.gawali7@gmail.com",
  location: "Seattle, WA",
  links: {
    github: "https://github.com/satyamg1",
    linkedin: "https://www.linkedin.com/in/satyam-gawali/",
    resume: "assets/Satyam_Gawali.pdf",
    calendar: "https://calendar.app.google/q9RRT7cLh3inCMZV7",
  },
  cases: [
    {
      title: "GenAI Seller Appeals Experience",
      context:
        "Amazon Seller Partner Trust & Safety needed a seller-facing path for product authenticity policy violations.",
      product:
        "Launched a GenAI-powered appeals experience that helped sellers reinstate listings through clearer remediation guidance.",
      governance:
        "Balanced policy enforcement with seller remediation, human review, and measurable reduction in friction.",
      outcome:
        "Reduced time to reinstate by 39% while improving the user path through enforcement recovery.",
      tags: ["GenAI", "Trust & Safety", "Marketplace policy"],
    },
    {
      title: "LLM Case Summary Workflows",
      context:
        "Investigators needed faster, higher-quality context synthesis across multiple policy and data signals.",
      product:
        "Developed LLM-powered case summaries that aggregated signals from multiple data sources into investigator workflows.",
      governance:
        "Designed AI assistance around decision quality, operational controls, and human-in-the-loop review.",
      outcome:
        "Cut handling time by 35%, improved decision quality by 10%, and projected $0.75M opex savings across 10 policy areas.",
      tags: ["LLM workflows", "Policy ops", "Decision quality"],
    },
    {
      title: "AI Vision Platform for EV Manufacturing",
      context:
        "Cognex needed v1.0 product execution for AI-powered vision system management software in the EV industry.",
      product:
        "Led launch planning, analytics and image browser workflows, customer research, pricing analysis, and roadmap definition.",
      governance:
        "Roadmapped platform features for 21 CFR Part 11 FDA compliance and enterprise readiness.",
      outcome:
        "Supported a forecasted $3M market opportunity over three years and reduced end-user time to resolution by 25%.",
      tags: ["AI vision", "B2B SaaS", "Compliance"],
    },
  ],
  experience: [
    {
      company: "Amazon",
      location: "Seattle, WA",
      role: "Sr. Product Manager - Tech, Seller Partner Trust & Safety",
      period: "Jan '25 - Present",
      logo: "assets/logo-amazon.svg",
      highlights: [
        "Launched GenAI-powered seller appeals for product authenticity policy violations, reducing time to reinstate by 39%.",
        "Built LLM case summary workflows that cut investigator handling time by 35% and improved decision quality by 10%.",
        "Shipped proactive KYC verification notifications that improved de-risking success by 4.5% and preserved $85M+ in GMS.",
        "Launched human-in-the-loop review queues that reduced false positive EU seller KYC enforcements by 10%.",
        "Presented enforcement governance strategy to VP leadership and secured funding for the 2026 roadmap.",
      ],
    },
    {
      company: "Cognex Corporation",
      location: "Boston, MA",
      role: "Product Manager - Analytics Platform",
      period: "Jan '23 - Jan '25",
      logo: "assets/logo-cognex.svg",
      highlights: [
        "Led v1.0 launch of AI-powered vision system management software for the EV industry.",
        "Designed analytics and image browser workflows in Figma, reducing end-user time to resolution by 25%.",
        "Defined roadmap work for 21 CFR Part 11 FDA compliance.",
        "Built subscription revenue models and value-based pricing research for B2B analytics and IIoT edge platforms.",
        "Used SQL and Python to analyze 1,000 support tickets and identify product pain points.",
      ],
    },
    {
      company: "Searce Inc. (Google Cloud Partner)",
      location: "India",
      period: "Jul '18 - Jul '21",
      logo: "assets/logo-searce.svg",
      roles: [
        {
          title: "Product Manager",
          period: "Aug '19 - Jul '21",
          highlights: [
            "Led engineers and designers on low-code B2B supply chain planning and delivery application features.",
            "Implemented a value-vs-effort prioritization framework and delivered 3 user-critical features in 6 months.",
          ],
        },
        {
          title: "Senior Product Consultant",
          period: "Jul '18 - Jul '19",
          highlights: [
            "Expanded Google Maps Platform consulting and sales in South India, growing revenue 4x to $350K.",
            "Developed GTM strategy across 5 customer segments and 2,000 clients, driving $100K revenue increase in Q3 FY2019.",
            "Delivered workshops and QBRs that helped customers save $400K+ on cloud billing.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Westcliff University",
      location: "San Francisco, CA",
      credential: "Doctor of Business Administration (DBA)",
      period: "Present",
      logo: "assets/logo-westcliff.png",
    },
    {
      school: "Dartmouth College",
      location: "Hanover, NH",
      credential: "Master of Engineering Management (MEM)",
      period: "2022",
      logo: "assets/logo-dartmouth.png",
    },
    {
      school: "Vishwakarma Institute of Technology",
      location: "India",
      credential: "Bachelors, Electronics & Telecommunication Engineering",
      period: "2018",
      logo: "assets/logo-vit.png",
    },
  ],

  writings: [
    {
      title: "Measuring Twice: AI Governance as Product Infrastructure",
      date: "Oct 2025",
      snippet: "How embedding policy into everyday workflows creates better outcomes than bolt-on compliance.",
      link: "#"
    },
    {
      title: "The Perfect Proof: Patience in Product Discovery",
      date: "Jun 2025",
      snippet: "Ambiguous AI opportunities require time to shape. Rushing to code is like putting unproofed dough in the oven.",
      link: "#"
    }
  ],
  capabilities: [
    {
      title: "Product Strategy",
      items: ["Problem framing", "Roadmap tradeoffs", "Discovery", "Stakeholder alignment"],
    },
    {
      title: "AI Governance",
      items: ["Policy interpretation", "Risk mapping", "Review workflows", "Responsible AI"],
    },
    {
      title: "Business Execution",
      items: ["Outcome metrics", "Operational clarity", "GTM thinking", "Process design"],
    },
    {
      title: "Technical Fluency",
      items: ["APIs", "Automation", "Local-first systems", "Data workflows"],
    },
  ],
};

const caseList = document.querySelector("#case-list");
const caseFilters = document.querySelector("#case-filters");
const experienceList = document.querySelector("#experience-list");
const educationList = document.querySelector("#education-list");
const writingList = document.querySelector("#writing-list");
const capabilityList = document.querySelector("#capability-list");
const contactLinks = document.querySelector("#contact-links");

function createTerminalCard(className, filename) {
  const card = document.createElement("article");
  card.className = `terminal-window ${className}`;
  
  card.innerHTML = `
    <div class="terminal-header">
      <span class="terminal-title"><span class="text-accent">./</span> ${filename}</span>
      <div class="terminal-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="terminal-body"></div>
  `;
  return { card, body: card.querySelector('.terminal-body') };
}

function externalize(link) {
  if (link.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
}

// Get all unique tags and categorize them or use them directly.
const categories = [
  { label: "All", tags: [] },
  { label: "Generative AI", tags: ["GenAI", "LLM workflows"] },
  { label: "Trust & Safety / Policy", tags: ["Trust & Safety", "Marketplace policy", "Policy ops"] },
  { label: "Compliance & B2B", tags: ["Compliance", "B2B SaaS", "AI vision"] }
];

function renderFilters() {
  if (!caseFilters) return;
  caseFilters.innerHTML = "";
  categories.forEach((cat, index) => {
    const button = document.createElement("button");
    button.className = "filter-chip" + (index === 0 ? " active" : "");
    button.textContent = cat.label;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", index === 0 ? "true" : "false");

    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderCases(cat);
    });

    caseFilters.append(button);
  });
}

function renderCases(categoryObj = categories[0]) {
  if (!caseList) return;
  caseList.innerHTML = "";

  const filteredCases = profile.cases.filter((item) => {
    if (categoryObj.label === "All") return true;
    return item.tags.some(tag => categoryObj.tags.includes(tag));
  });

  filteredCases.forEach((item) => {
    const filename = item.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.md';
    const { card, body } = createTerminalCard("case-card", filename);

    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const context = document.createElement("p");
    context.className = "case-context";
    context.textContent = item.context;

    const dl = document.createElement("dl");
    [
      ["🌾 Flour & Butter (Core Ingredients)", item.product],
      ["🥣 Mixing & Kneading (Strategy)", item.governance],
      ["🎂 The Icing on the Cake (Outcome)", item.outcome],
    ].forEach(([term, description]) => {
      const dt = document.createElement("dt");
      dt.textContent = term;
      const dd = document.createElement("dd");
      dd.textContent = description;
      dl.append(dt, dd);
    });

    const tags = document.createElement("div");
    tags.className = "tag-row";
    item.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.append(span);
    });

    body.append(title, context, dl, tags);
    caseList.append(card);

    requestAnimationFrame(() => {
      card.style.transition = "opacity 0.4s ease, transform 0.4s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  });
}

renderFilters();
renderCases();

profile.experience.forEach((item) => {
  const filename = item.company.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.log';
  const { card, body } = createTerminalCard("experience-card", filename);
  body.style.display = "flex";
  body.style.gap = "24px";

  const sidebar = document.createElement("div");
  sidebar.className = "experience-sidebar";

  const logoWrap = document.createElement("div");
  logoWrap.className = "company-logo";
  const logo = document.createElement("img");
  logo.src = item.logo;
  logo.alt = `${item.company} logo`;
  logo.loading = "lazy";
  logoWrap.append(logo);
  sidebar.append(logoWrap);

  const content = document.createElement("div");
  content.className = "experience-content";
  content.style.flex = "1";

  const headerRow = document.createElement("div");
  headerRow.className = "card-header-row";

  const title = document.createElement("h3");
  title.textContent = item.company;

  const metaRight = document.createElement("div");
  metaRight.className = "card-meta-right";

  const period = document.createElement("span");
  period.className = "card-period";
  period.textContent = item.period;

  const separator = document.createElement("span");
  separator.className = "card-separator";
  separator.textContent = "•";

  const location = document.createElement("span");
  location.className = "card-location";
  location.textContent = item.location;

  metaRight.append(period, separator, location);
  headerRow.append(title, metaRight);
  content.append(headerRow);

  if (item.roles) {
    item.roles.forEach((subRole, subIdx) => {
      const roleBlock = document.createElement("div");
      roleBlock.className = "experience-role-block";

      if (subIdx > 0) {
        roleBlock.style.marginTop = "16px";
        roleBlock.style.borderTop = "1px solid var(--border)";
        roleBlock.style.paddingTop = "14px";
      }

      const roleTitle = document.createElement("p");
      roleTitle.className = "experience-role";
      roleTitle.innerHTML = `${subRole.title} <span class="role-sub-period" style="font-weight: normal; color: var(--muted); font-size: 0.86rem; margin-inline-start: 6px;">(${subRole.period})</span>`;

      roleBlock.append(roleTitle);
      content.append(roleBlock);
    });
  } else {
    const roleTitle = document.createElement("p");
    roleTitle.className = "experience-role";
    roleTitle.textContent = item.role;

    content.append(roleTitle);
  }

  body.append(sidebar, content);
  if (experienceList) experienceList.append(card);
});

profile.education.forEach((item) => {
  const card = document.createElement("article");
  card.className = "education-mantle-item";

  const logoWrap = document.createElement("div");
  logoWrap.className = "school-logo mantle-logo";
  const logo = document.createElement("img");
  logo.src = item.logo;
  logo.alt = `${item.school} logo`;
  logo.loading = "lazy";
  logoWrap.append(logo);

  const school = document.createElement("h3");
  school.textContent = item.school;

  const credential = document.createElement("p");
  credential.className = "education-role";
  credential.textContent = item.credential;

  const period = document.createElement("span");
  period.className = "card-period";
  period.textContent = item.period;

  const location = document.createElement("span");
  location.className = "card-location";
  location.textContent = item.location;

  card.append(logoWrap, school, credential, period, location);
  if (educationList) educationList.append(card);
});



profile.writings.forEach((post) => {
  const filename = post.title.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '') + '.md';
  const { card, body } = createTerminalCard("writing-card", filename);

  const link = document.createElement("a");
  link.className = "writing-link";
  link.href = post.link;

  const headerRow = document.createElement("div");
  headerRow.className = "card-header-row";

  const title = document.createElement("h3");
  title.textContent = post.title;

  const date = document.createElement("span");
  date.className = "card-meta-right";
  date.textContent = post.date;

  headerRow.append(title, date);

  const snippet = document.createElement("p");
  snippet.className = "writing-snippet";
  snippet.textContent = post.snippet;

  link.append(headerRow, snippet);
  body.append(link);
  if (writingList) writingList.append(card);
});

// Setup capability strength observer to animate widths on entry
const capObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".capability-bar-level");
      bars.forEach(bar => {
        const widthVal = bar.style.getPropertyValue("--strength-width");
        bar.style.width = widthVal;
      });
      capObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

profile.capabilities.forEach((capability) => {
  const filename = `config/${capability.title.split(' ')[0].toLowerCase()}.json`;
  const { card, body } = createTerminalCard("capability-card", filename);

  const title = document.createElement("h3");
  title.textContent = capability.title;

  const list = document.createElement("div");
  list.className = "capability-chip-group";
  list.style.display = "flex";
  list.style.flexWrap = "wrap";
  list.style.gap = "8px";
  list.style.marginTop = "16px";

  capability.items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "capability-chip";
    chip.textContent = item;
    list.append(chip);
  });

  body.append(title, list);
  if (capabilityList) capabilityList.append(card);

  // Track capability card visibility to trigger fills
  capObserver.observe(card);
});

// Toast Notification Builder
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    const icon = document.createElement("span");
    icon.className = "toast-icon";
    icon.textContent = "✓";
    const text = document.createElement("span");
    text.className = "toast-text";
    toast.append(icon, text);
    document.body.append(toast);
  }

  toast.querySelector(".toast-text").textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

[
  { label: "Reserve a seat 🗓️", href: profile.links.calendar, primary: true },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Resume", href: profile.links.resume },
].forEach(({ label, href, primary }) => {
  const link = document.createElement("a");
  link.className = primary ? "button primary" : "button secondary";
  link.href = href;
  link.textContent = label;

  if (label === "Email") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(profile.email).then(() => {
        showToast(`Email copied: ${profile.email} ✉️`);
        setTimeout(() => {
          window.location.href = href;
        }, 1200);
      }).catch(() => {
        window.location.href = href;
      });
    });
  }

  externalize(link);
  if (contactLinks) contactLinks.append(link);
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Theme Switcher Controller
const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      // Ignore if localStorage is blocked
    }
  });
}

// Sync with system preferences if no override is set
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  let hasOverride = false;
  try {
    hasOverride = !!localStorage.getItem("theme");
  } catch (e) {
    // Ignore if localStorage is blocked
  }
  if (!hasOverride) {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
  }
});

// Scroll progress bar fallback for non-supporting browsers
if (!CSS.supports("animation-timeline", "scroll()")) {
  const progressBar = document.querySelector("#scroll-progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      progressBar.style.width = scrollPercentage + "%";
    });
  }
}

// Scroll reveals IntersectionObserver fallback for non-supporting browsers
if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
  const reveals = document.querySelectorAll(".scroll-reveal");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: Array.from({ length: 11 }, (_, i) => i / 10)
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const ratio = entry.intersectionRatio;
        entry.target.style.opacity = Math.min(1, ratio * 1.5);
        entry.target.style.transform = `translateY(${Math.max(0, 30 - ratio * 60)}px)`;

        if (ratio >= 0.7) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });
}

// Book Expansion Logic
document.querySelectorAll('.book-cover').forEach(book => {
  book.addEventListener('click', () => {
    book.classList.toggle('expanded');
    
    // Pause the marquee if a book is expanded
    const marquee = book.closest('.marquee-content');
    if (marquee) {
      if (document.querySelector('.book-cover.expanded')) {
        marquee.style.animationPlayState = 'paused';
      } else {
        marquee.style.animationPlayState = '';
      }
    }
  });
});

// Scroll Spy for Sidebar Navigation
const sideNavLinks = document.querySelectorAll('.side-nav a');
if (sideNavLinks.length > 0) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sideNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -60% 0px", 
    threshold: 0
  });

  document.querySelectorAll('section[id], header[id]').forEach(section => {
    spyObserver.observe(section);
  });
}
