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
    title: "MealCreator Website",
    description: "Full-stack web application for meal planning and recipe management. Built with Express server, MongoDB database, and server-side rendering using EJS.",
    longDescription: "A comprehensive meal planning platform that helps users create, organize, and share recipes. Features include user authentication, recipe search, meal scheduling, and shopping list generation.",
    technologies: ["Express", "MongoDB", "EJS", "Node.js", "JavaScript"],
    image: "/images/mealcreator.png",
    video: "/vidoes/mealcreator.mp4",
    liveUrl: "https://mealcreator.onrender.com/",
    githubUrl: "https://github.com/NatanelRichey/MealCreator",
    status: "In Development",
    highlights: [
      "Server-side rendering with EJS templates",
      "User authentication and authorization",
      "RESTful API design",
      "MongoDB data modeling",
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
    description: "Custom AI chatbot fine-tuned for therapeutic conversations and mental health support. Currently in development.",
    longDescription: "An AI-powered therapeutic chatbot built by fine-tuning large language models on mental health data. Designed to provide empathetic, supportive conversations while maintaining ethical guidelines.",
    technologies: ["Python", "AI Model Training", "Fine-tuning", "NLP"],
    image: "/images/therabot.avif",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    githubUrl: "https://github.com/yourusername/therabot",
    status: "In Development",
    highlights: [
      "Custom model fine-tuning techniques",
      "Therapeutic conversation design",
      "Ethical AI implementation",
      "Performance optimization",
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
      "Cutting-edge web technologies",
      "Smooth animations and interactions",
      "Responsive design",
      "Performance-optimized",
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

