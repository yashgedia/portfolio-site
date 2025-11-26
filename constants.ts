
export const YASH_DATA = {
  name: "Yash Anil Gedia",
  role: "Full Stack Web Developer",
  location: "Borivali, Mumbai, Maharashtra, 400066",
  avatar: "https://i.postimg.cc/0Q8mzzNj/profile.jpg", 
  contact: {
    phone: "+91 8080845671",
    email: "yashgedia04@gmail.com",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/itxyash04" },
      { name: "Instagram", url: "https://www.instagram.com/itxyash04/" },
      { name: "GitHub", url: "https://github.com/itxyash04" }
    ]
  },
  objective: "Highly motivated Full Stack Web Developer with a passion for creating dynamic, user-friendly, and visually appealing web applications. Skilled in Core & Advanced PHP, React, Node.js, and TypeScript, with hands-on experience in developing custom CMS systems, RESTful APIs, and modern UI interfaces. Seeking to leverage coding expertise and creativity to build impactful digital experiences and scalable backend systems for forward-thinking organizations.",
  personalDetails: {
    dob: "06/05/2004",
    nationality: "Indian",
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    softSkills: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Time Management", "Adaptability", "Communication", "Code Quality Focus"],
    hobbies: ["Coding & UI Design", "Learning New Web Technologies", "Exploring Tech Trends", "Music & Photography"]
  },
  skills: {
    languages: ["Core PHP", "Advanced PHP", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "AJAX", "JSON", "XML"],
    backend: ["RESTful API Design", "Authentication (JWT, Sessions)", "Node.js & Express.js Basics", "Custom CMS Panel Development", "Server-side Scripting & Security"],
    frontend: ["React.js", "Bootstrap", "jQuery", "Responsive Design", "Cross-browser Compatibility", "Performance Optimization", "UI/UX Implementation"],
    database: ["MySQL", "phpMyAdmin", "Database Design & Optimization", "CRUD Operations"],
    tools: ["VS Code", "PhpStorm", "XAMPP/WAMP", "Postman", "Git & GitHub", "cPanel", "Domain & Hosting Setup"],
    deployment: ["Shared & VPS Hosting", "SSL Integration", "DNS Configuration", "FTP/SFTP Management", "Database Migration"],
    additional: ["SEO Basics", "Web Performance Optimization", "API Testing & Integration", "Debugging & Troubleshooting", "Code Documentation"]
  },
  experience: [
    {
      role: "PHP Developer",
      company: "Bonum EDesigns LLP",
      location: "Malad West, Mumbai",
      duration: "5th July 2024 – 16th July 2025",
      responsibilities: [
        "Developed fully coded websites and web applications using Core PHP, JavaScript, and MySQL — no frameworks.",
        "Designed and implemented custom CMS panels for product management, content updates, and client website control.",
        "Created and maintained RESTful APIs for web and mobile (Flutter) applications.",
        "Built dynamic websites with interactive admin dashboards for real-time content management.",
        "Designed responsive UIs ensuring a seamless user experience across devices.",
        "Collaborated with clients and designers to transform project ideas into practical and efficient solutions."
      ],
      projects: [
        { name: "recruitment.dhiiyo.in", url: "https://recruitment.dhiiyo.in", desc: "Recruitment portal with job posting, candidate management & admin panel." },
        { name: "blackfxtudio.com", url: "https://blackfxtudio.com", desc: "Professional studio website with custom content management." }
      ],
      achievements: [
        "Delivered over 25+ websites across e-commerce, recruitment, and logistics sectors.",
        "Improved backend performance by 30% through database query optimization.",
        "Enabled complete client autonomy by developing self-manageable CMS platforms."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "Ruparel College, Mumbai",
      year: "2021 – 2024",
      details: "Coursework: Web Programming, Database Management Systems, Object-Oriented Programming, Networking, Software Development"
    }
  ],
  certifications: [
      "Advanced PHP Development – Udemy",
      "Web Development with PHP & MySQL – Coursera",
      "RESTful API Design and Development – Pluralsight",
      "Responsive Web Design – FreeCodeCamp"
  ],
  projects: [
    {
      title: "Kia Foam & Fabrics – Inventory System",
      stack: "Core PHP, MySQL",
      desc: "Inventory tracking, quotation generation, 3 user roles, dynamic CRUD & analytics.",
      url: null
    },
    {
      title: "Personal Portfolio",
      stack: "React, TypeScript",
      desc: "Mac OS styled interactive portfolio with window management.",
      url: null
    },
    {
      title: "Client CMS Systems",
      stack: "PHP, JS",
      desc: "Custom portals for data management and automation.",
      url: null
    },
    {
      title: "Wix to Code Conversions",
      stack: "HTML, CSS, PHP",
      desc: "Transitioned multiple Wix-based sites into custom-coded solutions for better performance.",
      url: null
    },
    {
      title: "API Integrations",
      stack: "REST, React, Flutter",
      desc: "Created and consumed RESTful APIs for diverse web and mobile applications.",
      url: null
    }
  ],
  recentFiles: [
    { name: "Resume.pdf", type: "pdf", date: "Today at 9:41 AM" },
    { name: "Cover_Letter.docx", type: "doc", date: "Yesterday at 4:20 PM" },
    { name: "Project_Specs.txt", type: "txt", date: "Oct 24 at 10:00 AM" }
  ]
};

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Optimizing Backend Performance by 30%",
    date: "Oct 12, 2024",
    category: "Backend",
    readTime: "3 min read",
    preview: "How indexing strategies and query optimization transformed a sluggish legacy PHP application.",
    content: "During my time at Bonum EDesigns, I encountered a legacy internal CMS that took over 8 seconds to load the main dashboard. The bottleneck wasn't the PHP code itself, but inefficient MySQL queries running inside nested loops. By implementing proper indexing on foreign keys and refactoring the N+1 query problems into single JOINs, I reduced the load time to under 800ms—a performance boost of over 90%, contributing to the overall 30% system efficiency improvement noted in my resume."
  },
  {
    id: 2,
    title: "Migrating from Wix to Custom Code",
    date: "Sep 05, 2024",
    category: "Web Dev",
    readTime: "4 min read",
    preview: "Why moving away from site builders was necessary for scalability and speed.",
    content: "Wix is great for starting out, but my clients at BlackFx Studio needed more control. They required a custom backend content management flow that Wix's Velo couldn't easily handle without excessive cost. I migrated them to a custom HTML/PHP solution. This allowed for specific image compression algorithms for their portfolio and a custom admin panel tailored exactly to their workflow, improving their operational speed significantly."
  },
  {
    id: 3,
    title: "Building Secure REST APIs in PHP",
    date: "Aug 15, 2024",
    category: "Security",
    readTime: "5 min read",
    preview: "Implementing JWT authentication without a framework.",
    content: "While frameworks like Laravel make API development easy, building one from scratch using Core PHP taught me the fundamentals of HTTP headers, status codes, and security. For the recruitment portal project, I implemented a stateless REST API using JWT (JSON Web Tokens) for authentication. This ensured secure session handling across the React frontend and the Flutter mobile app without relying on server-side session storage, making the backend horizontally scalable."
  }
];

export const WALLPAPERS = [
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
];