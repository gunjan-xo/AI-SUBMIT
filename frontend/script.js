// =============================================
//  AI-TOOLS DIRECTORY — script.js
// =============================================

// ---- TOOL DATA (grouped by category) --------

const codeTools = [
    {
        name: "GitHub Copilot",
        description: "AI-powered code completion and suggestion tool built into your editor.",
        fullDescription: "GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code, and suggests individual lines and whole functions instantly.",
        category: "Code Assistant",
        url: "https://github.com/features/copilot",
        badge: "Popular",
        emoji: "🤖",
        rating: "4.8",
        users: "5M+",
        releaseYear: "2021",
        features: [
            "Real-time code suggestions in your editor",
            "Multi-language support (Python, JavaScript, TypeScript, Go, etc.)",
            "Context-aware completions",
            "Copilot Chat for natural language assistance",
            "Integration with VS Code, JetBrains, Vim, and more",
            "Unit test generation",
            "Code documentation generation"
        ],
        pricing: [
            { name: "Free Trial", description: "60 suggestions per month", price: "Free", billingPeriod: "1 month" },
            { name: "Pro", description: "Unlimited suggestions and Copilot Chat", price: "$10", billingPeriod: "month" },
            { name: "Business", description: "For teams with organization management", price: "Custom", billingPeriod: "" }
        ],
        useCases: [
            { emoji: "👨‍💻", title: "Individual Developers", description: "Speed up coding and reduce context switching" },
            { emoji: "👥", title: "Development Teams", description: "Standardize coding practices across the team" },
            { emoji: "🚀", title: "Startups", description: "Build faster with fewer developers" },
            { emoji: "📚", title: "Learning", description: "Learn coding patterns by example" }
        ],
        pros: [
            "Highly accurate code suggestions",
            "Supports multiple programming languages",
            "Works in popular IDEs",
            "Excellent for speeding up repetitive tasks",
            "Good integration with GitHub"
        ],
        cons: [
            "Paid subscription required for advanced features",
            "Requires internet connection",
            "Suggestions may sometimes be generic",
            "Data privacy concerns for enterprise"
        ]
    },
    {
        name: "Cursor",
        description: "AI-first code editor that understands your codebase and helps you write faster.",
        fullDescription: "Cursor is a code editor built from scratch to work with AI. It combines the power of VS Code with advanced AI capabilities to understand your entire codebase.",
        category: "Code Assistant",
        url: "https://cursor.sh",
        badge: "Trending",
        emoji: "⌨️",
        rating: "4.9",
        users: "500K+",
        releaseYear: "2023",
        features: [
            "Full codebase understanding and context",
            "Chat with your entire codebase",
            "AI-powered refactoring",
            "Predictive code completion",
            "Fast code search and navigation",
            "Command palette with AI enhancement",
            "Works offline for basic features"
        ],
        pricing: [
            { name: "Free", description: "Basic AI features with limited requests", price: "Free", billingPeriod: "" },
            { name: "Pro", description: "Unlimited requests and advanced features", price: "$20", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🔍", title: "Code Navigation", description: "Understand large codebases quickly" },
            { emoji: "♻️", title: "Refactoring", description: "Refactor code with AI guidance" },
            { emoji: "🎓", title: "Learning", description: "Learn from existing code patterns" }
        ],
        pros: [
            "Excellent codebase comprehension",
            "Intuitive interface based on VS Code",
            "Great for refactoring and understanding code",
            "Responsive and fast",
            "Regular updates and improvements"
        ],
        cons: [
            "Relatively new, smaller community",
            "Limited offline capabilities",
            "Paid tier required for full features",
            "Smaller extension ecosystem"
        ]
    },
    {
        name: "Bubble",
        description: "No-code platform to build fully functional web apps without writing code.",
        fullDescription: "Bubble is a no-code platform that enables anyone to build and launch web apps without writing code. Create database-backed web apps with visual workflows and AI assistance.",
        category: "Low-Code/No-Code",
        url: "https://bubble.io",
        badge: "",
        emoji: "🫧",
        rating: "4.5",
        users: "500K+",
        releaseYear: "2012",
        features: [
            "Visual app builder with drag-and-drop interface",
            "Database builder with relationships",
            "Responsive design tools",
            "API connections and integrations",
            "Workflow automation",
            "Plugin ecosystem",
            "Hosting and deployment included"
        ],
        pricing: [
            { name: "Free", description: "Starter plan with Bubble branding", price: "Free", billingPeriod: "" },
            { name: "Starter", description: "Personal projects and small apps", price: "$25", billingPeriod: "month" },
            { name: "Growing", description: "Production apps with more resources", price: "$75", billingPeriod: "month" },
            { name: "Professional", description: "High-traffic applications", price: "$129", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🚀", title: "Startups", description: "Launch MVPs without technical team" },
            { emoji: "💼", title: "Entrepreneurs", description: "Turn ideas into products quickly" },
            { emoji: "🎨", title: "Designers", description: "Build interactive prototypes" }
        ],
        pros: [
            "No coding required - fully visual",
            "Complete hosting and deployment",
            "Large active community",
            "Powerful database and workflows",
            "Can build real, scalable applications"
        ],
        cons: [
            "Performance can be slower than custom code",
            "Limited customization for complex logic",
            "Steeper learning curve for complex apps",
            "Hosting costs can add up quickly"
        ]
    },
    {
        name: "AI2sql",
        description: "Convert plain English into SQL queries instantly using AI.",
        fullDescription: "AI2sql uses artificial intelligence to convert plain English text into SQL queries. Perfect for anyone who wants to query databases without learning complex SQL syntax.",
        category: "SQL",
        url: "https://www.ai2sql.io",
        badge: "",
        emoji: "🗄️",
        rating: "4.6",
        users: "100K+",
        releaseYear: "2022",
        features: [
            "English to SQL conversion",
            "SQL optimization suggestions",
            "Multiple database support (MySQL, PostgreSQL, SQL Server, etc.)",
            "Query explanation and documentation",
            "Web interface and API access",
            "Browser extension for easy access",
            "Export queries in multiple formats"
        ],
        pricing: [
            { name: "Free", description: "Limited queries per month", price: "Free", billingPeriod: "" },
            { name: "Pro", description: "Unlimited queries and API access", price: "$15", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📊", title: "Data Analysts", description: "Query databases without SQL knowledge" },
            { emoji: "👨‍💼", title: "Business Users", description: "Generate reports independently" },
            { emoji: "🎓", title: "Learning SQL", description: "Understand SQL by example" }
        ],
        pros: [
            "Very easy to use and intuitive",
            "Supports multiple database systems",
            "Good for learning SQL",
            "Fast and accurate translations",
            "Browser extension adds convenience"
        ],
        cons: [
            "Sometimes needs query refinement",
            "Limited for very complex queries",
            "Free tier has usage limits",
            "Doesn't teach you SQL fundamentals"
        ]
    },
    {
        name: "Tabnine",
        description: "AI code completion assistant that learns your coding style and speeds up development.",
        fullDescription: "Tabnine is an AI code completion tool that learns your coding patterns and provides intelligent suggestions. It works offline and supports all major languages.",
        category: "Code Assistant",
        url: "https://www.tabnine.com",
        badge: "",
        emoji: "✨",
        rating: "4.7",
        users: "1M+",
        releaseYear: "2018",
        features: [
            "AI-powered code completions",
            "Learns your coding style",
            "Works offline with local models",
            "Multi-language support",
            "Integration with all major IDEs",
            "Privacy-first approach",
            "Team collaboration features"
        ],
        pricing: [
            { name: "Free", description: "Basic completions, runs locally", price: "Free", billingPeriod: "" },
            { name: "Pro", description: "Advanced AI models and features", price: "$15", billingPeriod: "month" },
            { name: "Enterprise", description: "Custom deployment and support", price: "Custom", billingPeriod: "" }
        ],
        useCases: [
            { emoji: "🔐", title: "Privacy-Conscious", description: "Code completion without sending code to cloud" },
            { emoji: "🏢", title: "Enterprise Teams", description: "Self-hosted solution with custom models" },
            { emoji: "⚡", title: "Performance", description: "Fast local code completion" }
        ],
        pros: [
            "Works completely offline",
            "Strong privacy and security focus",
            "Learns from your codebase",
            "Lightweight and fast",
            "Good free tier"
        ],
        cons: [
            "Local models less powerful than cloud-based",
            "Smaller community than GitHub Copilot",
            "Learning curve for advanced features",
            "Free tier somewhat limited"
        ]
    },
    {
        name: "Webflow",
        description: "Visual web development platform with AI features for designers and developers.",
        fullDescription: "Webflow is a visual web development platform that allows you to build responsive websites without writing code. Create production-ready sites with visual design and powerful interactions.",
        category: "Low-Code/No-Code",
        url: "https://webflow.com",
        badge: "",
        emoji: "🌐",
        rating: "4.6",
        users: "3M+",
        releaseYear: "2013",
        features: [
            "Visual web builder with real-time preview",
            "Responsive design tools",
            "CSS and JavaScript customization",
            "CMS for dynamic content",
            "E-commerce capabilities",
            "Hosting and CDN included",
            "AI-powered design suggestions"
        ],
        pricing: [
            { name: "Free", description: "Personal projects with Webflow branding", price: "Free", billingPeriod: "" },
            { name: "Basic", description: "Professional sites - $12/month", price: "$12", billingPeriod: "month" },
            { name: "Pro", description: "Advanced features - $25/month", price: "$25", billingPeriod: "month" },
            { name: "Business", description: "High-traffic sites - $75/month", price: "$75", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🎨", title: "Designers", description: "Design and publish without developers" },
            { emoji: "🛍️", title: "E-commerce", description: "Build beautiful online stores" },
            { emoji: "📱", title: "Agencies", description: "Create client projects efficiently" }
        ],
        pros: [
            "Beautiful visual design interface",
            "Hosting included",
            "Can export code for customization",
            "Great for freelancers and agencies",
            "Excellent templates library"
        ],
        cons: [
            "Steep learning curve",
            "Can be expensive for small sites",
            "Performance depends on design choices",
            "Limited backend capabilities",
            "Vendor lock-in concerns"
        ]
    }
];

const textTools = [
    {
        name: "ChatGPT",
        description: "AI chatbot for writing, brainstorming, and productivity by OpenAI.",
        fullDescription: "ChatGPT is a conversational AI assistant that can help with writing, coding, math, creative content, and much more. It's one of the most versatile AI tools available today.",
        category: "Writing Generators",
        url: "https://chat.openai.com",
        badge: "Popular",
        emoji: "💬",
        rating: "4.8",
        users: "100M+",
        releaseYear: "2022",
        features: [
            "Natural language conversations",
            "Content writing and brainstorming",
            "Code explanation and generation",
            "Math problem solving",
            "Creative writing assistance",
            "Custom GPTs creation",
            "File and image analysis",
            "Web browsing capability"
        ],
        pricing: [
            { name: "Free", description: "Access to GPT-3.5", price: "Free", billingPeriod: "" },
            { name: "Plus", description: "GPT-4, priority access, plugins", price: "$20", billingPeriod: "month" },
            { name: "Enterprise", description: "Custom deployment and support", price: "Custom", billingPeriod: "" }
        ],
        useCases: [
            { emoji: "✍️", title: "Content Writers", description: "Generate blog posts, articles, and creative content" },
            { emoji: "💼", title: "Professionals", description: "Email writing, meeting summaries, documentation" },
            { emoji: "🎓", title: "Students", description: "Research, explanations, and learning assistance" }
        ],
        pros: [
            "Incredibly versatile and intelligent",
            "Free version is very capable",
            "Large active community with lots of resources",
            "Continuously improving",
            "Can handle complex reasoning tasks"
        ],
        cons: [
            "Can produce inaccurate information (hallucinations)",
            "No real-time internet data",
            "Character limit on some inputs",
            "Quality depends on prompt quality"
        ]
    },
    {
        name: "Jasper AI",
        description: "AI writing assistant for marketing copy, blog posts, and brand content.",
        fullDescription: "Jasper is an AI writing assistant specifically designed for creating high-quality marketing and brand content. Perfect for copywriters and content creators.",
        category: "Copywriting",
        url: "https://www.jasper.ai",
        badge: "Featured",
        emoji: "📝",
        rating: "4.7",
        users: "100K+",
        releaseYear: "2021",
        features: [
            "Content templates for different formats",
            "Brand voice customization",
            "SEO optimization assistance",
            "Plagiarism detection",
            "Long-form content generation",
            "Team collaboration tools",
            "Integration with popular platforms",
            "Analytics and performance tracking"
        ],
        pricing: [
            { name: "Starter", description: "20K words per month", price: "$39", billingPeriod: "month" },
            { name: "Professional", description: "100K words per month", price: "$99", billingPeriod: "month" },
            { name: "Business", description: "Unlimited words and team access", price: "$125+", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📢", title: "Marketers", description: "Create ad copy and campaign content" },
            { emoji: "📰", title: "Content Agencies", description: "Scale content production" },
            { emoji: "🛍️", title: "E-commerce", description: "Generate product descriptions" }
        ],
        pros: [
            "Specialized for marketing content",
            "Great brand voice customization",
            "Fast content generation",
            "Good templates library",
            "Team collaboration features"
        ],
        cons: [
            "Expensive compared to ChatGPT",
            "Sometimes needs human editing",
            "Word limits can be restrictive",
            "Learning curve for optimization"
        ]
    },
    {
        name: "QuillBot",
        description: "AI-powered paraphrasing and grammar tool used by millions of writers.",
        fullDescription: "QuillBot is an intelligent paraphrasing tool that helps you rephrase text while maintaining meaning. It also includes grammar checking and style improvements.",
        category: "Paraphrasing",
        url: "https://quillbot.com",
        badge: "",
        emoji: "🔄",
        rating: "4.6",
        users: "10M+",
        releaseYear: "2018",
        features: [
            "Multiple paraphrasing modes",
            "Grammar and spell checking",
            "Plagiarism detection",
            "Tone adjustment (formal, casual, etc.)",
            "Word replacement suggestions",
            "Browser extension",
            "Microsoft Office integration",
            "Citation assistance"
        ],
        pricing: [
            { name: "Free", description: "125 words per request", price: "Free", billingPeriod: "" },
            { name: "Premium", description: "Unlimited paraphrasing", price: "$9.99", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📖", title: "Students", description: "Improve writing and avoid plagiarism" },
            { emoji: "✍️", title: "Writers", description: "Diversify vocabulary and improve style" },
            { emoji: "🌍", title: "ESL Learners", description: "Improve English writing skills" }
        ],
        pros: [
            "Excellent paraphrasing results",
            "Very affordable premium",
            "Easy to use",
            "Good plagiarism checker",
            "Works across multiple platforms"
        ],
        cons: [
            "Free tier is limited",
            "Sometimes changes meaning unintentionally",
            "Subscription required for full features",
            "Not as versatile as ChatGPT"
        ]
    },
    {
        name: "Sudowrite",
        description: "AI writing tool designed specifically for fiction writers and storytellers.",
        fullDescription: "Sudowrite is an AI assistant built for creative writers. It helps with storytelling, character development, dialogue, and overcoming writer's block.",
        category: "Storyteller",
        url: "https://www.sudowrite.com",
        badge: "",
        emoji: "📚",
        rating: "4.5",
        users: "50K+",
        releaseYear: "2021",
        features: [
            "Story continuation and expansion",
            "Character development assistance",
            "Dialogue generation",
            "Worldbuilding help",
            "Story structure guidance",
            "Style and tone customization",
            "Editing and refinement tools",
            "Integration with word processors"
        ],
        pricing: [
            { name: "Free Trial", description: "Limited features", price: "Free", billingPeriod: "7 days" },
            { name: "Monthly", description: "Full access", price: "$10", billingPeriod: "month" },
            { name: "Yearly", description: "Best value", price: "$96", billingPeriod: "year" }
        ],
        useCases: [
            { emoji: "📖", title: "Fiction Writers", description: "Overcome writer's block and develop stories" },
            { emoji: "✨", title: "Screenwriters", description: "Create dialogues and scene descriptions" },
            { emoji: "🎬", title: "Content Creators", description: "Generate creative multimedia content" }
        ],
        pros: [
            "Specialized for creative writing",
            "Helps with writer's block",
            "Good dialogue generation",
            "Affordable pricing",
            "Active community of writers"
        ],
        cons: [
            "Smaller community than general AI tools",
            "Sometimes requires significant editing",
            "Free trial is limited",
            "Not suitable for technical writing"
        ]
    },
    {
        name: "PromptPerfect",
        description: "Automatically optimize prompts for ChatGPT, Midjourney, and other AI tools.",
        fullDescription: "PromptPerfect optimizes your prompts for maximum effectiveness. It works with multiple AI platforms to ensure you get the best possible results.",
        category: "Prompt Generators",
        url: "https://promptperfect.jina.ai",
        badge: "",
        emoji: "🎯",
        rating: "4.4",
        users: "50K+",
        releaseYear: "2023",
        features: [
            "AI-powered prompt optimization",
            "Support for multiple AI platforms",
            "Prompt templates and examples",
            "Sharing and collaboration",
            "Prompt history and management",
            "Performance analytics",
            "Integration with Discord",
            "Mobile app support"
        ],
        pricing: [
            { name: "Free", description: "Limited optimizations per day", price: "Free", billingPeriod: "" },
            { name: "Pro", description: "Unlimited optimizations", price: "$9.99", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🤖", title: "AI Enthusiasts", description: "Get better results from AI tools" },
            { emoji: "🎨", title: "Creative Professionals", description: "Optimize image generation prompts" },
            { emoji: "⚙️", title: "Developers", description: "Fine-tune prompts for automation" }
        ],
        pros: [
            "Easy to use",
            "Works with multiple AI platforms",
            "Helps get better AI results",
            "Affordable",
            "Good community features"
        ],
        cons: [
            "Relatively new and less established",
            "Free tier somewhat limited",
            "Prompt optimization quality varies",
            "Small user base"
        ]
    },
    {
        name: "Copy.ai",
        description: "AI-powered copywriting platform for ads, emails, product descriptions, and more.",
        fullDescription: "Copy.ai is an AI copywriting assistant that helps generate marketing copy for ads, emails, product descriptions, social media, and more.",
        category: "Copywriting",
        url: "https://www.copy.ai",
        badge: "",
        emoji: "💡",
        rating: "4.5",
        users: "1M+",
        releaseYear: "2021",
        features: [
            "Multiple copy templates",
            "AI-generated variations",
            "Brand voice customization",
            "Long-form content generation",
            "SEO optimization",
            "Team collaboration",
            "Integrations with marketing tools",
            "Performance tracking"
        ],
        pricing: [
            { name: "Free", description: "Limited generations per month", price: "Free", billingPeriod: "" },
            { name: "Plus", description: "250 generations/month", price: "$49", billingPeriod: "month" },
            { name: "Unlimited", description: "Unlimited generations", price: "$99", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📧", title: "Email Marketing", description: "Generate compelling email campaigns" },
            { emoji: "📢", title: "Ads & Campaigns", description: "Create ad copy variations quickly" },
            { emoji: "🛒", title: "E-commerce", description: "Write product descriptions" }
        ],
        pros: [
            "Easy to use interface",
            "Quick copy generation",
            "Good free tier",
            "Multiple use cases covered",
            "Affordable pricing"
        ],
        cons: [
            "Sometimes needs manual refinement",
            "Less specialized than Jasper",
            "Quality can be inconsistent",
            "Limited customization options"
        ]
    }
];

const imageTools = [
    {
        name: "Midjourney",
        description: "Industry-leading AI image generation tool known for stunning, artistic visuals.",
        fullDescription: "Midjourney is an AI image generation platform that creates high-quality, artistic images from text descriptions. Known for exceptional quality and artistic style.",
        category: "Image Generation",
        url: "https://www.midjourney.com",
        badge: "Popular",
        emoji: "🎨",
        rating: "4.9",
        users: "3M+",
        releaseYear: "2022",
        features: [
            "High-quality image generation",
            "Multiple style options",
            "Upscaling and variation tools",
            "Detailed parameter control",
            "Blend multiple images",
            "Custom model training",
            "Discord integration",
            "Web interface available"
        ],
        pricing: [
            { name: "Basic", description: "3.3 hours/month of GPU time", price: "$10", billingPeriod: "month" },
            { name: "Standard", description: "15 hours/month of GPU time", price: "$30", billingPeriod: "month" },
            { name: "Pro", description: "30 hours/month of GPU time", price: "$60", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🎬", title: "Filmmakers", description: "Create concept art and storyboards" },
            { emoji: "🎨", title: "Designers", description: "Generate design inspiration and assets" },
            { emoji: "📚", title: "Authors", description: "Create book covers and illustrations" }
        ],
        pros: [
            "Exceptional image quality",
            "Great artistic control",
            "Amazing upscaling capabilities",
            "Large community and resources",
            "Regular feature updates"
        ],
        cons: [
            "Subscription required",
            "Learning curve for advanced features",
            "Discord-based interface (for some)",
            "Limited free trial"
        ]
    },
    {
        name: "DALL·E 3",
        description: "OpenAI's powerful image generation model, integrated directly into ChatGPT.",
        fullDescription: "DALL·E 3 is OpenAI's latest image generation model, integrated into ChatGPT. It provides high-quality image generation directly in your ChatGPT conversation.",
        category: "Image Generation",
        url: "https://openai.com/dall-e-3",
        badge: "",
        emoji: "🖼️",
        rating: "4.7",
        users: "50M+",
        releaseYear: "2023",
        features: [
            "Natural language image generation",
            "Integrated with ChatGPT",
            "Refine images through conversation",
            "Generate variations",
            "High resolution outputs",
            "Commercial use allowed",
            "Easy integration in applications",
            "Reliable and safe outputs"
        ],
        pricing: [
            { name: "Pay-per-use", description: "$0.04 - $0.02 per image", price: "Variable", billingPeriod: "" },
            { name: "ChatGPT Plus", description: "Included with subscription", price: "$20", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📱", title: "App Developers", description: "Generate images programmatically" },
            { emoji: "💼", title: "Businesses", description: "Create marketing materials" },
            { emoji: "🎓", title: "Education", description: "Generate educational visuals" }
        ],
        pros: [
            "Easy integration with ChatGPT",
            "High-quality outputs",
            "API available for developers",
            "Flexible pricing",
            "Commercial use friendly"
        ],
        cons: [
            "Limited free credits for new users",
            "Less artistic control than Midjourney",
            "Can be slow during peak times",
            "Per-image pricing can add up"
        ]
    },
    {
        name: "Adobe Firefly",
        description: "AI image and design generation tool built into the Adobe Creative Suite.",
        fullDescription: "Adobe Firefly is an AI-powered generative tool built directly into Adobe's creative suite. It allows seamless image generation and editing within Photoshop and other Adobe apps.",
        category: "Image Editing",
        url: "https://www.adobe.com/products/firefly.html",
        badge: "Featured",
        emoji: "🔥",
        rating: "4.6",
        users: "10M+",
        releaseYear: "2023",
        features: [
            "Integrated into Photoshop and Illustrator",
            "Generative fill",
            "Generative expand",
            "Style transfer",
            "Object removal",
            "Professional quality outputs",
            "Commercial use rights included",
            "API access available"
        ],
        pricing: [
            { name: "Free", description: "100 generative credits/month", price: "Free", billingPeriod: "" },
            { name: "Paid", description: "Variable credits based on plan", price: "$5-$80", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🎨", title: "Designers", description: "Enhance existing designs and artwork" },
            { emoji: "📸", title: "Photographers", description: "Edit and enhance photos" },
            { emoji: "🎬", title: "Video Editors", description: "Generate assets for video projects" }
        ],
        pros: [
            "Seamless Adobe integration",
            "Professional-grade results",
            "Powerful generative fill",
            "Commercial use allowed",
            "Regular updates and improvements"
        ],
        cons: [
            "Requires Adobe Creative Cloud subscription",
            "Generative credits can run out",
            "Learning curve within Adobe suite",
            "Less control than dedicated tools"
        ]
    },
    {
        name: "Canva AI",
        description: "Design platform with AI-powered image generation and editing features.",
        fullDescription: "Canva's AI-powered features help you create stunning designs with AI-generated images and content suggestions. Perfect for non-designers.",
        category: "Art & Design",
        url: "https://www.canva.com",
        badge: "",
        emoji: "🎭",
        rating: "4.5",
        users: "150M+",
        releaseYear: "2013",
        features: [
            "AI image generation",
            "Design templates",
            "AI-powered design suggestions",
            "Photo editing tools",
            "Brand kit management",
            "Team collaboration",
            "Social media templates",
            "Print and digital exports"
        ],
        pricing: [
            { name: "Free", description: "Basic design tools", price: "Free", billingPeriod: "" },
            { name: "Canva Pro", description: "Premium templates and features", price: "$180", billingPeriod: "year" },
            { name: "Canva Teams", description: "Collaboration for teams", price: "$30", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "📱", title: "Social Media", description: "Create posts and stories quickly" },
            { emoji: "📰", title: "Marketing", description: "Design ads and promotional materials" },
            { emoji: "🎓", title: "Presentations", description: "Create professional presentations" }
        ],
        pros: [
            "Very easy to use for non-designers",
            "Huge template library",
            "Affordable pricing",
            "AI suggestions help guide design",
            "Great for social media content"
        ],
        cons: [
            "Limited advanced customization",
            "AI generation quality varies",
            "Can look generic if not customized",
            "Pro features require subscription"
        ]
    },
    {
        name: "Stable Diffusion",
        description: "Open-source AI image generation model with extensive customization options.",
        fullDescription: "Stable Diffusion is an open-source AI model for image generation. It offers maximum flexibility and customization, and can be run locally.",
        category: "Image Generation",
        url: "https://stability.ai",
        badge: "",
        emoji: "⚙️",
        rating: "4.4",
        users: "1M+",
        releaseYear: "2022",
        features: [
            "Open-source and customizable",
            "Can run locally on your computer",
            "Multiple models and fine-tunes available",
            "LoRA and textual inversion support",
            "API access available",
            "Active community development",
            "Free and commercial options",
            "Extensive documentation"
        ],
        pricing: [
            { name: "Open Source", description: "Free to download and use locally", price: "Free", billingPeriod: "" },
            { name: "DreamStudio API", description: "Pay-per-use cloud service", price: "Variable", billingPeriod: "" }
        ],
        useCases: [
            { emoji: "🔬", title: "Researchers", description: "Experiment with image generation" },
            { emoji: "⚙️", title: "Developers", description: "Build custom AI applications" },
            { emoji: "💻", title: "Advanced Users", description: "Local control and customization" }
        ],
        pros: [
            "Completely free and open-source",
            "Maximum customization and control",
            "Can run locally (no data sharing)",
            "Large community and resources",
            "Multiple models available"
        ],
        cons: [
            "Steep learning curve",
            "Requires technical knowledge",
            "Needs good hardware to run locally",
            "Quality less consistent than commercial tools",
            "Self-hosted support burden"
        ]
    },
    {
        name: "Remove.bg",
        description: "AI-powered background removal tool for images in seconds.",
        fullDescription: "Remove.bg uses AI to automatically remove image backgrounds. Perfect for product photos, portraits, and any image where you need a clean background.",
        category: "Image Editing",
        url: "https://www.remove.bg",
        badge: "",
        emoji: "🎯",
        rating: "4.7",
        users: "50M+",
        releaseYear: "2018",
        features: [
            "Automatic background removal",
            "High-quality edge detection",
            "Batch processing",
            "API access",
            "Preview before download",
            "Multiple export formats",
            "Browser and desktop apps",
            "Integration with design tools"
        ],
        pricing: [
            { name: "Free", description: "50 credits/month (0.25 MP)", price: "Free", billingPeriod: "" },
            { name: "Starter", description: "100 MB exports/month", price: "$9", billingPeriod: "month" },
            { name: "Professional", description: "1 GB exports/month", price: "$39", billingPeriod: "month" }
        ],
        useCases: [
            { emoji: "🛍️", title: "E-commerce", description: "Clean product photos quickly" },
            { emoji: "📸", title: "Photography", description: "Professional portrait editing" },
            { emoji: "📱", title: "Social Media", description: "Create custom graphics" }
        ],
        pros: [
            "Incredibly easy to use",
            "Fast and accurate results",
            "Free tier generous",
            "Great for batch processing",
            "API for automation"
        ],
        cons: [
            "Limited to background removal",
            "Can struggle with complex edges",
            "API requires technical knowledge",
            "Paid tiers needed for heavy use"
        ]
    }
];

// ---- RENDER TOOL CARDS ----------------------

function renderTools(toolsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    toolsArray.slice(0, 6).forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        const toolUrl = `tool-detail.html?tool=${encodeURIComponent(tool.name)}`;
        card.innerHTML = `
            ${tool.badge ? `<span class="tool-badge ${tool.badge.toLowerCase()}">${tool.badge}</span>` : ""}
            <div class="tool-category-label">${tool.category}</div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${toolUrl}">Learn More →</a>
        `;
        container.appendChild(card);
    });
}

// ---- SEARCH FUNCTIONALITY -------------------

function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();

        const allTools = [
            ...codeTools.map(t => ({ ...t, gridId: "codeToolsGrid" })),
            ...textTools.map(t => ({ ...t, gridId: "textToolsGrid" })),
            ...imageTools.map(t => ({ ...t, gridId: "imageToolsGrid" }))
        ];

        if (query === "") {
            // Reset to defaults
            renderTools(codeTools, "codeToolsGrid");
            renderTools(textTools, "textToolsGrid");
            renderTools(imageTools, "imageToolsGrid");
            return;
        }

        const filtered = allTools.filter(t =>
            t.name.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query) ||
            t.category.toLowerCase().includes(query)
        );

        // Clear all grids
        ["codeToolsGrid", "textToolsGrid", "imageToolsGrid"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = "";
        });

        if (filtered.length === 0) {
            const firstGrid = document.getElementById("codeToolsGrid");
            if (firstGrid) {
                firstGrid.innerHTML = `<p class="no-results">No tools found for "<strong>${query}</strong>". Try a different keyword.</p>`;
            }
            return;
        }

        // Group filtered by gridId
        const grouped = {};
        filtered.forEach(tool => {
            if (!grouped[tool.gridId]) grouped[tool.gridId] = [];
            grouped[tool.gridId].push(tool);
        });

        Object.entries(grouped).forEach(([gridId, tools]) => {
            const container = document.getElementById(gridId);
            if (!container) return;
            tools.forEach(tool => {
                const card = document.createElement("div");
                card.className = "tool-card";
                const toolUrl = `tool-detail.html?tool=${encodeURIComponent(tool.name)}`;
                card.innerHTML = `
                    ${tool.badge ? `<span class="tool-badge ${tool.badge.toLowerCase()}">${tool.badge}</span>` : ""}
                    <div class="tool-category-label">${tool.category}</div>
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <a href="${toolUrl}">Learn More →</a>
                `;
                container.appendChild(card);
            });
        });
    });
}

// ---- FORM SUBMISSION -------------------------

function initForm() {
    const form = document.getElementById("toolForm");
    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const msg = document.getElementById("message");
        const submitBtn = form.querySelector("button[type='submit']");

        if (!msg) return;

        // Get form data
        const formData = {
            name: document.getElementById("name").value.trim(),
            url: document.getElementById("url").value.trim(),
            description: document.getElementById("description").value.trim(),
            plan: document.getElementById("plan").value,
            email: form.querySelector("input[type='email']").value.trim()
        };

        // Validate form
        if (!formData.name || !formData.url || !formData.description || !formData.plan || !formData.email) {
            msg.className = "error-message";
            msg.innerText = "❌ Please fill in all fields";
            return;
        }

        // Show loading state
        msg.className = "info-message";
        msg.innerText = "⏳ Submitting your tool...";
        submitBtn.disabled = true;
        submitBtn.innerText = "Submitting...";

        try {
            // Send to backend
            const response = await fetch("http://localhost:5000/api/tools/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                msg.className = "success-message";
                msg.innerText = `✅ ${result.message}\n\nYour Submission ID: ${result.submissionId}`;
                form.reset();
                submitBtn.innerText = "Submit Tool →";
                submitBtn.disabled = false;
            } else {
                msg.className = "error-message";
                msg.innerText = `❌ ${result.error || "Failed to submit tool"}`;
                submitBtn.innerText = "Submit Tool →";
                submitBtn.disabled = false;
            }
        } catch (error) {
            console.error("Submission error:", error);
            msg.className = "error-message";
            msg.innerText = "❌ Unable to connect to server. Make sure the backend is running on http://localhost:5000";
            submitBtn.innerText = "Submit Tool →";
            submitBtn.disabled = false;
        }
    });
}

// ---- INIT ------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    renderTools(codeTools, "codeToolsGrid");
    renderTools(textTools, "textToolsGrid");
    renderTools(imageTools, "imageToolsGrid");
    initSearch();
    initForm();
});