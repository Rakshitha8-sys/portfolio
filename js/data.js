/**
 * Centralized Portfolio Data Store for Rakshitha
 * Grounded strictly in resume & specification.md
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Rakshitha",
    title: "Computer Science & Engineering Undergraduate",
    subtitle: "Aspiring Software Engineer | Python | C | Flutter | MySQL",
    institution: "Mangalore Institute of Technology & Engineering",
    cgpa: "8.21",
    status: "Available for Software Engineering Roles & Internships",
    location: "Udupi, Karnataka, India",
    email: "rakshithaandar@gmail.com",
    phone: "+91-9741050267",
    github: "https://github.com/Rakshitha8-sys",
    linkedin: "https://www.linkedin.com/in/rakshitha-326725331",
    photo: "assets/images/professional_photo.jpg",
    resumeDoc: "assets/docs/rakshitha_resume.docx",
    summary:
      "Computer Science & Engineering undergraduate at Mangalore Institute of Technology & Engineering with a strong academic record (CGPA: 8.21) and hands-on experience building full-stack and mobile applications, including a real-time cosmetic ingredient conflict detection and safety auditing system, a cross-platform donation app, and a health-data management system. Proficient in C, Python, Flutter, and MySQL, with a proven ability to design databases, implement core application logic, and deliver functional, user-focused solutions independently and in teams. Recognized for active participation in national-level hackathons and technical workshops.",
  },

  skills: [
    {
      id: "programming",
      category: "Programming Languages",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      description: "Core algorithmic problem solving and logic implementation",
      items: [
        { name: "C", badge: "Core", desc: "Structured programming, pointers & memory management" },
        { name: "Python", badge: "Advanced", desc: "Backend logic, data processing & scripting" }
      ]
    },
    {
      id: "web-mobile",
      category: "Web & Mobile Frameworks",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      description: "Responsive interface design and cross-platform client development",
      items: [
        { name: "HTML5", badge: "Frontend", desc: "Semantic structure & web accessibility standards" },
        { name: "CSS3", badge: "Styling", desc: "Responsive layouts, Flexbox, Grid & micro-animations" },
        { name: "Flutter", badge: "Mobile", desc: "Cross-platform mobile application development & UI state" }
      ]
    },
    {
      id: "databases",
      category: "Databases & Storage",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      description: "Relational database schema design and analytical queries",
      items: [
        { name: "MySQL", badge: "Relational", desc: "Complex queries, indexing, constraints & relational schema design" }
      ]
    },
    {
      id: "tools",
      category: "Tools & Development Platforms",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
      description: "Modern developer workflow, version control & intelligent toolchains",
      items: [
        { name: "VS Code", badge: "IDE", desc: "Extensible code editor and debugging workflow" },
        { name: "Antigravity IDE", badge: "AI Pair", desc: "Advanced agentic development and automated pipelines" }
      ]
    }
  ],

  projects: [
    {
      id: "cosmetic-audit",
      title: "Cosmetic Ingredient Conflict Detection & Safety Auditing System",
      category: "Real-time Web Application",
      featuredTag: "Full Stack & Database",
      shortDesc: "A real-time safety system that scans cosmetic product ingredient lists, cross-checks them against a known interaction database, and flags harmful or incompatible combinations.",
      technologies: ["Database Schema Design", "Backend Interaction Logic", "Web Application"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      details: {
        problem: "Consumers frequently layer multiple cosmetic and skincare formulations without knowing that certain active ingredients conflict with one another (e.g., causing irritation, pH cancellation, or toxicity).",
        solution: "Built a real-time safety auditing web application that takes an ingredient list, checks each entry against a curated conflict rule database, and returns instant safety ratings and conflict warnings.",
        keyFeatures: [
          "Real-time scanning and parsing of skincare and cosmetic ingredient lists",
          "Cross-referencing against a relational database schema storing ingredient interaction rules",
          "Detection and flagging of harmful, irritating, or incompatible ingredient combinations",
          "Generation of instant, easy-to-understand safety audit reports for informed buying decisions"
        ],
        implementation: "Designed the relational database schema specifically for ingredient interaction relationships, conflict severity levels, and lookup optimizations. Implemented the core backend application logic for fast evaluation and conflict traversal.",
        note: "Built as an applied safety auditing system grounded in reliable ingredient interaction rules."
      }
    },
    {
      id: "kindkart",
      title: "KindKart",
      category: "Flutter Mobile Application",
      featuredTag: "Mobile & Social Impact",
      shortDesc: "A charitable marketplace and donation platform built with Flutter that transparently connects donors with grassroots organizations to deliver essential goods to underprivileged communities.",
      technologies: ["Flutter", "Cross-Platform UI", "Mobile App Architecture"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      details: {
        problem: "Donating physical necessities like surplus food, wearable clothes, and educational stationeries often faces transparency barriers and logistics coordination challenges between willing donors and local community shelters.",
        solution: "KindKart provides a streamlined mobile platform bridging verified grassroots organizations directly with everyday donors.",
        keyFeatures: [
          "Charitable marketplace connecting donors directly with grassroots charity organizations",
          "Multi-category donation pathways: food essentials, clothes, and school stationeries",
          "Transparent tracking of requested items vs donated goods",
          "Clean, cross-platform mobile user experience crafted in Flutter"
        ],
        implementation: "Crafted interactive Flutter mobile screens, stateful UI components, donation catalog flows, and organized data models to enable straightforward item listing and request matching.",
        note: "Empowers community members to support poor and marginalized people directly through structured donation channels."
      }
    },
    {
      id: "ecg-analysis",
      title: "ECG Data Storage and Analysis",
      category: "SQL & Data Management Project",
      featuredTag: "Database & Health Data",
      shortDesc: "A specialized healthcare data storage system designed to collect, store, and manage ECG signals for heart activity monitoring and early detection of cardiac issues.",
      technologies: ["MySQL", "Database Management", "Data Analysis"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      details: {
        problem: "Electrocardiogram (ECG) data streams generate time-series telemetry that must be structured, stored securely, and indexed for rapid analytical querying and cardiac pattern review.",
        solution: "Engineered a database storage schema and query workflows tailored for ECG waveform readings, patient metadata, and event triggers.",
        keyFeatures: [
          "Normalized database schema for storing multi-lead ECG signal recordings and patient records",
          "Efficient SQL query pipelines for retrieving time-bounded signal sequences",
          "Implementation of fundamental pattern analysis techniques to identify abnormal waveform intervals",
          "Assists in cardiac pattern observation and early symptom flagging"
        ],
        implementation: "Constructed relational tables in MySQL with tailored constraints, indexing strategies for time-stamped telemetry data, and analytical stored queries for waveform inspection.",
        note: "Academic and technical project focusing on robust relational schema design and heart activity monitoring queries."
      }
    }
  ],

  education: [
    {
      id: "bachelor",
      degree: "Bachelor of Engineering — Computer Science & Engineering",
      institution: "Mangalore Institute of Technology & Engineering (MITE)",
      duration: "2023 – Present",
      status: "In Progress",
      score: "CGPA: 8.21",
      scoreType: "CGPA",
      details: [
        "Core focus on Data Structures & Algorithms, Object-Oriented Design, Database Systems, and Mobile Engineering",
        "Active member of campus technical clubs and participant in national-level hackathons",
        "Consistent academic excellence with an 8.21 cumulative GPA"
      ]
    },
    {
      id: "twelfth",
      degree: "Senior Secondary (12th Grade)",
      institution: "KSEEB (Karnataka Secondary Education Examination Board)",
      duration: "2022 – 2023",
      status: "Completed",
      score: "84.67%",
      scoreType: "Percentage",
      details: [
        "Completed Pre-University Science curriculum with strong foundations in Mathematics and Sciences"
      ]
    },
    {
      id: "tenth",
      degree: "Secondary School (SSLC / 10th Grade)",
      institution: "KSEEB (Karnataka Secondary Education Examination Board)",
      duration: "2020 – 2021",
      status: "Completed",
      score: "88.16%",
      scoreType: "Percentage",
      details: [
        "Graduated with distinction under KSEEB state examination board"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-databases",
      name: "Introduction To Databases",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "February 22, 2026",
      verifyUrl: "https://certificates.ccbp.in/academy/introduction-to-databases?id=BRLXJNUHSO",
      certificateImage: "assets/certificates/nxtwave_databases.png",
      credentialId: "BRLXJNUHSO",
      badge: "SQL & Databases",
      skillsGained: ["Relational Database Management", "SQL Queries", "Schema Design", "Data Integrity"]
    },
    {
      id: "cert-responsive",
      name: "Build Your Own Responsive Website",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "September 02, 2025",
      verifyUrl: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UCUITDMYXD",
      certificateFile: "assets/certificates/nxtwave_responsive_website.pdf",
      credentialId: "UCUITDMYXD",
      badge: "Frontend Development",
      skillsGained: ["Responsive Web Design", "Bootstrap", "Flexbox Layouts", "Mobile-First CSS"]
    },
    {
      id: "cert-static",
      name: "Build Your Own Static Website",
      issuer: "NxtWave CCBP 4.0 Academy",
      date: "February 09, 2026",
      verifyUrl: "https://certificates.ccbp.in/academy/static-website?id=NSVPDGLFSF",
      certificateFile: "assets/certificates/nxtwave_static_website.pdf",
      credentialId: "NSVPDGLFSF",
      badge: "Web Foundations",
      skillsGained: ["HTML5", "CSS3", "Web Layouts", "Semantic Markup"]
    },
    {
      id: "cert-datamining",
      name: "Data Mining — Elite Certification",
      issuer: "NPTEL (Funded by MoE, Govt. of India) | IIT Kharagpur",
      date: "Jan – Mar 2026",
      score: "Elite (Score: 75%)",
      rollNo: "NPTEL26CS58S671000260",
      certificateFile: "assets/certificates/nptel_data_mining.pdf",
      badge: "Data Science & AI",
      skillsGained: ["Data Mining Techniques", "Clustering & Classification", "Pattern Discovery", "Predictive Modeling"]
    },
    {
      id: "cert-tech-tried",
      name: "The Tech Tried",
      issuer: "NMAM Institute of Technology, Nitte",
      badge: "Technical Workshop",
      skillsGained: ["Emerging Technologies", "Hands-on Exploration", "Collaborative Problem Solving"]
    }
  ],

  achievements: [
    {
      id: "ach-gcem",
      title: "GCEM Hacks 4.0 — 24-Hour National Hackathon",
      organization: "Gopalan College of Engineering and Management (AI & ML) & IEEE Young Professionals AG Bangalore Section",
      date: "May 5 & 6, 2026",
      type: "National Level Hackathon",
      certificateFile: "assets/certificates/gcem_hacks_participation.pdf",
      description: "Actively participated in an intensive 24-hour national hackathon collaborating under timed sprints to ideate, architect, and prototype technological solutions."
    },
    {
      id: "ach-bts",
      title: "Bangalore Tech Summit 2025",
      organization: "Department of Electronics, IT, Bt, S&T, Government of Karnataka",
      date: "2025",
      type: "Premier Tech Summit",
      description: "Participated in Asia's flagship technology conference exploring cutting-edge developments in software, artificial intelligence, and deep tech innovations."
    },
    {
      id: "ach-sih",
      title: "Smart India Hackathon 2025",
      organization: "Ministry of Education's Innovation Cell (MIC) & AICTE",
      date: "2025",
      type: "Nationwide Hackathon",
      description: "Participated in the world's biggest open innovation hackathon solving pressing government and enterprise problem statements."
    },
    {
      id: "ach-ml-workshop",
      title: "Machine Learning: Bridging Theory to Deep Learning Practice",
      organization: "Department of Computer Science & Engineering, Mangalore Institute of Technology & Engineering",
      date: "August 24 & 26, 2026",
      type: "Hands-on Technical Workshop",
      certificateImage: "assets/certificates/mite_ml_workshop.png",
      certificateFile: "assets/certificates/mite_ml_workshop.pdf",
      description: "Received a Certificate of Appreciation for active participation in a two-day hands-on intensive workshop bridging fundamental ML algorithms into deep learning architectures."
    }
  ]
};
