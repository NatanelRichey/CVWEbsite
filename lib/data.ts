// ==============================================
// CV DATA - Update this file with your information
// ==============================================
// This approach separates content from code, making updates easy

export const personalInfo = {
  name: "Natanel Richey",
  title: "AI/ML Developer | Full-Stack Developer",
  location: "",
  email: "natanaelrichey.work@gmail.com",
  phone: "0584171094",
  bio: "Software-developer skilled in Python and JavaScript focused on Applied Machine Learning and Web/App Design. Experience in training AI models, building full-stack websites, data analysis (AI enhanced). Methodical and analytical, hard-working and efficient, fast-learning, hungry for excellence and passionate about bridging the gap between human and machine intelligence.",
  // Add your professional photo here later
  profileImage: "/images/profile.jpeg",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/natanelrichey/",
  github: "https://github.com/NatanelRichey",
  // Add more social links as needed
  twitter: "",
  portfolio: "",
  company: "https://evenpinah.services/",
};

// Work experience in reverse chronological order (most recent first)
export const experience = [
  {
    id: 1,
    company: "BabyClue",
    position: "Machine Learning Engineer",
    location: "",
    startDate: "Nov 2025",
    endDate: "Present",
    description: [
      "Built and evaluated a multi-class infant-cry classification pipeline, focusing on robust validation, interpretability, and reproducibility.",
      "Developed end-to-end ML evaluation workflows in Python",
      "Ran rigorous, comparative model testing using nested CV with fold-level and aggregated analysis (macro/micro F1, per-class precision/recall/F1, confusion matrices, latency) to reliably determine which approaches generalized best across splits",
      "Built the full training pipeline combining audio preprocessing (spectrogram-based features / AST embeddings), data augmentation, feature construction (late-fusion of embedding + acoustic features), and model training/inference across multiple model families (e.g., MLP, LightGBM, plus classical baselines like SVM/Nearest Centroid where applicable)",
      "Engineered prompt variants for LLM classification (Chain-of-Thought, Tree-of-Thought variants), systematically compared API responses across providers, evaluating reasoning quality, and refining prompt structure and routing logic to reduce token costs while refining performance",
    ],
    technologies: ["Python", "Machine Learning", "Data-Centric AI", "Hyperparameter Optimization", "Prompt Engineering"],
  },
  {
    id: 2,
    company: "Even Pinah Services",
    position: "Founder",
    location: "Jerusalem, Israel",
    startDate: "June 2025",
    endDate: "Present",
    description: [
      "Founded and lead a company specializing in curing operational chaos for small businesses through personalized technical solutions.",
      "Design and implement website automation, integration, and workflow optimization tools that eliminate wasted effort and replace scattered workflows with unified operating systems.",
      "Bridge the gap between business needs and cutting-edge technology, specializing in Web/App Development and Applied Machine Learning.",
      "Create tailored technical solutions that fit naturally into client workflows, focusing on efficiency, automation, and organization.",
      "Work directly with clients to understand their unique business processes and deliver solutions that bring measurable success.",
    ],
    technologies: ["Web Development", "App Development", "Automation", "Integration", "Machine Learning", "Workflow Optimization", "Business Strategy"],
    companyUrl: "https://evenpinah.services/",
  },
  // Add more experiences as needed
];

// Education background
export const education = [
  {
    id: 1,
    institution: "Hebrew University of Jerusalem",
    degree: "BSc. in Computer Science, B.A. in Psychology (Hons.)",
    location: "Jerusalem, Israel",
    startDate: "2021",
    endDate: "2025",
    languages: ["Python", "C", "C++", "Java"],
    skills: ["NLP and Machine Learning", "OOP", "Operating Systems", "Algorithms and Data Structures", "Statistics and Computational Methods", "Data Science"],
  },
  // Add more education entries
];

// Skills organized by category
export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Java"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "React Query"],
  tools: ["Cursor + CLI, MCP, skills.md", "Git", "Docker", "Postman", "Cloudinary", "Vercel"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "HuggingFace Transformers", "LoRA Fine-tuning", "Hyperparameter Tuning", "RAG implementation", "Model APIs", "NLP", "LangChain", "Sentiment Analysis"],
  other: ["OOP", "Operating Systems", "Algorithms and Data Structures", "Statistics and Computational Methods", "Data Science", "PWA", "Web Scraping"],
};

// Portfolio projects - Your showcase pieces!
// Order matters for CSS columns layout: items flow top-to-bottom in column 1, then column 2
export const projects = [
  {
    id: 1,
    title: "TheraBot - Fine-tuned AI Model",
    description: "Fine-tuned Llama model using HuggingFace Transformers with LoRA ranking on therapy conversation datasets.",
    longDescription: "Fine-tuned Llama model using HuggingFace Transformers with LoRA ranking on therapy conversation datasets.",
    technologies: ["Python", "AI Model Training", "LoRA Fine-tuning", "NLP", "RAG implementation"],
    image: "/images/therabot.avif",
    githubUrl: "https://github.com/NatanelRichey/therabot",
    status: "Demo Available on Request",
    highlights: [
      "RAG implementation using FAISS vector store with E5 embeddings",
      "Weights & Biases experiment tracking and model monitoring",
      "Deployment on HuggingFace Spaces and Google Colab with GPU acceleration",
    ],
    category: "AI/ML",
  },
  {
    id: 3,
    title: "WhatsApp Crawler with AI Sentiment Analysis",
    description: "Automated WhatsApp data collection tool with integrated API-based AI sentiment analysis to extract insights from conversations.",
    longDescription: "A powerful crawler application that extracts WhatsApp message data and performs real-time sentiment analysis using AI APIs. Provides visualizations and insights about conversation patterns and emotional trends.",
    technologies: ["Node.js", "OpenAI API", "Web Scraping", "Data Analysis"],
    image: "/images/whatsapp-crawler.png",
    video: "/vidoes/whatsapp-crawler.mp4",
    githubUrl: "https://github.com/NatanelRichey/NeedleWhatsappCrawler",
    highlights: [
      "Automated data collection from WhatsApp. Integration with AI sentiment analysis APIs",
      "Data visualization and reporting. Privacy-focused architecture",
    ],
    category: "AI/Data",
  },
  {
    id: 2,
    title: "ShadchanitDB - AI-Powered Matchmaking Platform",
    description: "A comprehensive full-stack matchmaking database system with AI-powered data extraction, WhatsApp integration, and intelligent matching algorithms.",
    longDescription: "A production-grade matchmaking platform that streamlines the traditional shidduch process through automated data extraction, intelligent matching algorithms, and seamless WhatsApp integration. Built with modern web technologies and enterprise-level security practices.",
    technologies: ["Next.js", "TypeScript", "React", "MongoDB", "Mongoose", "Twilio WhatsApp API", "Google Gemini AI", "Cloudinary", "bcrypt", "Tesseract.js", "Tailwind CSS", "Vercel"],
    image: "/images/shadchan-DB.png",
    video: "/vidoes/shadchan-DB.mp4",
    githubUrl: "https://github.com/NatanelRichey/ShadchanitDB",
    status: "Live Production System",
    highlights: [
      "AI-powered resume processing using Google Gemini Vision API with multi-language OCR, extracting structured data from Hebrew/English resumes with confidence scoring and visual verification, reducing manual data entry by 95%+",
      "WhatsApp Business API integration via Twilio enabling seamless profile submission workflow - users send resume images via WhatsApp, system processes and extracts data automatically, with session management and cost tracking",
      "Sophisticated matching algorithm evaluating 7+ compatibility factors (age gap, location, ethnicity, religious affiliation, learning status, head covering preferences) with intelligent location mapping supporting cross-country matching based on relocation preferences",
      "Enterprise-grade security architecture: bcrypt password hashing, MongoDB-based rate limiting (configurable per-endpoint), session-based authentication with secure cookie management, token-based external form access, and comprehensive API authentication middleware",
      "Full-stack TypeScript implementation across Next.js 16 App Router, React 19 components with Context API, MongoDB schemas with Mongoose, and RESTful API routes with server actions, ensuring type safety end-to-end",
      "Production-ready features: Cloudinary image management with automatic cleanup, real-time analytics dashboard, pending client workflow with approval system, advanced search with multi-criteria filtering, and responsive PWA-ready UI"
    ],
    category: "Full-Stack",
  },
];

// Filter categories for portfolio
export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend",
  "AI/ML",
  "AI/Data",
];

