/**
 * Timothy Villa Portfolio Data Configuration
 * 
 * Sourced directly from Timothy's updated CV and actual project repositories.
 */

export const portfolioData = {
  personal: {
    name: "Timothy Villa",
    firstName: "TIMOTHY",
    lastName: "VILLA",
    role: "Full-Stack Developer",
    badge: "Available for New Project",
    headline: "Web Developer at LGU Bacoor • CS Graduate",
    bio: "Web Developer at LGU Bacoor, Computer Science graduate from Cavite State University, and DOST Scholar. Building official municipal portals, real-time tracking systems, and scalable full-stack web architectures.",
    avatar: "/assets/TIM.png",
    email: "terezavilla70@gmail.com",
    phone: "09283023738",
    location: "Bacoor, Cavite, Philippines",
    resumeUrl: "/assets/VILLA-CV.pdf",
    yearsExperience: "LGU Web Dev",
  },

  nav: [
    { label: "Work", count: "12+", href: "#work" },
    { label: "Service", count: "4", href: "#service" },
    { label: "Certifications", count: "PSA & TESDA", href: "#certs" },
    { label: "Experience", count: "LGU", href: "#experience" },
    { label: "Contact", count: null, href: "#contact" },
  ],

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/timothy-villa-b06450280/",
      icon: "Linkedin",
      display: "LinkedIn",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
      display: "GitHub",
    },
    {
      name: "Resume",
      url: "/assets/VILLA-CV.pdf",
      icon: "Resume",
      display: "View CV (PDF)",
    },
  ],

  projects: [
    {
      id: "cpmc",
      title: "CPMC Project Monitoring System",
      category: "Real Project",
      badge: "LGU BACOOR",
      description: "Official municipal infrastructure and engineering project monitoring platform for the City of Bacoor, featuring real-time project metrics by barangay, interactive GIS mapping telemetry, cost distribution analytics, inspection logs, and rate-limiting security.",
      image: "/assets/images/cpmc/cp1.png",
      gallery: [
        "/assets/images/cpmc/cp1.png",
        "/assets/images/cpmc/cp2.png",
        "/assets/images/cpmc/cp3.png",
        "/assets/images/cpmc/cp4.png",
        "/assets/images/cpmc/cp5.png",
        "/assets/images/cpmc/cp6.png"
      ],
      tags: ["GovTech", "GIS Mapping", "Data Analytics", "LGU Bacoor", "Web App"],
      authorStudio: "Timothy Villa (LGU Bacoor)",
      featured: true,
    },
    {
      id: "revilla",
      title: "REVILLA Center Portal - Skills & Livelihood Center",
      category: "Real Project",
      badge: "LGU BACOOR",
      description: "Official skills training and livelihood management portal for the Revilla Center in San Nicolas II, managing free skills training, student/alumni registration, active TESDA course enrollments, community programs, and live registry analytics.",
      image: "/assets/images/revilla/r1.png",
      gallery: [
        "/assets/images/revilla/r1.png",
        "/assets/images/revilla/r2.png",
        "/assets/images/revilla/r4.png",
        "/assets/images/revilla/r5.png",
        "/assets/images/revilla/r6.png",
        "/assets/images/revilla/r7.png",
        "/assets/images/revilla/r10.png"
      ],
      tags: ["EdTech", "LGU Bacoor", "TESDA", "Student Portal", "Registry Analytics"],
      authorStudio: "Timothy Villa (LGU Bacoor)",
      featured: true,
    },
    {
      id: "bos",
      title: "Bacoor City E-Gov Portal (BOS)",
      category: "Real Project",
      badge: "LGU BACOOR",
      description: "Smart modern public service e-governance portal for the City Government of Bacoor, streamlining citizen access to municipal offices, public services, and digital registration.",
      image: "/assets/images/bos/1.png",
      gallery: [
        "/assets/images/bos/1.png",
        "/assets/images/bos/2.png",
        "/assets/images/bos/3.png",
        "/assets/images/bos/4.png"
      ],
      tags: ["GovTech", "E-Portal", "Public Service", "Web System"],
      authorStudio: "Timothy Villa (LGU Bacoor)",
      featured: true,
    },
    {
      id: "camts",
      title: "CAMTS - Consumer Goods Trading & Inventory ERP",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Full-scale enterprise management platform featuring real-time inventory tracking, accounts payable, client management, delivery routing, and companion Android & iOS mobile apps.",
      image: "/assets/images/camts/c1.png",
      gallery: [
        "/assets/images/camts/c1.png",
        "/assets/images/camts/c2.png",
        "/assets/images/camts/c3.png",
        "/assets/images/camts/c4.png",
        "/assets/images/camts-android/1.jpg",
        "/assets/images/camts-ios/cios1.png"
      ],
      tags: ["Full-Stack", "Web App", "Android", "iOS", "ERP System"],
      authorStudio: "Timothy Villa",
      featured: true,
    },
    {
      id: "alerts",
      title: "Emergency Incident & Responder Dispatch System",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Critical emergency reporting system designed for rapid crisis response, real-time dispatch, situation assessment reports for BFP/PNP, and casualty tracking with interactive map telemetry.",
      image: "/assets/images/alerts/a8.png",
      gallery: [
        "/assets/images/alerts/a1.png",
        "/assets/images/alerts/a7.png",
        "/assets/images/alerts/a8.png",
        "/assets/images/alerts/a9.png"
      ],
      tags: ["Real-Time", "Incident Management", "BFP / PNP", "Dispatch"],
      authorStudio: "Timothy Villa",
      featured: true,
    },
    {
      id: "student",
      title: "Berean Bible College - Student Record System",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Academic student portal and record management system featuring secure administrative login, automated student number assignment, profile encoding, and institutional record tracking.",
      image: "/assets/images/student/s1.png",
      gallery: [
        "/assets/images/student/s1.png",
        "/assets/images/student/s2.png",
        "/assets/images/student/s3.png"
      ],
      tags: ["EdTech", "Student Portal", "Database", "Authentication"],
      authorStudio: "Timothy Villa",
      featured: true,
    },
    {
      id: "emergency",
      title: "Bacoor Emergency Hotlines Directory",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Centralized responsive emergency communications portal connecting citizens with Police, BFP, and City Information Office hotlines with one-tap calling and Messenger integration.",
      image: "/assets/images/emergency/e1.png",
      gallery: [
        "/assets/images/emergency/e1.png",
        "/assets/images/emergency/e2.png",
        "/assets/images/emergency/e3.png"
      ],
      tags: ["Public Safety", "Directory", "Direct Dispatch"],
      authorStudio: "Timothy Villa",
      featured: false,
    },
    {
      id: "qr",
      title: "QR Code Generator & Verification System",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Secure municipal QR generation and attendance verification system incorporating anti-bot security checks, dynamic code rendering, and verified data authentication.",
      image: "/assets/images/qr/1.png",
      gallery: [
        "/assets/images/qr/1.png",
        "/assets/images/qr/2.png",
        "/assets/images/qr/3.png"
      ],
      tags: ["QR Codes", "Verification", "Security", "Bacoor City"],
      authorStudio: "Timothy Villa",
      featured: false,
    },
    {
      id: "canvas",
      title: "Canvas & Cotton - Custom Apparel Studio",
      category: "Exploration",
      badge: "EXPLORATION",
      description: "Interactive e-commerce web platform and visual editor enabling users to design custom t-shirts, select colorways, preview mockups, and order custom prints.",
      image: "/assets/images/canvas/cc1.png",
      gallery: [
        "/assets/images/canvas/cc1.png",
        "/assets/images/canvas/cc2.png"
      ],
      tags: ["E-Commerce", "Custom Editor", "Interactive UI"],
      authorStudio: "Timothy Villa",
      featured: false,
    },
    {
      id: "smart",
      title: "IoT Smart Hydroponics & Aquaculture System",
      category: "Exploration",
      badge: "EXPLORATION",
      description: "Hardware & software IoT engineering project integrating microcontrollers, water sensor telemetry, automated pump triggers, and a real-time web monitoring interface.",
      image: "/assets/images/smart/1.jpg",
      gallery: [
        "/assets/images/smart/1.jpg",
        "/assets/images/smart/2.jpg"
      ],
      tags: ["IoT Hardware", "Microcontrollers", "Telemetry", "Web Dashboard"],
      authorStudio: "Timothy Villa",
      featured: false,
    },
    {
      id: "church",
      title: "Berean Bible Baptist Church Molino Platform",
      category: "Real Project",
      badge: "REAL PROJECT",
      description: "Official community website for Berean Bible Baptist Church Molino featuring ministry profiles, service schedules, sermon media, and visit planning.",
      image: "/assets/images/church/1.png",
      gallery: [
        "/assets/images/church/1.png",
        "/assets/images/church/2.png"
      ],
      tags: ["Community", "Web Design", "Responsive Layout"],
      authorStudio: "Timothy Villa",
      featured: false,
    },
  ],

  certificates: [
    {
      name: "R Programming & Data Management",
      issuer: "Philippine Statistics Authority (PSA)",
      image: "/assets/images/certs/rprogramming.jpeg",
      description: "40 hours of technical training on R programming, statistical data modeling, and 2024 CBMS data management.",
    },
    {
      name: "Data Science",
      issuer: "Cisco Networking Academy",
      image: "/assets/images/certs/data-science.png",
      description: "Data analysis methodologies, predictive analytics fundamentals, and data manipulation.",
    },
    {
      name: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      image: "/assets/images/certs/html.png",
      description: "Modern HTML5 semantics, responsive page architecture, and accessible markup standards.",
    },
    {
      name: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      image: "/assets/images/certs/css.png",
      description: "CSS styling, flexible box layout, grid systems, and modern UI visual design.",
    },
    {
      name: "Computer System Servicing",
      issuer: "TESDA Online Program",
      image: "/assets/images/certs/set-com-ser-1.png",
      description: "Desktop/laptop troubleshooting, assembly, OS installation, and hardware maintenance.",
    },
    {
      name: "Computer Networks & Setup",
      issuer: "TESDA Online Program",
      image: "/assets/images/certs/set-com-net2.png",
      description: "Network configuration, cabling, router management, and IP topology.",
    },
    {
      name: "Visual Graphic Design",
      issuer: "TESDA Online Program",
      image: "/assets/images/certs/visual.png",
      description: "Digital layout design, typography systems, and visual branding.",
    },
    {
      name: "Bookkeeping NC III",
      issuer: "TESDA Online Program",
      image: "/assets/images/certs/bookkeeping.png",
      description: "Financial journalizing, ledger accounting, and trial balances.",
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Certification Program",
      image: "/assets/images/certs/cyber.png",
      description: "Security principles, threat detection, and data privacy protocols.",
    },
  ],

  services: [
    {
      id: "fullstack-dev",
      number: "01",
      title: "FULL-STACK WEB DEVELOPMENT",
      shortDescription: "Building robust, responsive web applications with modern frontend frameworks (React, JavaScript) and performant backend services.",
      deliverables: ["React / Vite Web Apps", "RESTful API Integration", "CRUD & Database Architecture", "Authentication & Security"],
    },
    {
      id: "gov-systems",
      number: "02",
      title: "E-GOV & RECORD MANAGEMENT SYSTEMS",
      shortDescription: "Engineering scalable municipal portals, project monitoring platforms, and community databases tailored for accurate data management.",
      deliverables: ["CPMC Project Monitoring", "Revilla Center Portals", "Student Information Portals", "Automated ID & QR Systems"],
    },
    {
      id: "data-r",
      number: "03",
      title: "DATA MANAGEMENT & R PROGRAMMING",
      shortDescription: "PSA-trained data analysis, statistical modeling with R, and interactive data visualization for surveys and governance metrics.",
      deliverables: ["R Statistical Programming", "CBMS Data Management", "Data Analytics & GIS", "Reporting & Dashboards"],
    },
    {
      id: "systems-hardware",
      number: "04",
      title: "SYSTEM SERVICING & IOT INTEGRATION",
      shortDescription: "Technical troubleshooting, system optimization, network configuration, and IoT telemetry sensor integrations.",
      deliverables: ["Computer Systems Servicing (TESDA)", "IoT & Sensor Telemetry", "Network Setup", "Performance Tuning"],
    },
  ],

  experience: [
    {
      id: "exp-lgu",
      company: "LGU Bacoor (City Government of Bacoor)",
      role: "Web Developer",
      period: "Sep 2025 - Present",
      description: "Engineering and deploying mission-critical municipal systems including the CPMC Project Monitoring System, Revilla Center Portal, and public e-governance platforms.",
      highlights: ["Web Developer", "Municipal E-Gov", "GIS & Analytics", "Full-Stack Development"],
    },
    {
      id: "exp-tp",
      company: "Teleperformance MOA",
      role: "Customer Expert I",
      period: "Nov 2023 - Jan 2025",
      description: "Delivered top-tier customer communication, rapid troubleshooting, and resolution management in a fast-paced environment.",
      highlights: ["Customer Service Excellence", "Problem Solving", "Adaptability"],
    },
    {
      id: "exp-cvsu",
      company: "Cavite State University - Imus Campus",
      role: "Bachelor of Science in Computer Science (DOST Scholar)",
      period: "2019 - 2023",
      description: "Earned BS in Computer Science as a recognized DOST RA 7687 Scholar and Bacoor Financial Assistance Scholar.",
      highlights: ["DOST RA 7687 Scholar", "Bacoor Scholar", "Data Structures & Systems Architecture"],
    },
    {
      id: "exp-melham",
      company: "Melham Construction Corporation Q.C.",
      role: "HR Assistant (Intern)",
      period: "Jun 2022 - Aug 2022",
      description: "Managed internal employee records, formatted corporate reports, and assisted in administrative data processes.",
      highlights: ["Data Accuracy", "Document Formatting", "HR Assistance"],
    },
    {
      id: "exp-barangay",
      company: "Barangay Pasong Buaya II, Imus, Cavite",
      role: "Data Encoder (OJT)",
      period: "Jan 2019 - Mar 2019",
      description: "Executed high-speed, accurate digital data entry of community records and civil documentation.",
      highlights: ["Fast & Accurate Data Entry", "Information Management"],
    },
    {
      id: "exp-mcdonalds",
      company: "McDonald's Vermosa Imus",
      role: "Crew",
      period: "Apr 2019 - Jun 2019",
      description: "Fast-paced food service operations, customer satisfaction, and team collaboration.",
      highlights: ["Team Collaboration", "Punctuality & Reliability"],
    },
    {
      id: "exp-shs",
      company: "St. Jude College Dasmariñas Cavite",
      role: "Senior High School (STEM) - Graduated With Honors",
      period: "2017 - 2019",
      description: "Graduated with academic honors in STEM track. 2nd Place in Science Quiz Bee (Grade 11).",
      highlights: ["With Honors", "STEM Specialization", "Science Awardee"],
    },
  ],

  cta: {
    headline: "HAVE A PROJECT IN MIND?",
    paragraph: "Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.",
    buttonText: "Contact Me",
  },
}
