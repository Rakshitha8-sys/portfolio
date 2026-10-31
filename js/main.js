/**
 * Interactive Client Logic for Rakshitha's Portfolio
 * Powered by PORTFOLIO_DATA from js/data.js
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  renderAllSections();
  initModals();
  initContactForm();
  initClipboardButtons();
  initYear();
});

/* ==========================================================================
   1. THEME TOGGLE (Dark / Light)
   ========================================================================== */
function initTheme() {
  const storedTheme = localStorage.getItem("rakshitha_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "dark"); // Default dark

  applyTheme(initialTheme, false);

  // Listen to all explicit theme selector buttons (desktop & mobile)
  document.querySelectorAll("[data-theme-set]").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-theme-set");
      applyTheme(selected, true);
    });
  });

  // Floating quick toggle button
  const floatingBtn = document.getElementById("floating-theme-btn");
  if (floatingBtn) {
    floatingBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "light" ? "dark" : "light";
      applyTheme(nextTheme, true);
    });
  }
}

function applyTheme(theme, showToastNotice = false) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("rakshitha_portfolio_theme", theme);

  // Update all segmented option buttons
  document.querySelectorAll("[data-theme-set]").forEach(btn => {
    if (btn.getAttribute("data-theme-set") === theme) {
      btn.classList.add("active");
      btn.setAttribute("aria-checked", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    }
  });

  // Update floating button
  const floatingIcon = document.getElementById("floating-theme-icon");
  const floatingText = document.getElementById("floating-theme-text");
  const floatingBtn = document.getElementById("floating-theme-btn");

  if (floatingBtn && floatingIcon && floatingText) {
    if (theme === "light") {
      floatingBtn.title = "Click to switch to Dark Mode";
      floatingText.textContent = "Light Mode";
      floatingIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #f59e0b;">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      floatingBtn.title = "Click to switch to Light Mode";
      floatingText.textContent = "Dark Mode";
      floatingIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #38bdf8;">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }

  if (showToastNotice) {
    const label = theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
    showToast(`Theme switched to ${label}`);
  }
}

/* ==========================================================================
   2. NAVBAR, SCROLL SPY & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  // Sticky shadow effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        mobileDrawer.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileDrawer.classList.add("open");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close mobile drawer on link click
    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section scroll spy
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }
}

/* ==========================================================================
   3. SECTION RENDERING
   ========================================================================== */
function renderAllSections() {
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderAchievements();
}

// 3.1 Render Skills
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !PORTFOLIO_DATA.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="glass-card skill-category-card" id="skill-cat-${cat.id}">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <div>
          <h3 class="skill-cat-title">${cat.category}</h3>
        </div>
      </div>
      <p class="skill-cat-desc">${cat.description}</p>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item-pill">
            <div class="skill-name-wrap">
              <span class="skill-tech-name">${item.name}</span>
              <span class="badge badge-cyan">${item.badge}</span>
            </div>
            <span class="skill-note">${item.desc}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// 3.2 Render Projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <div class="glass-card project-card" id="proj-${proj.id}">
      <div class="project-top">
        <div class="project-icon-box">${proj.icon}</div>
        <span class="project-badge-tag">${proj.featuredTag}</span>
      </div>
      <div class="project-category">${proj.category}</div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.shortDesc}</p>
      
      <div class="project-tech-tags">
        ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>

      <div class="project-footer">
        <button type="button" class="btn btn-secondary btn-sm" onclick="openProjectModal('${proj.id}')" id="btn-view-${proj.id}">
          <span>View Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  `).join("");
}

// 3.3 Render Education
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="timeline-item" id="edu-${edu.id}">
      <div class="timeline-marker"></div>
      <div class="glass-card timeline-card">
        <div class="timeline-card-header">
          <h3 class="edu-degree">${edu.degree}</h3>
          <span class="edu-duration">${edu.duration}</span>
        </div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-score-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${edu.score}</span>
        </div>
        <ul class="edu-points-list">
          ${edu.details.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

// 3.4 Render Certifications
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="glass-card cert-card" id="${cert.id}">
      <div class="cert-card-top">
        <span class="cert-badge">${cert.badge}</span>
        ${cert.score ? `<span class="badge badge-emerald">${cert.score}</span>` : ""}
      </div>
      <h3 class="cert-title">${cert.name}</h3>
      <div class="cert-issuer">${cert.issuer}</div>
      <div class="cert-meta">
        ${cert.date ? `<span><strong>Date:</strong> ${cert.date}</span>` : ""}
        ${cert.credentialId ? `<span><strong>Credential ID:</strong> ${cert.credentialId}</span>` : ""}
        ${cert.rollNo ? `<span><strong>Roll No:</strong> ${cert.rollNo}</span>` : ""}
      </div>
      <div class="cert-skills-list">
        ${cert.skillsGained.map(sk => `<span class="cert-skill-pill">${sk}</span>`).join("")}
      </div>
      <div class="cert-actions">
        ${cert.verifyUrl ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" id="verify-${cert.id}">
            <span>Verify Online</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        ` : ""}
        ${(cert.certificateImage || cert.certificateFile) ? `
          <button type="button" class="btn btn-outline btn-sm" onclick="previewCertificate('${cert.id}')" id="view-${cert.id}">
            <span>View Certificate</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </button>
        ` : ""}
      </div>
    </div>
  `).join("");
}

// 3.5 Render Achievements & Activities
function renderAchievements() {
  const container = document.getElementById("achievements-container");
  if (!container || !PORTFOLIO_DATA.achievements) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
    <div class="glass-card achieve-card" id="${ach.id}">
      <div class="achieve-top">
        <div class="achieve-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <span class="achieve-date">${ach.date}</span>
      </div>
      <span class="badge badge-indigo" style="width: fit-content; margin-bottom: 0.5rem;">${ach.type}</span>
      <h3 class="achieve-title">${ach.title}</h3>
      <div class="achieve-org">${ach.organization}</div>
      <p class="achieve-desc">${ach.description}</p>
      
      ${(ach.certificateImage || ach.certificateFile) ? `
        <div class="achieve-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="previewAchievementCert('${ach.id}')" id="ach-view-${ach.id}">
            <span>View Certificate</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      ` : ""}
    </div>
  `).join("");
}

/* ==========================================================================
   4. MODALS (Project Deep Dive & Certificate Preview)
   ========================================================================== */
function initModals() {
  const projectOverlay = document.getElementById("project-modal-overlay");
  const certOverlay = document.getElementById("cert-modal-overlay");

  // Close modals on overlay backdrop click
  [projectOverlay, certOverlay].forEach(overlay => {
    if (!overlay) return;
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("project-modal-overlay");
  const content = document.getElementById("project-modal-content");
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-category">${project.category}</div>
      <h2 class="modal-title">${project.title}</h2>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
    <div class="modal-body">
      <div>
        <h4 class="modal-section-title">Overview & Problem Statement</h4>
        <p class="modal-p">${project.details.problem}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Proposed Solution</h4>
        <p class="modal-p">${project.details.solution}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Key System Features</h4>
        <ul class="modal-feature-list">
          ${project.details.keyFeatures.map(feat => `
            <li class="modal-feature-item">
              <svg class="modal-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${feat}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div>
        <h4 class="modal-section-title">Technical Architecture & Implementation</h4>
        <p class="modal-p">${project.details.implementation}</p>
      </div>

      <div style="padding: 1rem; background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-md);">
        <p style="font-size: 0.85rem; color: var(--accent-cyan); margin: 0;">
          <strong>Resume Grounding:</strong> ${project.details.note}
        </p>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function previewCertificate(certId) {
  const cert = PORTFOLIO_DATA.certifications.find(c => c.id === certId);
  if (!cert) return;

  const overlay = document.getElementById("cert-modal-overlay");
  const content = document.getElementById("cert-modal-content");
  if (!overlay || !content) return;

  let mediaHtml = "";
  if (cert.certificateImage) {
    mediaHtml = `<img src="${cert.certificateImage}" alt="${cert.name}" class="modal-cert-preview">`;
  } else if (cert.certificateFile) {
    mediaHtml = `
      <div style="text-align: center; padding: 2.5rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <p style="font-weight: 600; margin-bottom: 1.25rem;">Official Certificate Document (PDF)</p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <a href="${cert.certificateFile}" target="_blank" class="btn btn-primary btn-sm">
            <span>Open Certificate Document</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline></svg>
          </a>
          ${cert.verifyUrl ? `
            <a href="${cert.verifyUrl}" target="_blank" class="btn btn-secondary btn-sm">
              <span>Verify at Issuer Academy</span>
            </a>
          ` : ""}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-category">${cert.issuer}</div>
      <h2 class="modal-title">${cert.name}</h2>
      ${cert.score ? `<div class="badge badge-emerald" style="margin-top: 0.35rem;">${cert.score}</div>` : ""}
    </div>
    <div class="modal-body">
      ${mediaHtml}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; flex-wrap: wrap; gap: 0.75rem;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">Verified credential issued to Rakshitha</span>
        ${cert.verifyUrl ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <span>Official Academy Verification Link</span>
          </a>
        ` : ""}
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function previewAchievementCert(achId) {
  const ach = PORTFOLIO_DATA.achievements.find(a => a.id === achId);
  if (!ach) return;

  const overlay = document.getElementById("cert-modal-overlay");
  const content = document.getElementById("cert-modal-content");
  if (!overlay || !content) return;

  let mediaHtml = "";
  if (ach.certificateImage) {
    mediaHtml = `<img src="${ach.certificateImage}" alt="${ach.title}" class="modal-cert-preview">`;
  } else if (ach.certificateFile) {
    mediaHtml = `
      <div style="text-align: center; padding: 2.5rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
        <p style="font-weight: 600; margin-bottom: 1.25rem;">Certificate of Participation / Appreciation</p>
        <a href="${ach.certificateFile}" target="_blank" class="btn btn-primary btn-sm">
          <span>View Verified Document (PDF)</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline></svg>
        </a>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-category">${ach.type}</div>
      <h2 class="modal-title">${ach.title}</h2>
      <p style="color: var(--accent-cyan); font-size: 0.9rem; margin-top: 0.25rem;">${ach.organization}</p>
    </div>
    <div class="modal-body">
      ${mediaHtml}
      <p class="modal-p" style="margin-top: 0.75rem;">${ach.description}</p>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
  document.body.style.overflow = "";
}

/* ==========================================================================
   5. CONTACT FORM VALIDATION & MAILTO SCRIPT
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const msgInput = document.getElementById("form-message");

    let isValid = true;

    // Reset error messages
    document.querySelectorAll(".form-error").forEach(el => el.classList.remove("visible"));

    if (!nameInput.value.trim()) {
      showFieldError("error-name", "Please enter your name");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError("error-email", "Please enter a valid email address");
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      showFieldError("error-subject", "Please enter a subject");
      isValid = false;
    }

    if (!msgInput.value.trim()) {
      showFieldError("error-message", "Please enter your message");
      isValid = false;
    }

    if (!isValid) return;

    // Construct Mailto URI
    const recipient = PORTFOLIO_DATA.profile.email;
    const subject = encodeURIComponent(`[Portfolio Contact] ${subjectInput.value.trim()} - from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hello Rakshitha,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${msgInput.value.trim()}\n\nRegards,\n${nameInput.value.trim()}`
    );

    const mailtoUri = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showToast("Launching your email client to send message...");
    window.location.href = mailtoUri;

    // Optional form reset after small timeout
    setTimeout(() => {
      form.reset();
    }, 1200);
  });
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = msg;
    el.classList.add("visible");
  }
}

/* ==========================================================================
   6. CLIPBOARD BUTTONS & TOAST NOTIFICATIONS
   ========================================================================== */
function initClipboardButtons() {
  const copyEmailBtn = document.getElementById("btn-copy-email");
  const copyPhoneBtn = document.getElementById("btn-copy-phone");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyToClipboard(PORTFOLIO_DATA.profile.email, "Email address copied to clipboard!");
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      copyToClipboard(PORTFOLIO_DATA.profile.phone, "Phone number copied to clipboard!");
    });
  }
}

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(message);
  } catch (err) {
    showToast("Failed to copy text");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg class="toast-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

/* ==========================================================================
   7. FOOTER YEAR
   ========================================================================== */
function initYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Global modal helpers
window.openProjectModal = openProjectModal;
window.previewCertificate = previewCertificate;
window.previewAchievementCert = previewAchievementCert;
window.closeAllModals = closeAllModals;
