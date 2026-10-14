export const PERSONAL_INFO = {
  name: "Sushrut Kale",
  firstName: "Sushrut",
  lastName: "Kale",
  headline: "AI/ML Developer · Full-Stack Engineer",
  tagline: "I build intelligent software that transforms complex problems into practical, interactive experiences.",
  location: "Pune, India",
  timezone: "UTC+05:30 (IST)",
  education: {
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    institution: "MIT Academy of Engineering",
    period: "2025 – 2029",
    cgpa: "8.9/10",
    combinedDisplay: "MIT Academy of Engineering · CGPA 8.9/10 (2025–2029)",
    status: "Active Undergraduate · Class of 2029"
  },
  links: {
    email: "sushrutkale13@gmail.com",
    github: "https://github.com/Sushrut-Kale",
    linkedin: "https://www.linkedin.com/in/sushrut-kale1367/",
    instagram: "https://www.instagram.com/me_sushrut.13"
  },
  resumePdf: "./resume/Sushrut_Kale_Resume.pdf",
  resumeFilename: "Sushrut_Kale_Resume.pdf",
  photo: "./pfp/official%20sushrut.jpg",
  stats: [
    { label: "Projects Engineered", value: "18", sub: "Production & Open Source" },
    { label: "Hackathons & Jams", value: "15+", sub: "ISRO, Adobe, TechSprint" },
    { label: "Verified Credentials", value: "22", sub: "Cisco, AWS, Anthropic" },
    { label: "Top Competition Honors", value: "02", sub: "Fund Arcade & HBTM IIIT Pune" }
  ],
  bioParagraphs: [
    "I build intelligent software that transforms complex problems into practical, interactive experiences. My interests span AI/ML, full-stack development, data visualization, and immersive 3D technologies.",
    "As a Computer Science Engineering student specializing in AI and Machine Learning at MIT Academy of Engineering (2025–2029), I focus on engineering software that is reliable, intuitive, and genuinely useful. Beyond coursework, I actively build full-stack applications, compete in national hackathons, and explore emerging technologies."
  ]
};

// Exact 18 Projects in unalterable sequence
export const PROJECTS = [
  {
    id: "sanchay-ai",
    number: "01",
    title: "Sanchay AI",
    subtitle: "Decentralized Rural Community Intelligence (SIH 2026)",
    category: "AI/ML & Social",
    shortDesc: "Offline-first agricultural intelligence and vernacular speech pipeline for rural cooperatives.",
    period: "2026",
    status: "SIH 2026 Finalist",
    featured: true,
    repoUrl: "https://github.com/SIH-2k26/sanchay-ai",
    liveUrl: null,
    previewImage: null,
    accent: "#AC4033",
    summary: "Smart India Hackathon project delivering localized AI-driven agricultural intelligence, offline-first voice query processing, and cooperative resource optimization models for rural producers.",
    problemStatement: "Marginalized rural communities face severe information asymmetry, volatile crop prices, and poor internet connectivity that leaves farmers without timely, actionable agricultural data.",
    solution: "Engineered an offline-first distributed application featuring low-bandwidth edge ML models, vernacular voice query pipelines, and cooperative resource optimization models for agricultural producers.",
    highlights: [
      "Smart India Hackathon 2026 core architecture",
      "Offline-first client synchronization with lightweight local cache",
      "Vernacular speech-to-text processing for non-English speaking farmers",
      "Predictive demand-supply curve modeling for local agricultural cooperatives"
    ],
    techStack: ["Python", "FastAPI", "React", "PyTorch", "Edge AI", "Tailwind CSS"]
  },
  {
    id: "unnati",
    number: "02",
    title: "Unnati",
    subtitle: "Rural Empowerment & Livelihood Platform (SIH 2026)",
    category: "Full-Stack",
    shortDesc: "Government scheme eligibility matching and mobile-first vocational skill discovery.",
    period: "2026",
    status: "SIH 2026 Finalist",
    featured: true,
    repoUrl: "https://github.com/SIH-2k26/unnati",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "Companion SIH 2026 platform focused on livelihood improvement, skill development pathways, and government scheme connectivity for rural residents.",
    problemStatement: "Rural residents lack accessible pathways to government schemes, skill training, and livelihood improvement opportunities.",
    solution: "A multi-modal platform connecting rural users with verified government programs, skill workshops, and local enterprise opportunities through a simple mobile-first interface.",
    highlights: [
      "Companion platform to Sanchay AI under SIH 2026",
      "Government scheme eligibility matching engine",
      "Skill development pathway recommendations",
      "Mobile-first design optimized for low-bandwidth environments"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Python", "FastAPI"]
  },
  {
    id: "agrin",
    number: "03",
    title: "AgriN — Regenerative Agricultural Intelligence",
    subtitle: "Regenerative Agricultural Intelligence & Soil Analytics",
    category: "AI/ML & IoT",
    shortDesc: "Soil telemetry regression models and crop diagnostic recommendations for regenerative farming.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/AgriN-Regenerative-Agricultural-Intelligence",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "Soil telemetry analysis and crop disease diagnostic system guiding regenerative agricultural practices through data-driven recommendations.",
    problemStatement: "Indiscriminate chemical fertilizer application and lack of localized soil diagnosis degrade micro-nutrients and reduce crop longevity.",
    solution: "Designed an ML inference service that processes NPK sensor readings, historical meteorological data, and crop leaf vision models to recommend precise organic nutrient mixes and regenerative crop rotation schedules.",
    highlights: [
      "Multi-variable soil fertility regression models on open agricultural datasets",
      "Dynamic regenerative recommendation pipeline based on seasonal climate projections",
      "Clean interactive dashboard for smallholder farmer telemetry"
    ],
    techStack: ["Python", "Scikit-learn", "IoT Telemetry", "Flask", "React"]
  },
  {
    id: "hbtm",
    number: "04",
    title: "HBTM",
    subtitle: "Hospital Bed & Trauma Emergency Routing Logistics",
    category: "Full-Stack & Systems",
    shortDesc: "Real-time WebSocket hospital bed telemetry network and dynamic trauma ambulance dispatch routing.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/HBTM",
    liveUrl: null,
    previewImage: null,
    accent: "#AC4033",
    summary: "Real-time emergency medical logistics platform tracking critical ICU/oxygen beds and computing dynamic trauma routing.",
    problemStatement: "During surge events and road accidents, ambulances lose critical golden hours driving to saturated hospitals with zero available ICU beds.",
    solution: "Architected a live multi-hospital bed telemetry network with Socket.io streaming, automated ambulance ETA calculations, and priority trauma triage dispatch.",
    highlights: [
      "Live hospital capacity telemetry using WebSockets for sub-second synchronization",
      "Dynamic distance + ICU readiness scoring algorithm for emergency dispatchers",
      "Geospatial visualization of trauma corridors with Leaflet integration"
    ],
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Leaflet"]
  },
  {
    id: "aisep",
    number: "05",
    title: "AISEP",
    subtitle: "Role-Based Academic Collaboration & Classroom Hub",
    category: "Full-Stack",
    shortDesc: "EduCore classroom collaboration workspace with Firebase real-time sync and gradebook feedback.",
    period: "2025",
    status: "Live in Production",
    repoUrl: "https://github.com/Asymptote-Horizon/AISEP",
    liveUrl: "https://edu-core-blush.vercel.app/",
    previewImage: null,
    accent: "#597382",
    summary: "Modern classroom collaboration workspace (EduCore) streamlining coursework distribution, team chats, and assignment grading.",
    problemStatement: "College coursework management is often split across clunky legacy LMS portals that lack intuitive real-time messaging.",
    solution: "Built a sleek, responsive Single Page Application with Firebase real-time data sync, secure student/instructor permissions, and clean Tailwind ergonomics.",
    highlights: [
      "Instantaneous real-time document sync and gradebook feedback",
      "Intuitive role-based interface designed for high-density academic workflows",
      "Deployed with high uptime on Vercel"
    ],
    techStack: ["React", "Vite", "Firebase Auth & Firestore", "Tailwind CSS", "Vercel"]
  },
  {
    id: "campus-3d",
    number: "06",
    title: "Campus 3D",
    subtitle: "WebGL Interactive Digital Twin & Navigation Engine",
    category: "3D & Creative Tech",
    shortDesc: "In-browser WebGL campus twin with dual Orbit/FPS camera modes and animated 3D A* pathfinding.",
    period: "2026",
    status: "Completed",
    featured: true,
    repoUrl: "https://github.com/Sushrut-Kale/Campus-3D",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "WebGL-powered 3D digital twin of the MIT AOE campus rendering buildings, interactive floor plans, and real-time localized A* pathfinding.",
    problemStatement: "Navigating expansive multi-acre academic campuses with intricate floor layouts and multi-wing facilities is disorienting for thousands of students and visitors.",
    solution: "Engineered an in-browser 3D digital twin using React Three Fiber and Three.js. Includes dual camera controls (Orbit bird's-eye and First-Person Walkthrough with touch joystick), a real-time A* pathfinding algorithm rendered as an animated 3D CatmullRom tube, Fuse.js fuzzy room search, and WebGL context-loss recovery.",
    highlights: [
      "Real-time A* pathfinding between campus waypoints rendered as glowing 3D CatmullRom splines",
      "Dual navigation: smooth Orbit panning + First-Person FPS mode with mobile virtual joystick",
      "Fuzzy search indexing via Fuse.js for rooms, department wings, and faculty cabins",
      "Engineered WebGL context-loss recovery to prevent mobile tab backgrounding crashes"
    ],
    techStack: ["React 18", "Three.js", "React Three Fiber", "Drei", "Zustand", "Fuse.js", "Vite"]
  },
  {
    id: "timetable",
    number: "07",
    title: "Timetable",
    subtitle: "Automated Academic Timetable Optimization Engine",
    category: "Optimization",
    shortDesc: "Mathematical constraint-satisfaction solver automating NP-hard university schedule generation.",
    period: "2025 – 2026",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/timetable",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "Constraint-satisfaction system that automates NP-hard university timetabling across hundreds of faculty, divisions, and lab constraints.",
    problemStatement: "University schedule coordination across dozens of faculty preferences, shared lab infrastructure, lecture room capacities, and student batch splits takes weeks of tedious manual reconciliation.",
    solution: "Created an automated timetable generator where academic coordinators upload a master Excel workbook. A high-speed FastAPI solver models all hard constraints in Google OR-Tools CP-SAT, generating provably optimal, conflict-free weekly schedules browsable in Next.js.",
    highlights: [
      "Formulated academic timetabling as a pure mathematical constraint optimization problem",
      "Zero-database solver architecture: fast in-memory CP-SAT execution with clean Next.js persistence",
      "Interactive multi-dimensional schedule views by faculty, room, and student division",
      "Reduced department scheduling turnaround from weeks to seconds"
    ],
    techStack: ["Next.js 16", "FastAPI", "Python", "Google OR-Tools", "Tailwind CSS", "Pandas"]
  },
  {
    id: "manim",
    number: "08",
    title: "Manim",
    subtitle: "Algorithmic & Mathematical Visualization Engine",
    category: "Creative Technology",
    shortDesc: "Programmatic code-driven mathematical visualizations explaining optimization algorithms.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/manim",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "Programmatic mathematical animations breaking down complex algorithmic and calculus concepts using Manim Community Edition.",
    problemStatement: "Static diagrams fail to convey the dynamic behavior of multidimensional optimization surfaces and tensor transformations.",
    solution: "Authored code-driven mathematical visualizations producing broadcast-grade video animations demonstrating graph traversals, neural layer transformations, and constraint bounds.",
    highlights: [
      "Exact geometric rendering utilizing NumPy arrays and LaTeX typesetting",
      "Automated animation rendering pipeline for educational computer science content",
      "Deep visualization of Bayesian inference state transitions"
    ],
    techStack: ["Python", "Manim CE", "NumPy", "LaTeX"]
  },
  {
    id: "ai-learning-conductor",
    number: "09",
    title: "AI Learning Conductor",
    subtitle: "Closed-Loop Bayesian Adaptive Learning Agent",
    category: "AI/ML & Optimization",
    shortDesc: "Dynamic curriculum planner modeling student mastery via Bayesian Knowledge Tracing & CP-SAT.",
    period: "2026",
    status: "Active Development",
    featured: true,
    repoUrl: "https://github.com/Sushrut-Kale/AI-Learning-Conductor",
    liveUrl: null,
    previewImage: null,
    accent: "#AC4033",
    summary: "Personalized learning conductor modeling student mastery via Bayesian Knowledge Tracing and re-planning curriculum dynamically with CP-SAT constraint solving.",
    problemStatement: "Contemporary educational platforms track superficial proxy metrics rather than probabilistic cognitive mastery, resulting in rigid, one-size-fits-all learning paths.",
    solution: "Developed an autonomous closed-loop agent that maintains a live Bayesian Knowledge Tracing probability model for each student. The moment mastery changes, Google OR-Tools CP-SAT re-solves optimal study paths under prerequisite constraints.",
    highlights: [
      "Bayesian Knowledge Tracing (BKT) engine tracking probabilistic topic comprehension",
      "Dynamic constraint satisfaction re-planning using Google OR-Tools CP-SAT solver",
      "Deterministic safety and risk engine to avoid hallucinations and maintain traceable nudges",
      "Hybrid LLM architecture: Gemini API with local Ollama offline fallback"
    ],
    techStack: ["Python", "FastAPI", "Google OR-Tools", "React", "MongoDB", "Gemini API", "Ollama"]
  },
  {
    id: "paytm",
    number: "10",
    title: "Paytm",
    subtitle: "Fintech Payment Flow & Wallet Application",
    category: "Full-Stack",
    shortDesc: "Payment gateway UX flow replication with JWT authentication, wallet state, and transaction tracking.",
    period: "2025",
    status: "Learning Project",
    repoUrl: "https://github.com/Sushrut-Kale/paytm",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "Full-stack fintech application exploring payment UX patterns, transaction flows, and secure authentication architectures.",
    problemStatement: "Understanding real-world payment gateway architecture and secure transaction handling requires hands-on implementation beyond coursework.",
    solution: "Built a functional payment flow application with user authentication, wallet management, and transaction history replicating core fintech UX patterns.",
    highlights: [
      "User authentication and JWT session management",
      "Wallet balance and transaction state management",
      "Clean payment UX flows with input validation"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: "maze-ai",
    number: "11",
    title: "Maze AI",
    subtitle: "Visual Pathfinding Algorithm Playground",
    category: "AI/ML & Visualization",
    shortDesc: "Interactive browser canvas playground visualizing A*, BFS, and Dijkstra pathfinding execution.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/maze_AI",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "Interactive maze generator and solver visualizing classic AI pathfinding algorithms step-by-step in real time.",
    problemStatement: "Pathfinding algorithms like A*, BFS, and Dijkstra are abstract without visual demonstrations of how they explore the search space.",
    solution: "A browser-based interactive playground where users generate mazes and watch algorithms solve them with full animation and speed controls.",
    highlights: [
      "Multiple algorithm visualizations: A*, BFS, Dijkstra",
      "Real-time step-by-step animation with speed control",
      "Interactive maze generation and drawing tools"
    ],
    techStack: ["JavaScript", "HTML Canvas", "CSS", "Algorithm Design"]
  },
  {
    id: "data-visualization",
    number: "12",
    title: "Data Visualization",
    subtitle: "TradeVision 2030 — Global Trade Analytics Suite",
    category: "Data Analytics",
    shortDesc: "Macro-economic analytics suite modeling global supply corridors with snowflake schema and Power BI.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/Data-visualization-",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "Macro-economic analytics suite modeling global supply corridors and tariff shifts using snowflake schema architecture.",
    problemStatement: "Global supply chain disruptions require multi-variable trade flow analysis across dozens of shipping routes and tariff classifications.",
    solution: "Constructed an enterprise data model with clean star/snowflake schemas, optimized DAX measures, and scenario-planning parameters for international trade analysts.",
    highlights: [
      "Robust snowflake schema data architecture optimized for multi-million row querying",
      "Complex DAX formulas for YoY growth, elasticity indexing, and freight variance",
      "Executive interactive dashboards with drill-through capability"
    ],
    techStack: ["Power BI", "DAX", "Python", "SQL", "Snowflake Schema"]
  },
  {
    id: "task-manager-ecosystem",
    number: "13",
    title: "Task Manager Ecosystem",
    subtitle: "Multi-Layer Collaborative Productivity Platform",
    category: "Full-Stack",
    shortDesc: "Hierarchical task and project management ecosystem with team permissions and real-time status.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/Task-Manager-Ecosystem",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "Full-featured collaborative task management platform with nested project hierarchies, team permissions, and real-time progress tracking.",
    problemStatement: "Generic task apps lack depth for technical teams or are too complex for personal use.",
    solution: "A layered task ecosystem supporting personal tasks, team projects, and department oversight with role-based access and deadline management.",
    highlights: [
      "Hierarchical task and project organization",
      "Role-based team permissions and collaboration",
      "Real-time progress tracking and deadline management"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: "clubsync",
    number: "14",
    title: "ClubSync",
    subtitle: "Campus Club Management & AI Recommendation Platform",
    category: "Full-Stack",
    shortDesc: "Live campus club hub with signed QR-code attendance verification and Gemini-powered matchmaking.",
    period: "2025",
    status: "Live in Production",
    featured: true,
    repoUrl: "https://github.com/Sushrut-Kale/ClubSync",
    liveUrl: "https://clubsync-4qua.vercel.app/",
    previewImage: null,
    accent: "#AC4033",
    summary: "End-to-end college club management portal with QR attendance verification, real-time push events, and Gemini-powered club matchmaking.",
    problemStatement: "Campus clubs suffer from fragmented communication across WhatsApp groups, paper attendance rosters, and low discovery among freshmen.",
    solution: "Built a centralized cloud platform with role-based access for Administrators, Club Leads, and Students. Features cryptographically signed QR code attendance, real-time event broadcasting, and a personalized recommendation engine powered by Google Gemini.",
    highlights: [
      "Role-based authorization (Admin / Club Head / Student) secured by Firebase Auth",
      "Dynamic single-use QR-code scanner for rapid in-person attendance verification",
      "AI-driven club recommendation algorithm analyzing student interests via Gemini API",
      "Deployed on Vercel with real-time MongoDB Atlas integration"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "Gemini API", "Vercel"]
  },
  {
    id: "paradigmhmx",
    number: "15",
    title: "ParadigmHMX",
    subtitle: "Hackathon Management & Team Coordination Platform",
    category: "Full-Stack",
    shortDesc: "Hackathon coordination system covering team formation, problem statements, and live judging rounds.",
    period: "2026",
    status: "Completed",
    repoUrl: "https://github.com/sukrut07/ParadigmHMX",
    liveUrl: null,
    previewImage: null,
    accent: "#597382",
    summary: "Platform for organizing hackathon logistics including team formation, submission tracking, and judging coordination.",
    problemStatement: "Hackathon organizers struggle to manage hundreds of teams, submissions, and real-time judging across multiple rounds.",
    solution: "Dedicated hackathon management system covering team registration, problem delivery, submission management, and judging workflows.",
    highlights: [
      "Team registration and formation management",
      "Problem statement delivery and submission tracking",
      "Judging panel coordination and score management"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: "iqoo",
    number: "16",
    title: "IQOO",
    subtitle: "Premium Product Landing Page & Interactive UI",
    category: "Frontend & Motion",
    shortDesc: "High-fidelity smartphone showcase with scroll-driven GSAP reveals and interactive variant selector.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/sukrut07/iqoo",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "High-fidelity product showcase for IQOO smartphones with scroll-driven animations and premium interactive design.",
    problemStatement: "Consumer electronics brands need compelling pages that communicate premium positioning through motion and visual composition.",
    solution: "Scroll-driven product page with animated specification reveals, interactive color variants, and cinematic transitions.",
    highlights: [
      "Scroll-driven animations tied to product storytelling",
      "Interactive color and variant selector with smooth transitions",
      "Premium typography and visual composition"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"]
  },
  {
    id: "ultrasonic-radar",
    number: "17",
    title: "Ultrasonic Radar Detection",
    subtitle: "Microcontroller Spatial Telemetry & Polar Sweep Interface",
    category: "Hardware & IoT",
    shortDesc: "Arduino & servo hardware bridge streaming ultrasonic telemetry to a real-time polar radar UI.",
    period: "2024",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/Ultrasonic-Radar-Detection",
    liveUrl: null,
    previewImage: null,
    accent: "#AC4033",
    summary: "Hardware-software bridge translating ultrasonic servo sweeps into a real-time polar coordinate graphical radar screen.",
    problemStatement: "Low-cost robotic navigation requires immediate spatial mapping without high-power consumption LiDAR units.",
    solution: "Interfaced an Arduino microcontroller with an HC-SR04 ultrasonic sensor mounted to a micro-servo, streaming serial distance telemetry to a Python/Processing visual radar UI.",
    highlights: [
      "Real-time polar coordinate angle and distance mapping (0° to 180°)",
      "Hardware-software serial data protocol with glitch rejection filters",
      "Dynamic visual color coding based on obstacle threat radius"
    ],
    techStack: ["C++", "Arduino", "Processing", "Python", "Serial Protocol"]
  },
  {
    id: "intelliforge",
    number: "18",
    title: "Intelliforge",
    subtitle: "Developer Automation & Scaffolding Toolkit",
    category: "Developer Tooling",
    shortDesc: "CLI scaffolding and architecture validation engine reducing full-stack bootstrap time to seconds.",
    period: "2025",
    status: "Completed",
    repoUrl: "https://github.com/Sushrut-Kale/intelliforge",
    liveUrl: null,
    previewImage: null,
    accent: "#938676",
    summary: "CLI tool and scaffolding engine for automating repetitive full-stack patterns and architecture validations.",
    problemStatement: "Boilerplate setup, schema synchronizations, and repository hygiene eat into core development velocity.",
    solution: "Crafted lightweight Node.js CLI utilities for code scaffolding, automated lint/type check orchestrations, and repository structure enforcement.",
    highlights: [
      "Zero-config CLI scaffolding for React and FastAPI full-stack projects",
      "Custom AST traversal checks for strict type consistency",
      "Speedy build scripts reducing initial project bootstrap to seconds"
    ],
    techStack: ["JavaScript", "Node.js CLI", "AST Tooling", "Bash"]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    domain: "Core Engineering",
    description: "Languages used for algorithmic problem solving, backend systems, and web architecture.",
    skills: [
      { name: "Python 3.10+", level: "Core", desc: "Scientific computing, async FastAPI backends, and ML inference.", projects: ["AI Learning Conductor", "Timetable", "AgriN", "Manim"] },
      { name: "JavaScript (ES2024)", level: "Core", desc: "Modern ECMAScript, event loops, DOM performance, and async paradigms.", projects: ["Campus 3D", "ClubSync", "AISEP", "Intelliforge"] },
      { name: "TypeScript", level: "Proficient", desc: "Type-safe interfaces, generics, and large-scale component architecture.", projects: ["Campus 3D", "ClubSync"] },
      { name: "C++", level: "Working Knowledge", desc: "Object-oriented systems, memory efficiency, and microcontroller firmware.", projects: ["Ultrasonic Radar Detection"] },
      { name: "SQL (PostgreSQL / MySQL / Oracle)", level: "Proficient", desc: "Relational modeling, complex joins, subqueries, and DDL/DML execution.", projects: ["Data Visualization", "Timetable"] }
    ]
  },
  {
    name: "AI/ML and Data Science",
    domain: "Machine Learning",
    description: "Probabilistic modeling, constraint optimization, and neural applications.",
    skills: [
      { name: "Google OR-Tools (CP-SAT)", level: "Specialized", desc: "Formulating NP-hard discrete scheduling and combinatorial constraint satisfaction.", projects: ["Timetable", "AI Learning Conductor"] },
      { name: "Bayesian Knowledge Tracing (BKT)", level: "Specialized", desc: "Modeling probabilistic student cognitive mastery across sequential assessment events.", projects: ["AI Learning Conductor"] },
      { name: "PyTorch & Deep Learning", level: "Applied", desc: "Neural network layers, tensors, and training workflows.", projects: ["Sanchay AI"] },
      { name: "Scikit-Learn & ML Pipelines", level: "Proficient", desc: "Multi-variable regression, feature scaling, and model evaluation metrics.", projects: ["AgriN", "Datathon 2026"] },
      { name: "Gemini API & LLM Orchestration", level: "Proficient", desc: "Structured outputs, function calling, and personalized recommendations.", projects: ["ClubSync", "AI Learning Conductor"] },
      { name: "Ollama (Local Offline Inference)", level: "Proficient", desc: "Zero-latency local model execution for privacy and offline resilience.", projects: ["AI Learning Conductor"] }
    ]
  },
  {
    name: "Full-Stack Development",
    domain: "Web & API Systems",
    description: "End-to-end reactive client architectures and high-performance server APIs.",
    skills: [
      { name: "React 18 / 19", level: "Core", desc: "Component architecture, hooks, concurrent rendering, and performance optimization.", projects: ["Campus 3D", "ClubSync", "AISEP", "Sanchay AI"] },
      { name: "Next.js 16", level: "Proficient", desc: "App Router, server components, and production full-stack deployment.", projects: ["Timetable"] },
      { name: "FastAPI (Async Python)", level: "Core", desc: "High-throughput asynchronous Python endpoints with Pydantic validation.", projects: ["AI Learning Conductor", "Timetable", "Sanchay AI"] },
      { name: "Node.js & Express", level: "Proficient", desc: "RESTful services, middleware design, and JSON payload handling.", projects: ["ClubSync", "HBTM", "Task Manager Ecosystem"] },
      { name: "WebSockets & Socket.io", level: "Proficient", desc: "Sub-second bidirectional telemetry streaming for emergency logistics.", projects: ["HBTM"] },
      { name: "Tailwind CSS & Vanilla CSS", level: "Core", desc: "Precision design systems, editorial layouts, and responsive fluid grids.", projects: ["All Projects"] }
    ]
  },
  {
    name: "Data Visualization",
    domain: "Analytics & Graphics",
    description: "Transforming complex datasets and mathematical theorems into intuitive visual interfaces.",
    skills: [
      { name: "Power BI & DAX", level: "Proficient", desc: "Star/snowflake schema modeling, calculated measures, and executive KPI boards.", projects: ["Data Visualization"] },
      { name: "Manim Community Edition", level: "Proficient", desc: "Programmatic mathematical rendering and algorithmic motion graphics.", projects: ["Manim"] },
      { name: "Leaflet & GIS Telemetry", level: "Proficient", desc: "Geospatial coordinate mapping and emergency corridor visualization.", projects: ["HBTM"] },
      { name: "HTML Canvas & Processing", level: "Proficient", desc: "2D particle systems, polar radar sweep displays, and algorithm playgrounds.", projects: ["Maze AI", "Ultrasonic Radar Detection"] },
      { name: "Exploratory Data Analysis (EDA)", level: "Proficient", desc: "Statistical data cleansing, variance analysis, and distribution plotting.", projects: ["MITAOE Summer Internship", "Datathon 2026"] }
    ]
  },
  {
    name: "Game Development",
    domain: "Interactive Mechanics",
    description: "Real-time game loops, physics simulations, and player control systems.",
    skills: [
      { name: "Game Loop & State Machines", level: "Applied", desc: "Framerate-independent update loops and player state architecture.", projects: ["GTA MegaJam", "Maze AI"] },
      { name: "Movement & Collision Physics", level: "Applied", desc: "Raycasting, bounding boxes, and velocity-based controller mechanics.", projects: ["GTA MegaJam", "Campus 3D"] },
      { name: "Rapid Game Jam Prototyping", level: "Applied", desc: "Delivering finished playable games under 48-hour competitive constraints.", projects: ["GTA MegaJam"] }
    ]
  },
  {
    name: "3D and Creative Technology",
    domain: "Real-Time 3D",
    description: "WebGL digital twin architectures, camera kinematics, and spatial computation.",
    skills: [
      { name: "Three.js", level: "Advanced", desc: "Scene graphs, lighting, custom geometries, materials, and WebGL rendering.", projects: ["Campus 3D"] },
      { name: "React Three Fiber (R3F)", level: "Advanced", desc: "Declarative 3D component systems integrated with React state lifecycles.", projects: ["Campus 3D"] },
      { name: "@react-three/drei", level: "Advanced", desc: "Camera controls, loaders, procedural environments, and CatmullRom splines.", projects: ["Campus 3D"] },
      { name: "A* Spatial Pathfinding in 3D", level: "Specialized", desc: "Real-time waypoint pathfinding rendered as glowing 3D navigational tubes.", projects: ["Campus 3D"] },
      { name: "WebGL Context-Loss Recovery", level: "Specialized", desc: "Resilient shader and texture re-instantiation preventing browser crashes.", projects: ["Campus 3D"] },
      { name: "Blender 3D", level: "Working Knowledge", desc: "Low-poly asset optimization, UV unwrapping, and glTF/GLB export pipeline.", projects: ["Campus 3D"] }
    ]
  },
  {
    name: "Tools and Platforms",
    domain: "DevOps & Infrastructure",
    description: "Industry tools, version control, cloud platforms, and database services.",
    skills: [
      { name: "Git & GitHub", level: "Core", desc: "Version control, branching strategy, code reviews, and open-source hygiene.", projects: ["All Projects"] },
      { name: "Vercel & Cloud Hosting", level: "Core", desc: "Edge deployments, automated CI/CD pipelines, and domain routing.", projects: ["ClubSync", "AISEP", "Portfolio"] },
      { name: "MongoDB & Mongoose", level: "Proficient", desc: "Document modeling, indexing, aggregation pipelines, and Atlas clusters.", projects: ["ClubSync", "HBTM", "Task Manager Ecosystem"] },
      { name: "Firebase (Auth & Firestore)", level: "Proficient", desc: "Real-time document synchronization and role-based security rules.", projects: ["ClubSync", "AISEP"] },
      { name: "Docker & Containerization", level: "Working Knowledge", desc: "Containerized environments for reproducible development and deployments.", projects: ["Sanchay AI"] },
      { name: "Vite Bundler", level: "Core", desc: "Optimized roll-up configurations, code splitting, and ultra-fast HMR.", projects: ["Campus 3D", "ClubSync", "AISEP", "Portfolio"] }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "mitaoe-summer-internship",
    organization: "MIT Academy of Engineering (MITAOE)",
    role: "Software & Machine Learning Intern",
    type: "Internship",
    period: "Academic Year 2026–2027",
    location: "Pune, India",
    verifiedDocument: "./experience/MITAOE_Summerinternship.pdf",
    highlights: [
      "Contributed to the development of the AI-Integrated Student Engagement Platform (AISEP) for First-Year Students.",
      "Gained practical engineering experience in software development, artificial intelligence pipelines, and user experience design.",
      "Collaborated under Internship Coordinator Dr. Puja Verma and Director Dr. Mahesh Goudar."
    ],
    tag: "Verified Internship Document Available"
  },
  {
    id: "ecell-mitaoe",
    organization: "E-Cell, MIT Academy of Engineering",
    role: "Marketing & Public Relations Team Member",
    type: "Collegiate Organization",
    period: "Collegiate Engagement",
    location: "Pune, India",
    verifiedDocument: null,
    highlights: [
      "Contributed to digital content strategies and tech branding for annual entrepreneurship summits.",
      "Coordinated with student entrepreneurs, mentors, and keynote speakers across campus events.",
      "Supported sponsor engagement and outreach for collegiate innovation competitions."
    ],
    tag: "Collegiate Leadership"
  },
  {
    id: "astra-aiml",
    organization: "ASTRA — AIML Department Association",
    role: "Technical Team Member",
    type: "Departmental Body",
    period: "Collegiate Engagement",
    location: "Pune, India",
    verifiedDocument: null,
    highlights: [
      "Facilitated peer technical workshops on Python fundamentals, AI integrations, and Git workflows.",
      "Collaborated with peers on algorithmic problem solving and modern web frameworks.",
      "Participated in departmental coding challenges and technical community initiatives."
    ],
    tag: "Technical Community"
  },
  {
    id: "vertex-gamedev",
    organization: "Vertex — Game Development & Animation Club",
    role: "Technical Member",
    type: "Special Interest Group",
    period: "Collegiate Engagement",
    location: "Pune, India",
    verifiedDocument: null,
    highlights: [
      "Explored real-time graphics pipelines, physics engines, and computational geometry.",
      "Participated in collegiate game development jams including GTA MegaJam developing movement mechanics.",
      "Experimented with shader programming and interactive visual storytelling."
    ],
    tag: "Creative Technology"
  }
];

// Events: Strictly using verified assets from the events/ folder
// HBTM is Item 01, Fund Arcade is Item 02
export const EVENTS_DATA = [
  {
    id: "ev-hbtm",
    number: "01",
    title: "Hack Better Than Me (HBTM)",
    category: "24-Hour National Hackathon",
    organizer: "IIIT Pune & IEEE Maharashtra Section / IABTM",
    year: "2026",
    statusBadge: "1st Runner-up (2nd Place)",
    file: "./events/hbtm_CERTIFICATE.jpg",
    secondaryFile: "./events/HBTM.png",
    fileType: "image",
    summary: "Certificate of Excellence as First Runner-up (2nd Place) at the 24-Hour National Hackathon centered around 'Agentic AI for Human Potential'.",
    description: "Awarded Certificate of Excellence as First Runner-up (2nd Place) with team Hackverse at Hack Better Than Me (HBTM), a 24-hour national hackathon hosted by Indian Institute of Information Technology Pune (IIIT Pune) and IEEE Maharashtra Section / IEEE IIIT Pune Student Branch. Recognized for outstanding innovation and technical excellence in developing AI-driven solutions addressing real-world challenges through human-centered design.",
    verificationId: "IIITP/HBTM/W2/004",
    date: "2 August 2026"
  },
  {
    id: "ev-fund-arcade",
    number: "02",
    title: "Fund Arcade Championship",
    category: "Competitive Tech Sprint",
    organizer: "COEP Technological University / Pune Start-Up Fest '26",
    year: "2026",
    statusBadge: "1st Place Winner",
    file: "./events/Certificate_FUND%20ARCADE_FIRST_01.pdf",
    fileType: "pdf",
    summary: "Secured First Place recognition in a competitive tech sprint for exceptional architecture and rapid prototyping.",
    description: "Awarded 1st Place out of competitive developer cohorts for building an engaging financial technology interactive platform at Pune Start-Up Fest '26 hosted at COEP Technological University.",
    verificationId: "COEP/PSF26/FA-01",
    date: "January 17–18, 2026"
  },
  {
    id: "ev-isro-hackathon",
    number: "03",
    title: "ISRO Hackathon",
    category: "National Space Technology Challenge",
    organizer: "Indian Space Research Organisation (ISRO)",
    year: "2026",
    statusBadge: "National Participant",
    file: "./events/ISRO%20Hackathon%20Participation%20Certificate.png",
    fileType: "image",
    summary: "Tackled national space technology challenges on geospatial satellite telemetry and spatial algorithms.",
    description: "Competed in the national ISRO Hackathon addressing geospatial satellite telemetry, data interpretation, and algorithmic spatial challenges under strict technical guidelines.",
    date: "2026"
  },
  {
    id: "ev-techsprint-2026",
    number: "04",
    title: "TechSprint 2026",
    category: "The Open Innovation Hackathon",
    organizer: "TechSprint Innovation Forum",
    year: "2026",
    statusBadge: "Participant",
    file: "./events/CERTIFICATE%20OF%20PARTICIPATION%20IN%20Techsprint-%20The%20Open%20Innovation%20Hackathon%202026.png",
    fileType: "image",
    summary: "Engineered scalable solutions tackling open innovation challenges within an intense 36-hour sprint.",
    description: "Competed in TechSprint — The Open Innovation Hackathon 2026, building decentralized full-stack prototypes in a high-tempo sprint.",
    date: "2026"
  },
  {
    id: "ev-datathon-2026",
    number: "05",
    title: "Datathon 2026",
    category: "Competitive Data Science",
    organizer: "MIT Academy of Engineering (MITAOE), Pune",
    year: "2026",
    statusBadge: "Participant (Team NeuralEd)",
    file: "./events/Certificate%20of%20Participation%20in%20Datathon_2026.pdf",
    fileType: "pdf",
    summary: "Built predictive analytics models with advanced feature engineering under competitive time constraints.",
    description: "Participated in Datathon 2026 with Team NeuralEd, conducting exploratory data analysis, hypothesis testing, and machine learning pipeline tuning on high-dimensional datasets.",
    date: "2026"
  },
  {
    id: "ev-adobe-hackathon",
    number: "06",
    title: "Adobe University Hackathon",
    category: "University Hackathon",
    organizer: "Adobe",
    year: "",
    statusBadge: "Participant",
    file: "./events/ADOBE%20HACKATHONE%20PARTICIPATION.pdf",
    fileType: "pdf",
    summary: "Prototyped digital creativity, document interaction paradigms, and smart automated workflows.",
    description: "Participated in Adobe University Hackathon exploring digital creativity, document intelligence, and intuitive UI interactions.",
    date: "Verified"
  },
  {
    id: "ev-inceptia-hackathon",
    number: "07",
    title: "Inceptia Hackathon",
    category: "Presentation Submission Round",
    organizer: "Pimpri Chinchwad College Of Engineering & Research (PCCOE&R)",
    year: "",
    statusBadge: "Participant",
    file: "./events/INCEPTIA%20HACKTHONE%20PARTICIPATION.pdf",
    fileType: "pdf",
    summary: "Designed rapid full-stack solutions focusing on user ergonomics, responsive UI, and backend reliability.",
    description: "Participated in Presentation Submission Round of Inceptia Hackathon organized by PCCOE&R, Pimpri-Chinchwad, Pune.",
    date: "Verified"
  },
  {
    id: "ev-valora-hackathon",
    number: "08",
    title: "Velora-1.0 Hackathon 2026",
    category: "Hackathon Sprint",
    organizer: "Velora Consortium",
    year: "2026",
    statusBadge: "Participant",
    file: "./events/PARTICIPATION%20IN%20VALORA%20HACKATHONE.pdf",
    fileType: "pdf",
    summary: "Engineered fintech and distributed systems solutions under competitive sprint conditions.",
    description: "Active involvement and successful participation in Velora-1.0 Hackathon 2026, designing distributed software prototypes.",
    date: "2026"
  },
  {
    id: "ev-gta-megajam",
    number: "09",
    title: "GTA MegaJam",
    category: "National Game Jam",
    organizer: "National Institute of Technology (NIT), Rourkela",
    year: "",
    statusBadge: "Game Jam Developer",
    file: "./events/Certificate%20of%20Participation%20in%20GTA%20MegaJam.pdf",
    fileType: "pdf",
    summary: "Continuous game jam scripting custom player controls, collision bounds, and camera physics.",
    description: "Participated in GTA MegaJam organized by NIT Rourkela, programming playable game prototypes, movement mechanics, and physics systems.",
    date: "Verified"
  },
  {
    id: "ev-geforce-day",
    number: "10",
    title: "GeForce Day 26",
    category: "Technical Forum",
    organizer: "NVIDIA GeForce Community",
    year: "2026",
    statusBadge: "Participant",
    file: "./events/GeForce%20Day%2026%20Participation%20Certificate.png",
    fileType: "image",
    summary: "Engaged in specialized sessions on GPU compute architectures, real-time ray-tracing, and neural rendering.",
    description: "Attended NVIDIA GeForce Day 26 technical track covering real-time ray-tracing acceleration, GPU shaders, and graphics pipelines.",
    date: "2026"
  },
  {
    id: "ev-samsung-learn",
    number: "11",
    title: "Learn @ Samsung",
    category: "Industry Technical Program",
    organizer: "Samsung",
    year: "",
    statusBadge: "Graduate",
    file: "./events/learn@SAMSANG.jpg",
    fileType: "image",
    summary: "Completed Samsung technical learning sessions on connected software ecosystems and smart devices.",
    description: "Completed Samsung technical curriculum on mobile architectures, smart device integration, and modern connected software ecosystems.",
    date: "Verified"
  },
  {
    id: "ev-infinity-canvas",
    number: "12",
    title: "Infinity Canvas",
    category: "Creative Technology",
    organizer: "Infinity Canvas Showcase",
    year: "",
    statusBadge: "Creative Technologist",
    file: "./events/infinity%20canvas.png",
    fileType: "image",
    summary: "Explored infinite 2D/3D zoomable canvas paradigms and generative computer graphics interfaces.",
    description: "Participated in Infinity Canvas creative showcase exploring infinite coordinate plane rendering and generative UI paradigms.",
    date: "Verified"
  }
];

// Certifications: Strictly using files from the cer/ folder (22 items)
export const CERTIFICATES = [
  {
    id: "cer-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/claude%20101.pdf",
    type: "pdf",
    description: "Foundational mastery in prompt engineering, context window management, and conversational system architecture."
  },
  {
    id: "cer-intro-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/Introduction_to_Modern_AI_certificate_sushrutkale13-gmail-com_69f1f815-d791-4fea-ae77-b193fa918780%20(1).pdf",
    type: "pdf",
    description: "Overview of neural networks, deep learning principles, transformer models, and real-world ethical deployment."
  },
  {
    id: "cer-apply-ai",
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco Networking Academy",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/Apply_AI-_Analyze_Customer_Reviews_certificate_sushrutkale13-gmail-com_0e004c69-6e6b-446d-a464-b305ce3a1a42%20(1).pdf",
    type: "pdf",
    description: "Natural Language Processing (NLP) workflows, sentiment analysis, text embeddings, and customer insight extraction."
  },
  {
    id: "cer-applied-ml",
    title: "Foundational Course on Applied ML & AI",
    issuer: "FutureSkills Prime / NASSCOM",
    category: "AI & Machine Learning",
    date: "2025",
    file: "./cer/Foundational%20Course%20on%20Applied%20Machine%20Learning%20and%20AI.png",
    type: "image",
    description: "Comprehensive fundamentals of supervised and unsupervised machine learning algorithms, cross-validation, and metrics."
  },
  {
    id: "cer-ai-fluency-fw",
    title: "AI Fluency Framework & Foundation",
    issuer: "AI Educational Alliance",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/Al%20Fluency%20Framework%20&%20Foundation.pdf",
    type: "pdf",
    description: "Systematic conceptual framework for assessing AI capabilities, safety boundaries, and organizational readiness."
  },
  {
    id: "cer-ai-fluency-students",
    title: "AI Fluency for Students",
    issuer: "AI Educational Alliance",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/AI%20Fluency%20for%20students.pdf",
    type: "pdf",
    description: "Applied generative AI workflows, research synthesis, and academic problem solving."
  },
  {
    id: "cer-ai-fluency-nonprofits",
    title: "AI Fluency for Nonprofits",
    issuer: "AI Educational Alliance",
    category: "AI & Machine Learning",
    date: "2026",
    file: "./cer/AI%20Fluency%20for%20nonprofits.pdf",
    type: "pdf",
    description: "Deploying low-cost AI tooling for social impact initiatives and community resource planning."
  },
  {
    id: "cer-ai-beginners",
    title: "AI for Beginners",
    issuer: "HP LIFE / Global Learning",
    category: "AI & Machine Learning",
    date: "2025",
    file: "./cer/AI%20for%20Beginners%20%20.png",
    type: "image",
    description: "Core paradigms of automated intelligence, pattern recognition, and computer perception."
  },
  {
    id: "cer-ai-business",
    title: "AI for Business Professionals",
    issuer: "HP LIFE / Global Learning",
    category: "AI & Machine Learning",
    date: "2025",
    file: "./cer/AI%20for%20Business%20Professionals.png",
    type: "image",
    description: "Strategic ROI assessment and automated workflow integration for business processes."
  },
  {
    id: "cer-critical-thinking-ai",
    title: "Critical Thinking in the AI Era",
    issuer: "HP LIFE",
    category: "AI & Machine Learning",
    date: "2025",
    file: "./cer/Critical%20Thinking%20in%20theAI%20Era.png",
    type: "image",
    description: "Evaluating model hallucination, algorithmic bias, verification protocols, and logical deduction."
  },
  {
    id: "cer-python-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy / OpenEDG",
    category: "Programming",
    date: "2025",
    file: "./cer/Python_Essentials_1_certificate_sushrutkale13-gmail-com_306b0342-b4b3-4c59-91a2-8eb7266d4f6d.pdf",
    type: "pdf",
    description: "Syntax, data types, control flow, functions, collections, and foundational Python algorithms."
  },
  {
    id: "cer-python-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy / OpenEDG",
    category: "Programming",
    date: "2025",
    file: "./cer/Python_Essentials_2_certificate_sushrutkale13-gmail-com_ec31e3e5-1bc7-4bc1-a706-fc268af6bb67.pdf",
    type: "pdf",
    description: "Object-oriented design, exceptions, file I/O, generators, closures, and standard library modules."
  },
  {
    id: "cer-js-1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy / OpenEDG",
    category: "Programming",
    date: "2025",
    file: "./cer/JavaScript_Essentials_1_certificate_sushrutkale13-gmail-com_bc924ab6-1871-4feb-91af-33f3781bc176.pdf",
    type: "pdf",
    description: "Modern ECMAScript fundamentals, variables, operators, conditional branching, and loops."
  },
  {
    id: "cer-js-2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy / OpenEDG",
    category: "Programming",
    date: "2025",
    file: "./cer/JavaScript_Essentials_2_certificate_sushrutkale13-gmail-com_21af82b0-91aa-4cba-b462-1ed7cc2e3f9e.pdf",
    type: "pdf",
    description: "Advanced OOP in JavaScript, prototypical inheritance, async promises, closures, and DOM patterns."
  },
  {
    id: "cer-js-fund",
    title: "JavaScript Fundamentals",
    issuer: "Educational Institution",
    category: "Programming",
    date: "2025",
    file: "./cer/JavaScript%20fundamentals.pdf",
    type: "pdf",
    description: "Event-driven programming, functional paradigms, and browser runtime execution models."
  },
  {
    id: "cer-data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data & Cloud",
    date: "2025",
    file: "./cer/Data_Analytics_Essentials_certificate_sushrutkale13-gmail-com_6abcebe5-ff62-4e86-9424-bc52d704b4dc%20(1).pdf",
    type: "pdf",
    description: "Data cleansing, exploratory analysis, descriptive statistics, and business intelligence reporting."
  },
  {
    id: "cer-oracle-sql",
    title: "Oracle SQL Fundamentals",
    issuer: "Oracle Academy",
    category: "Data & Cloud",
    date: "2025",
    file: "./cer/Oracle%20sql.png",
    type: "image",
    description: "Relational database schema modeling, complex joins, subqueries, aggregations, and DDL/DML execution."
  },
  {
    id: "cer-aws-dc",
    title: "AWS Academy Data Center Technician Course",
    issuer: "Amazon Web Services (AWS) Academy",
    category: "Data & Cloud",
    date: "2025",
    file: "./cer/AWS%20Academy%20Data%20Center%20Technician%20course..png",
    type: "image",
    description: "Cloud physical infrastructure, rack architectures, networking topologies, and power/cooling redundancies."
  },
  {
    id: "cer-futureskills",
    title: "FutureSkills Prime Government Certification",
    issuer: "NASSCOM & MeitY (Govt of India)",
    category: "Data & Cloud",
    date: "2025",
    file: "./cer/FutureSkills%20Prime.pdf",
    type: "pdf",
    description: "National digital skilling program credential certifying industry readiness in emerging technologies."
  },
  {
    id: "cer-cybersecurity",
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE",
    category: "Professional & Security",
    date: "2025",
    file: "./cer/Introduction%20to%20CybersecurityAwareness.png",
    type: "image",
    description: "Threat vectors, social engineering prevention, cryptography basics, and identity protection."
  },
  {
    id: "cer-career",
    title: "Career Management Essentials",
    issuer: "HP LIFE",
    category: "Professional & Security",
    date: "2025",
    file: "./cer/Career%20Management%20Essentials.png",
    type: "image",
    description: "Professional roadmapping, project leadership, and continuous skill adaptation strategies."
  },
  {
    id: "cer-networking",
    title: "Professional Networking for Career Growth",
    issuer: "HP LIFE",
    category: "Professional & Security",
    date: "2025",
    file: "./cer/Professional%20Networking%20for%20Career%20Growth.png",
    type: "image",
    description: "Building engineering relationships, open-source community engagement, and industry communication."
  }
];
