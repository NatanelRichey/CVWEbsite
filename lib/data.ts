// ==============================================
// CV DATA - Update this file with your information
// ==============================================
// This approach separates content from code, making updates easy

export const personalInfo = {
  name: "Natanel Richey",
  title: "Full-Stack Developer | AI Enthusiast",
  location: "Remote - Global",
  email: "natanelrichey@gmail.com",
  phone: "+972 584171094",
  bio: "Passionate developer with expertise in building modern web applications and integrating AI solutions. Currently exploring cutting-edge technologies and building innovative projects.",
  // Add your professional photo here later
  profileImage: "/images/profile.jpeg",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/natanelrichey/",
  github: "https://github.com/NatanelRichey",
  // Add more social links as needed
  twitter: "",
  portfolio: "",
};

// Work experience in reverse chronological order (most recent first)
export const experience = [
  {
    id: 1,
    company: "Company Name",
    position: "Position Title",
    location: "City, Country",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Key responsibility or achievement",
      "Another important contribution",
      "Technical skills or tools used",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    company: "Previous Company",
    position: "Previous Position",
    location: "City, Country",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: [
      "Main achievements in this role",
      "Projects delivered or impact made",
    ],
    technologies: ["Express", "PostgreSQL", "AWS"],
  },
  // Add more experiences as needed
];

// Education background
export const education = [
  {
    id: 1,
    institution: "Hebrew University of Jerusalem",
    degree: "BSc. in Computer Science and Psychology",
    location: "Jerusalem, Israel",
    startDate: "2018",
    endDate: "2022",
    description: "Relevant coursework, honors, or achievements",
  },
  // Add more education entries
];

// Skills organized by category
export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  tools: ["Git", "Docker", "VS Code", "Postman"],
  aiml: ["OpenAI API", "Model Fine-tuning", "Sentiment Analysis", "LangChain"],
  other: ["Agile", "System Design", "CI/CD"],
};

// Portfolio projects - Your showcase pieces!
export const projects = [
  {
    id: 1,
    title: "MealCreator",
    description: "A full-stack Progressive Web Application for meal planning and pantry management built with Next.js 14, TypeScript, MongoDB, and React Query, featuring real-time data synchronization and optimized performance.",
    longDescription: "A full-stack Progressive Web Application for meal planning and pantry management built with Next.js 14, TypeScript, MongoDB, and React Query. Features include real-time data synchronization, PWA with offline support, secure Cloudinary image uploads with automatic optimization, intelligent caching, optimistic UI updates, and a responsive design system deployed on Vercel.",
    technologies: ["Next.js 14", "TypeScript", "MongoDB", "React Query", "Cloudinary", "Vercel", "PWA"],
    image: "/images/mealcreator.png",
    video: "/vidoes/mealcreator.mp4",
    liveUrl: "https://meal-creator-delta.vercel.app/",
    githubUrl: "https://github.com/NatanelRichey/MealCreator",
    highlights: [
      "TanStack Query (React Query) with optimistic updates and intelligent cache invalidation, reducing API calls by 80%+",
      "End-to-end TypeScript implementation with strict typing across Next.js components, API routes, and Mongoose schemas",
      "Progressive Web App (PWA) with offline support and Cloudinary image optimization",
      "RESTful backend API using Next.js API Routes with MongoDB connection pooling and serverless deployment on Vercel",
    ],
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "WhatsApp Crawler with AI Sentiment Analysis",
    description: "Automated WhatsApp data collection tool with integrated API-based AI sentiment analysis to extract insights from conversations.",
    longDescription: "A powerful crawler application that extracts WhatsApp message data and performs real-time sentiment analysis using AI APIs. Provides visualizations and insights about conversation patterns and emotional trends.",
    technologies: ["Node.js", "OpenAI API", "Web Scraping", "Data Analysis"],
    image: "/images/whatsapp-crawler.png",
    video: "/vidoes/whatsapp-crawler.mp4",
    githubUrl: "https://github.com/NatanelRichey/NeedleWhatsappCrawler",
    highlights: [
      "Automated data collection from WhatsApp",
      "Integration with AI sentiment analysis APIs",
      "Data visualization and reporting",
      "Privacy-focused architecture",
    ],
    category: "AI/Data",
  },
  {
    id: 3,
    title: "TheraBot - Fine-tuned AI Model",
    description: "Fine-tuned Llama 3.2 3B using HuggingFace Transformers with LoRA on therapy conversation datasets. Enhanced with RAG retrieval and deployed on HuggingFace Spaces and Google Colab.",
    longDescription: "Fine-tuned Llama 3.2 3B using HuggingFace Transformers with LoRA on therapy conversation datasets, implementing progressive multi-length training, gradient accumulation, and Weights & Biases tracking. Enhanced responses via RAG retrieval (FAISS + E5 embeddings) over the DBT manual. Deployed on HuggingFace Spaces and Google Colab with GPU support.",
    technologies: ["Python", "AI Model Training", "LoRA Fine-tuning", "NLP", "RAG implementation"],
    image: "/images/therabot.avif",
    githubUrl: "https://github.com/NatanelRichey/therabot",
    status: "Demo Available on Request",
    highlights: [
      "LoRA fine-tuning on Llama 3.2 3B",
      "RAG implementation using FAISS vector store with E5 embeddings",
      "Weights & Biases experiment tracking and model monitoring",
      "Deployment on HuggingFace Spaces and Google Colab with GPU acceleration",
    ],
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Interactive CV Website",
    description: "This website! A modern, animated CV built with Next.js, TypeScript, and Framer Motion to showcase development skills.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/cv-website.png",
    video: "/vidoes/cv-website.mp4",
    liveUrl: "https://your-cv-url.com",
    githubUrl: "https://github.com/yourusername/cv-website",
    highlights: [
      "Framer Motion with Intersection Observer API (useInView) for scroll-triggered animations and custom easing functions",
      "Next.js 14 App Router with Server Components and optimized font loading (display: swap, preload)",
      "TypeScript end-to-end type safety across components, props, and custom hooks with strict mode",
      "Reusable ScrollReveal component with directional animations (up/down/left/right) and staggered delays",
      "Theme system with localStorage persistence and smooth CSS transitions for dark/light mode",
    ],
    category: "Frontend",
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

