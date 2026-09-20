// Personal profile information used across the hero, contact, footer, and resume links.
export const profile = {
  name: 'Sumit Kumar Gupta',
 // initials: 'SKG',
  role: 'Computer Science Student',
  
  email: 'rum2425619@ramauniversity.ac.in',
  phone: '+917607096369',
  location: 'Kanpur, India',
  github: 'https://github.com/rum2425_6',
  linkedin: 'https://www.linkedin.com/in/sumit-kumar-gupta-b1232b316',
  resume: '/Sumit-Kumar-Gupta-Resume.pdf',
  summary:
    'Computer Science student passionate about building practical web applications and AI-powered solutions. Experienced in developing full-stack and AI projects through hands-on work. Quick learner who enjoys solving real-world problems and creating clean, user-focused applications.',
}

// Academic background displayed by the portfolio's education-related content.
export const education = [
  {
    school: 'Rama University',
    location: 'Kanpur, India',
    degree: 'Bachelor of Technology (Computer Science & Engineering)',
    year: 'Aug 2024 – Pursuing',
  },
  {
    school: 'K.R. Education Centre',
    location: 'Kanpur, India',
    degree: 'Senior Secondary (CBSE)',
    year: '2022 – 2024',
  },
  {
    school: 'Ambition Convent School',
    location: 'Ballia, India',
    degree: 'Secondary (CBSE)',
    year: '2020 – 2022',
  },
]

// Technical skills grouped by category for the Skills section.
export const skills = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 72 },
      { name: 'SQL', level: 74 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 84 },
      { name: 'Tailwind CSS', level: 86 },
      { name: 'Bootstrap', level: 82 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 76 },
    ],
  },
  {
    title: 'Database & Tools',
    items: [
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 72 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'Docker', level: 60 },
    ],
  },
  {
    title: 'Platforms',
    items: [
      { name: 'Windows', level: 90 },
      { name: 'Vercel', level: 75 },
      { name: 'Netlify', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Problem Solving', level: 85 },
      { name: 'Teamwork', level: 85 },
      { name: 'Communication', level: 80 },
      { name: 'Quick Learner', level: 90 },
      { name: 'Time Management', level: 80 },
    ],
  },
]

// Professional experience displayed in the Experience section.
export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'RCS Global Limited',
    duration: 'Aug 2025 – Jan 2026',
    type: 'Internship',
    points: [
      'Developed a Recruitment Management System during my internship to streamline recruitment-related processes.',
      'Built the frontend using HTML, CSS, Bootstrap, and JavaScript, with a Java backend and MySQL database.',
      'Worked on developing user-friendly interfaces and database-driven recruitment workflows.',
      'Tech stack: HTML, CSS, Bootstrap, JavaScript, Java, MySQL.',
    ],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Java', 'MySQL'],
  },
]

// Public GitHub projects displayed as cards in the Projects section.
export const projects = [
  {
    title: 'my-rag-system',
    image: 'https://placehold.co/900x600/080720/22d3ee?text=My+RAG+System',
    description:
      'A Retrieval-Augmented Generation application for uploading PDF documents, asking questions, and generating AI study material grounded in the uploaded documents.',
    tech: ['React', 'Vite', 'FastAPI', 'FAISS', 'Google Gemini'],
    features: [
      'Multi-PDF upload and semantic search',
      'Document-grounded Q&A',
      'AI study mode',
    ],
    github: 'https://github.com/rum2425-6/my-rag-system',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'ai-face-detector',
    image: 'https://placehold.co/900x600/080720/22d3ee?text=AI+Face+Detector',
    description:
      'Built an AI-powered face detection and recognition system with real-time camera support and known-person management.',
    tech: ['FastAPI', 'YOLOv8', 'FaceNet', 'SQLite', 'React', 'Vite', 'Tailwind CSS'],
    features: [
      'Detection overlays and recognition results',
      'Multi-photo enrollment',
      'Analytics and history',
    ],
    github: 'https://github.com/rum2425-6/ai-face-detector',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'AI-Face-Matcher',
    image: 'https://placehold.co/900x600/080720/a855f7?text=AI+Face+Matcher',
    description:
      'AI-powered face matching system that finds matching photos from Google Drive using face embeddings and indexed search.',
    tech: ['JavaScript', 'Python'],
    features: ['Google Drive photo matching', 'Face embeddings', 'Indexed search'],
    github: 'https://github.com/rum2425-6/AI-Face-Matcher',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'dev-portfolio',
    image: 'https://placehold.co/900x600/080720/6366f1?text=Dev+Portfolio',
    description:
      'Developed a responsive personal portfolio using React and Vite to showcase projects, technical skills, and developer profile.',
    tech: ['React', 'Vite'],
    features: [
      'Responsive desktop and mobile interface',
      'Project showcase',
      'Technical skills and developer profile',
    ],
    github: 'https://github.com/rum2425-6/dev-portfolio',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'production-mern-auth-api',
    image: 'https://placehold.co/900x600/080720/22d3ee?text=Production+MERN+Auth+API',
    description:
      'Production-ready MERN Authentication System with JWT, Email Verification, Password Reset, Profile Management, and Secure Authentication.',
    tech: ['MERN', 'JWT'],
    features: [
      'Email verification',
      'Password reset',
      'Profile management',
      'Secure authentication',
    ],
    github: 'https://github.com/rum2425-6/production-mern-auth-api',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'mern-weather-dashboard',
    image: 'https://placehold.co/900x600/080720/f59e0b?text=MERN+Weather+Dashboard',
    description:
      'A full-stack Weather Dashboard built with React, TypeScript, Node.js, Express.js, MongoDB Atlas, and OpenWeather API featuring a modern glassmorphism UI.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    features: ['Weather dashboard', 'OpenWeather API', 'Glassmorphism UI'],
    github: 'https://github.com/rum2425-6/mern-weather-dashboard',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'profile',
    image: 'https://placehold.co/900x600/080720/22d3ee?text=Profile',
    description: 'Profile project for web development practice.',
    tech: ['HTML'],
    features: ['Web development practice'],
    github: 'https://github.com/rum2425-6/profile',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'sidebar',
    image: 'https://placehold.co/900x600/080720/a855f7?text=Sidebar',
    description: 'Responsive sidebar supporting all devices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive sidebar', 'All-device support'],
    github: 'https://github.com/rum2425-6/sidebar',
    demo: '#',
    caseStudy: '#',
  },
  {
    title: 'cursher-game',
    image: 'https://placehold.co/900x600/080720/6366f1?text=Cursher+Game',
    description: 'A lizard-inspired animated cursor that follows the mouse across the screen.',
    tech: ['HTML5 Canvas', 'JavaScript'],
    features: ['Animated cursor', 'Mouse-following interaction'],
    github: 'https://github.com/rum2425-6/cursher-game',
    demo: '#',
    caseStudy: '#',
  },
]

// Certificates and achievements displayed in the Certificates section.
export const certificates = [
  {
    title: 'Software Developer Internship Certificate',
    issuer: 'RCS Global Limited',
    date: 'Jan 2026',
    image: '/certificates/internship-certificate.jpg',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'AWS',
    date: 'Jun 2025',
    image:
      'https://placehold.co/900x640/080720/f59e0b?text=AWS+Cloud+Practitioner',
  },
  {
    title: 'Internal Smart India Hackathon (SIH) Winner',
    issuer: 'Rama University',
    date: 'Aug 2025',
    image: 'https://placehold.co/900x640/080720/22d3ee?text=Internal+SIH+Winner',
  },
  {
    title: 'Innoventure',
    issuer: 'Institution Innovation Council - Rama University',
    date: 'Feb 2025',
    image: '/certificates/innoventure.jpg',
  },
]

// Summary numbers shown in the home and about sections.
export const stats = [
  { label: 'Projects Completed', value: 9 },
  { label: 'Technologies Learned', value: 25 },
  { label: 'Certificates', value: 4 },
  { label: 'Internship Months', value: 6 },
]