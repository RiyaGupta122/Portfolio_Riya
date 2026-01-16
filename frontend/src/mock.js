// Mock data for Riya Gupta's Portfolio

export const personalInfo = {
  name: "Riya Gupta",
  headline: "AI/ML | Data Science | Product & Business Analytics",
  intro: "I build AI-driven solutions and data products that solve real-world business problems using machine learning, analytics, and product thinking.",
  profileImage: "https://customer-assets.emergentagent.com/job_riya-ai-portfolio/artifacts/3tdb35lm_WhatsApp%20Image%202025-11-11%20at%2011.59.45_f812605e.jpg",
  links: {
    linkedin: "https://linkedin.com/in/riyagupta2409722",
    github: "https://github.com/RiyaGupta122",
    email: "riyagupta.24022@gmail.com",
    phone: "+91 6305376423"
  }
};

export const about = {
  description: "I'm a passionate AI/ML engineer and data scientist with a strong foundation in building real-world machine learning systems that drive business impact. With expertise spanning deep learning, NLP, computer vision, and advanced analytics, I bridge the gap between cutting-edge AI research and practical business solutions. My experience includes developing production-ready ML models, designing data pipelines, and creating interactive dashboards that empower stakeholders to make data-driven decisions. I combine technical depth with product thinking and business acumen, enabling me to understand not just how to build solutions, but why they matter. Whether it's optimizing neural networks for edge deployment, engineering RAG systems for enterprise applications, or translating complex technical concepts for non-technical audiences, I thrive at the intersection of technology and business impact."
};

export const skills = {
  technical: [
    { name: "Python", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "LangChain", category: "GenAI & LLMs" },
    { name: "RAG", category: "GenAI & LLMs" },
    { name: "Prompt Engineering", category: "GenAI & LLMs" },
    { name: "OpenAI API", category: "GenAI & LLMs" },
    { name: "Machine Learning", category: "ML & NLP" },
    { name: "Deep Learning", category: "ML & NLP" },
    { name: "NLP", category: "ML & NLP" },
    { name: "Computer Vision", category: "ML & NLP" }
  ],
  tools: [
    "TensorFlow", "PyTorch", "Scikit-learn", "FastAPI", "Flask", 
    "ReactJS", "Streamlit", "Power BI", "SQL", "MongoDB", 
    "Pandas", "NumPy", "Git & GitHub", "Figma"
  ],
  business: [
    "Product Thinking",
    "Business Analysis",
    "Project Management",
    "Communication",
    "Stakeholder Collaboration"
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered College Query Chatbot (RAG-based)",
    description: "LLM-driven chatbot answering academic/administrative queries with 95% accuracy using OpenAI embeddings for semantic search, reducing manual query workload by 60%.",
    techStack: ["Python", "LangChain", "OpenAI", "RAG", "Streamlit"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006"
  },
  {
    id: 2,
    title: "Railway Reservation System",
    description: "Backend reservation system handling 500+ daily transactions with 99.99% uptime, supporting 100+ concurrent users with optimized SQL schemas and secure data handling.",
    techStack: ["Java", "JDBC", "SQL", "OOP"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.unsplash.com/photo-1572241742158-620902dc6234?q=80&w=2070"
  },
  {
    id: 3,
    title: "Anti-Face Spoofing Detection",
    description: "Adversarial face-spoof detection using DCGANs and fine-tuned EfficientNet-B0, achieving 94% accuracy and improving robustness against presentation attacks by 25%.",
    techStack: ["TensorFlow", "DCGANs", "EfficientNet", "Computer Vision"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.pexels.com/photos/8090298/pexels-photo-8090298.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 4,
    title: "Resume Compatibility Analysis",
    description: "Processed 1,000+ resumes using NLP pipelines (TF-IDF, Cosine Similarity) with Streamlit dashboard achieving 92% accuracy, reducing screening time by 60%.",
    techStack: ["Python", "NLP", "TF-IDF", "Streamlit"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?q=80&w=2070"
  },
  {
    id: 5,
    title: "Skin Cancer Detection using AI",
    description: "Deep learning classifier for dermatological diagnosis using MobileNetV2 with Grad-CAM for model interpretability, achieving high accuracy in medical image analysis.",
    techStack: ["Deep Learning", "MobileNetV2", "Grad-CAM", "Medical AI"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.unsplash.com/photo-1541752857837-f8a0154fd092?q=80&w=2070"
  },
  {
    id: 6,
    title: "Power BI Analytics Dashboard",
    description: "Interactive business intelligence dashboard visualizing KPIs and performance trends to support data-driven decision-making with automated data pipelines.",
    techStack: ["Power BI", "Data Visualization", "Analytics", "SQL"],
    github: "https://github.com/RiyaGupta122",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
  }
];

export const experience = [
  {
    id: 1,
    role: "Marketing Management Intern",
    company: "Bitbig Pvt Ltd",
    duration: "2023 - 2024",
    description: "Contributed to industry-level projects demonstrating applied ML and analytics capabilities. Worked on data-driven marketing strategies and customer behavior analysis.",
    highlights: [
      "Applied ML models for customer segmentation",
      "Developed analytics dashboards for campaign performance",
      "Collaborated with cross-functional teams on data products"
    ]
  }
];

export const education = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  institution: "Symbiosis Institute of Technology, Pune",
  year: "2022 - 2026",
  certifications: [
    {
      name: "LLM Engineering: Master AI, Large Language Models & Agents",
      issuer: "Udemy",
      year: "2024"
    },
    {
      name: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
      issuer: "Udemy",
      year: "2024"
    }
  ]
};