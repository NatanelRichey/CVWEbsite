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
};

// Work experience in reverse chronological order (most recent first)
export const experience = [
  {
    id: 1,
    company: "BabyClue",
    position: "Machine Learning Engineer",
    location: "Part-time",
    startDate: "Nov 2025",
    endDate: "Present",
    description: [
      "Built and evaluated a multi-class infant-cry classification pipeline, focusing on robust validation, interpretability, and reproducibility.",
      "Developed end-to-end ML evaluation workflows in Python",
      "Ran rigorous, comparative model testing using nested CV with fold-level and aggregated analysis (macro/micro F1, per-class precision/recall/F1, confusion matrices, latency) to reliably determine which approaches generalized best across splits",
      "Built the full training pipeline combining audio preprocessing (spectrogram-based features / AST embeddings), data augmentation, feature construction (late-fusion of embedding + acoustic features), and model training/inference across multiple model families (e.g., MLP, LightGBM, plus classical baselines like SVM/Nearest Centroid where applicable)",
    ],
    technologies: ["Python", "Machine Learning", "Data-Centric AI", "Hyperparameter Optimization"],
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
    id: 2,
    title: "MealCreator - Full-Stack React Website",
    description: "A full-stack Progressive Website for meal planning and pantry management.",
    longDescription: "A full-stack Progressive Website for meal planning and pantry management.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "React Query", "Cloudinary", "Vercel", "PWA"],
    image: "/images/mealcreator.png",
    video: "/vidoes/mealcreator.mp4",
    githubUrl: "https://github.com/NatanelRichey/MealCreator",
    status: "Demo Available on Request",
    highlights: [
      "Real time data sync using React Query with optimistic updates and intelligent cache invalidation, reducing API calls by 80%+",
      "TypeScript implementation across Next.js components, RESTful backend API, MongoDB and Mongoose schemas",
    ],
    category: "Full-Stack",
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
];

// Filter categories for portfolio
export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend",
  "AI/ML",
  "AI/Data",
];

