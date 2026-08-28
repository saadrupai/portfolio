const resumeData = {
  personal_info: {
    name: "Shah Ahmed Saad Rupai",
    email: "saadrupai.work@gmail.com",
    phone: "+880 1339870793",
    location: "Dhaka-1212, Bangladesh",
    github: "https://github.com/saadrupai",
    linkedin: "https://www.linkedin.com/in/shah-ahmed-saad-rupai-591224195",
    links: {
      github: "https://github.com/saadrupai",
      linkedin: "https://www.linkedin.com/in/shah-ahmed-saad-rupai-591224195"
    }
  },
  experiences: [
    {
      company: "Shikho Technologies",
      position: "Software Engineer",
      start_date: "June, 2026",
      end_date: "Present",
      location: "Dhaka, Bangladesh",
      description: "Designed and developed AI Agent pipelines, payment processing systems, and database optimizations for 2.5M+ active users.",
      highlights: [
        "Designed and developed an AI Agent pipeline to dynamically generate personalized learning content (quizzes, model tests, and chapter summaries) from educational resources and lecture videos.",
        "Built and scaled the backend payment processing systems to handle transactions for over 2.5 million active users, integrating local payment gateways and ensuring high availability.",
        "Collaborated with Grameenphone (MyGP) to integrate campaign features, enabling seamless user authentication and learning content delivery across platforms.",
        "Led database optimization and schema migrations for massive datasets, analyzing user data patterns and building real-time dashboards to improve system monitoring and business intelligence."
      ]
    },
    {
      company: "Cloudscockpit",
      position: "Software Engineer",
      start_date: "December, 2025",
      end_date: "August, 2026",
      location: "Boyds, Maryland",
      description: "Architected billing, usage-metering, asynchronous ML streaming pipelines, and event-driven notification services.",
      highlights: [
        "Designed and built a scalable billing and usage-metering platform in Go supporting subscription- and usage-based pricing (plans, subscriptions, and usage metering) via an asynchronous data ingestion pipeline.",
        "Architected and deployed a decoupled, high-performance asynchronous ML response streaming pipeline using AWS SQS, AWS Lambda (with response streaming Function URLs), and Amazon ElastiCache Redis Streams, enabling sub-100ms streaming latency to frontend clients.",
        "Developed a robust, event-driven notification service using an asynchronous processing pipeline to dispatch real-time push notifications to mobile and web applications based on user activity triggers."
      ]
    },
    {
      company: "Technonext (US-Bangla Airlines Concern)",
      position: "Software Engineer",
      start_date: "April, 2025",
      end_date: "March, 2026",
      location: "Dhaka, Bangladesh",
      description: "Led backend engineering for high-throughput distributed order processing, geospatial search services, and microservice decoupling.",
      highlights: [
        "Led the backend team in building a distributed order-processing platform capable of handling over 10,000 order requests under peak load through an asynchronous message-broker architecture and high-performance RPC communication. Designed for horizontal scalability and reliability, ensuring smooth order fulfillment during high-traffic events.",
        "Migrated 600,000+ geospatial records from relational storage to a high-performance search engine, enabling sub-100ms p99 latency for geocoding and reverse-geocoding via optimized in-memory caching and indexed lookups.",
        "Developed a high-performance geo-service using open geospatial data and search indexing, delivering sub-100ms average latency for geocoding and reverse-geocoding—powering real-time location intelligence across multiple internal platforms.",
        "Participated in cross-functional teams for architectural and code reviews, contributed to decisions on database indexing, caching, and message-handling strategies to enhance system scalability and maintainability.",
        "Resolved a critical performance bottleneck in the monolithic inventory system by decoupling order processing into a dedicated microservice. Migrated REST-based inventory checks to RPC and integrated message broker for asynchronous messaging—reducing average response time from 2.8s to 1.9s (~32% improvement) under peak load."
      ]
    },
    {
      company: "Vivasoft Ltd.",
      position: "Junior Software Engineer",
      start_date: "July, 2023",
      end_date: "March, 2025",
      location: "Dhaka, Bangladesh",
      description: "Developed email gateway, CMS middleware, cloud deployments, payment gateways, and real-time inventory management.",
      highlights: [
        "Built a scalable email gateway service and implemented a dynamic point-evaluation and ranking system, improving assessment accuracy from 76% to 95% while reducing data-processing latency.",
        "Developed a middleware to convert markdown files into CMS pages, automated publication via CMS API and reduced manual content processing by 90%.",
        "Deployed and managed backend applications on a cloud system using container orchestration, ensured scalable, reliable, and highly available services with disaster recovery, capable of handling high traffic and concurrent requests.",
        "Integrated a secure payment gateway, enabled reliable online transactions and streamlined the payment flow for end users that resulted in a reduction in failed transactions and smoother checkout experience.",
        "Re-architected the inventory management module into a real-time stock-tracking system across multiple warehouses, leveraged caching and database transactions reducing query times by 40% and ensured consistency under concurrent updates.",
        "Designed and optimized database structures and implemented a secure file upload system with cloud storage support, reduced file-handling errors and improved data accessibility and retrieval speed for users."
      ]
    }
  ],
  projects: [
    {
      name: "Foodi",
      role: "Backend Engineer",
      description: "Real-time inventory system for food delivery & supermarket platform",
      links: [
        {
          name: "Foodi App",
          url: "https://play.google.com/store/apps/details?id=com.foodiBd&hl=en_US&pli=1"
        }
      ],
      highlights: [
        "Re-architected inventory module into a distributed, real-time tracking system, reducing stock discrepancies by 90% during peak order surges using event-driven updates and atomic transactions.",
        "Decoupled inventory checks from monolithic flow into a dedicated microservice, migrating REST to RPC and integrating asynchronous messaging—cutting average sync latency from 2.8s to 1.9s (~32% improvement)."
      ]
    },
    {
      name: "Actionboard.ai",
      role: "Backend Engineer",
      description: "Enterprise AI workflow automation and subscription billing platform",
      links: [
        {
          name: "Actionboard.ai Website",
          url: "https://actionboard.ai"
        }
      ],
      highlights: [
        "Engineered a scalable billing and usage-metering platform in Go supporting subscription- and usage-based pricing, proration, and automated Stripe/SSLCommerz payments.",
        "Architected a decoupled asynchronous ML response streaming pipeline using AWS SQS, AWS Lambda (with response streaming Function URLs), and Redis Streams, delivering chunks to UI clients with sub-100ms latency.",
        "Built an event-driven notification service using RabbitMQ and Redis to dispatch real-time alerts across web and mobile platforms.",
        "Architected asynchronous ML response streaming pipeline integrating OpenRouter LLMs and GMI Cloud GPU compute nodes for MiniMax M3 models."
      ]
    },
    {
      name: "Financfy",
      role: "Backend Engineer",
      description: "Cloud-based accounting software for SMEs",
      links: [
        {
          name: "Financfy Website",
          url: "https://financfy.com"
        }
      ],
      highlights: [
        "Engineered real-time inventory tracking system with multi-warehouse synchronization, reducing stock discrepancies by 90% using event-driven updates.",
        "Integrated inventory module across distributed warehouses with Redis caching and database transactions, achieving sub-50ms stock availability checks.",
        "Collaborated with frontend to deliver accurate real-time inventory dashboards, improving operational decision-making speed."
      ]
    },
    {
      name: "Shikho",
      role: "Backend Engineer",
      description: "AI-driven content generation and personalized learning platform",
      links: [
        {
          name: "Shikho Website",
          url: "https://shikho.com"
        }
      ],
      highlights: [
        "Designed and developed a Go-based AI Agent pipeline to parse video lectures and textbooks, generating chapter summaries, model tests, and quizzes.",
        "Scaled high-throughput API endpoints and payment systems to support transactions and delivery for over 2.5 million active users.",
        "Built Go-based AI Agent pipelines integrating LLMs via OpenRouter and high-throughput MiniMax M3 models deployed on GMI Cloud."
      ]
    },
    {
      name: "Mapnest",
      role: "Backend Engineer",
      description: "High-performance geocoding, reverse-geocoding & route snapping engine",
      links: [],
      highlights: [
        "Migrated 600,000+ geospatial records from relational storage to a high-performance search engine, enabling sub-100ms p99 latency for geocoding and reverse-geocoding via optimized in-memory caching and indexed lookups.",
        "Delivered sub-100ms p99 latency for geocoding, reverse-geocoding, and snap-to-road using high-speed spatial queries and in-memory caching—powering real-time location intelligence across internal platforms."
      ]
    },
    {
      name: "Wellteam",
      role: "Backend Engineer",
      description: "Online wellness platform with community programs",
      links: [
        {
          name: "Wellteam Website",
          url: "https://wellteam.me"
        }
      ],
      highlights: [
        "Developed a scalable email gateway package, enabling reliable high-volume email delivery with retry mechanisms and delivery tracking.",
        "Led implementation of core point-evaluation and ranking logic, improving accuracy and reducing processing time by 40% through optimized algorithms and concurrent processing.",
        "Integrated Consul for service discovery and Stripe for payments, ensuring resilient microservice communication and secure transaction handling.",
        "Containerized services with Docker and deployed on AWS infrastructure, enabling seamless scaling and zero-downtime updates."
      ]
    },
    {
      name: "Vision Based Malware Classification Framework Based On Neural Network",
      role: "Researcher / Developer",
      description: "Converted malware binaries into images for neural network processing using the Microsoft Malware Classification Challenge (BIG 2015) database.",
      links: [
        {
          name: "Book",
          url: "https://drive.google.com/file/d/1WXFoumZVIY178EHzaPWA_MyO1f6O0Al2/view"
        },
        {
          name: "Presentation",
          url: "https://drive.google.com/file/d/1bSV5hoDwIVcwVAXCwnQ05wSOZsvjmkTD/view?usp=sharing"
        }
      ],
      highlights: [
        "Converted malware binaries into images for neural network processing using the Microsoft Malware Classification Challenge (BIG 2015) database.",
        "Achieved 97.57% classification accuracy using the CNN model."
      ]
    }
  ],
  education: [
    {
      institution: "Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
      degree: "BSc. in Computer Science",
      dates: "2018 - 2023"
    }
  ],
  technical_skills: {
    languages: [
      "Golang",
      "TypeScript",
      "Node.js",
      "Python",
      "JavaScript",
      "C",
      "C++"
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ],
    tools: [
      "Git",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "Redis",
      "Elasticsearch",
      "AWS (EC2, S3, ECR, SES, SNS, SQS, Amplify, DynamoDB, Appsync)",
      "OpenRouter",
      "GMI Cloud",
      "MiniMax M3"
    ],
    concepts: [
      "Clean Architecture",
      "REST",
      "gRPC",
      "DDD",
      "DevOps basics"
    ]
  },
  achievements: [
    {
      title: "Anti-Corruption Commission National Debate Competition, Bangladesh (2015)",
      details: "National Champion — Led a team that became national champion among 64 teams from all districts of Bangladesh."
    },
    {
      title: "National Math Olympiad, Bangladesh (2010)",
      details: "Divisional Champion (Junior Category) — Achieved divisional champion among 50–60 junior participants."
    },
    {
      title: "Seasonal Competition, Bangladesh Shishu Academy (2014)",
      details: "Second Position, Division Level (Poem Recitation) — Achieved 2nd place among 8–10 participants."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = resumeData;
}
