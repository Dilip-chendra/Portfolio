// ─────────────────────────────────────────────
// Portfolio Verified Master Data
// Source of Truth: Verified repositories, resume records, and official links.
// Zero fabricated metrics, zero invented customer counts or revenue.
// ─────────────────────────────────────────────

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  summary: string
  githubUrl: string
  liveDemoUrl?: string
  tags: string[]
  whatItIs: string
  problem: string
  approach: string
  architecture: string[]
  engineeringDecisions: string[]
  agenticComponents: string[]
  guardrails: string[]
  techStack: string[]
  validation: string
}

export interface SkillCategory {
  id: string
  title: string
  subtitle: string
  skills: string[]
}

export interface TechConnection {
  tech: string
  projects: string[]
  description: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  techTags: string[]
}

export interface ArchiveProject {
  name: string
  tagline: string
  category: string
  tech: string[]
  githubUrl: string
}

export interface Certification {
  id: string
  issuer: string
  title: string
  date: string
  category: 'Anthropic' | 'AI / ML' | 'Cloud & Emerging'
}

export interface Education {
  degree: string
  specialization: string
  institution: string
  institutionAbbr: string
  cgpa: string
  gradYear: string
  location: string
}

// ─────────────────────────────────────────────
// IDENTITY & CONTACT
// ─────────────────────────────────────────────
export const PROFILE = {
  name: 'M. DILIPCHENDRA',
  role: 'Agentic AI Engineer',
  specialization: 'LangGraph · MCP · Multi-Agent Orchestration · RAG · LLM Tool Calling',
  location: 'Hyderabad, India',
  email: 'dilip.madagari@gmail.com',
  phone: '+91 7075464029',
  github: 'https://github.com/Dilip-chendra',
  linkedin: 'https://www.linkedin.com/in/dilip-chendra/',
  coreStatement: 'BUILDING AI SYSTEMS THAT REASON, CONNECT, VALIDATE, AND EXECUTE.',
}

// ─────────────────────────────────────────────
// ABOUT / OPERATING PROFILE
// ─────────────────────────────────────────────
export const ABOUT_BLOCKS = [
  {
    eyebrow: 'OPERATING PHILOSOPHY',
    headline: 'Beyond Text Generation',
    body: 'I build agentic AI systems that bridge the gap between language models and real-world execution. Rather than relying on simple prompt-response loops, my work focuses on multi-agent runtimes where autonomous workers coordinate through structured state, invoke specialized tools, and solve multi-step operational problems.',
  },
  {
    eyebrow: 'ENGINEERING RIGOR',
    headline: 'Deterministic Controls Around Probabilistic Systems',
    body: 'Production AI fails without deterministic boundaries. I implement strict policy firewalls, state machine guardrails, cryptographic audit logs, and automated escalation pathways to ensure agents remain bounded, observable, and verifiably reliable when interacting with sensitive systems.',
  },
  {
    eyebrow: 'FULL-STACK INTEGRATION',
    headline: 'Grounding with Structured Reality',
    body: 'From low-latency FastAPI runtimes and custom Model Context Protocol (MCP) servers to ChromaDB vector search and Next.js interfaces, I build the entire operational loop — connecting unstructured intelligence to live REST APIs, SQL databases, and browser automation.',
  },
]

export const DISCIPLINES = [
  { title: 'Multi-Agent Orchestration', focus: 'LangGraph state graphs, supervisory agents, worker routing, state persistence' },
  { title: 'Tool Calling & MCP', focus: 'Model Context Protocol servers, custom REST schemas, structured tool payloads' },
  { title: 'Enterprise RAG Systems', focus: 'ChromaDB, semantic search, hybrid vector retrieval, source provenance grounding' },
  { title: 'Deterministic Guardrails', focus: 'HMAC audit verification, bounded execution, input-output schema validation' },
  { title: 'AI Platform Engineering', focus: 'Python, FastAPI, Next.js, asynchronous queues, browser automation with Playwright' },
]

// ─────────────────────────────────────────────
// FEATURED SYSTEMS (FLAGSHIPS)
// ─────────────────────────────────────────────
export const FEATURED_SYSTEMS: CaseStudy[] = [
  {
    id: 'reviveos',
    title: 'ReviveOS',
    subtitle: 'Autonomous AI Revenue Recovery Operating System',
    category: 'Autonomous Multi-Agent Runtime',
    summary: 'A governed AI revenue-recovery control plane designed to determine whether, when, and how a failed payment should be recovered rather than blindly retrying transactions.',
    githubUrl: 'https://github.com/Dilip-chendra/REVIVEOS',
    tags: ['LangGraph', 'FastAPI', 'Multi-Agent', 'Policy Firewall', 'HMAC Audit', 'MCP Ready'],
    whatItIs: 'A production-grade AI control plane that autonomously diagnoses, prioritizes, and executes recovery workflows for failed recurring subscription transactions.',
    problem: 'Traditional billing engines use naive, static retry schedules that frequently burn merchant reputation, trigger cardholder fraud alerts, and fail to recover genuine involuntary churn.',
    approach: 'ReviveOS decouples recovery decision-making into a hierarchical agent system governed by a deterministic policy firewall that calculates recovery risk, selects optimal communication or retry channels, and signs every audit decision.',
    architecture: [
      'Diagnostic Agent: Evaluates card brand codes, decline reasons, and historical recovery velocity.',
      'Strategy Supervisor: Employs LangGraph state machines to route transactions through bounded action trees.',
      'Deterministic Policy Firewall: Validates candidate agent decisions against hard business rules and compliance constraints before execution.',
      'Cryptographic Audit Ledger: Generates HMAC/SHA-256 signatures for every state transition to ensure tamper-evident execution.',
      'Human-in-the-Loop Escalation: Automatically diverts ambiguous or high-value disputed payments to human support queues.',
    ],
    engineeringDecisions: [
      'Implemented stateful workflow graphs using LangGraph to guarantee idempotent recovery attempts across asynchronous worker nodes.',
      'Enforced strict Pydantic schemas on all agent outputs to prevent schema drift during automated API calls.',
      'Built MCP-compatible tool abstractions allowing external payment gateway adapters (Stripe, Razorpay) to be plugged in dynamically.',
    ],
    agenticComponents: [
      'Multi-Agent Coordination: Supervisor-worker graph structure with cycle detection.',
      'Autonomous Reasoning: Context-aware failure classification based on customer telemetry.',
      'Tool Execution: Automated dispatch of targeted customer verification links and webhook callbacks.',
    ],
    guardrails: [
      'Hard retry velocity caps to prevent card network throttling.',
      'HMAC/SHA-256 state verification on recovery payloads.',
      'Zero autonomous execution permissions on high-risk card fraud classifications.',
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'Pydantic', 'HMAC/SHA-256', 'REST APIs', 'Webhooks'],
    validation: 'Architecture verified through automated unit test suites covering deterministic firewall enforcement, HMAC payload integrity, and multi-agent state transition graphs.',
  },
  {
    id: 'ai-business-builder',
    title: 'AI Business Builder',
    subtitle: 'AI-Native Business Operating System',
    category: 'Full-Stack Agentic Platform',
    summary: 'A full-stack AI platform for generating, operating, marketing, analyzing, and improving digital businesses from a single unified workspace.',
    githubUrl: 'https://github.com/Dilip-chendra/AI-Business-Builder',
    tags: ['FastAPI', 'Next.js', 'Playwright', 'AI Studio', 'Browser Automation', 'OAuth 2.0'],
    whatItIs: 'An end-to-end digital enterprise platform that translates high-level venture prompts into complete digital products, automated marketing campaigns, and analytics instrumentation.',
    problem: 'Launching and operating digital initiatives requires coordinating fragmented tools across market research, copy generation, browser workflows, deployment, and performance monitoring.',
    approach: 'Unified the entire operational lifecycle into an AI Studio runtime with dynamic LLM provider routing, browser automation workers, and project workspace isolation.',
    architecture: [
      'AI Provider Gateway: Intelligently routes tasks between Claude and OpenAI models based on token economics and reasoning depth.',
      'Browser Automation Engine: Uses Playwright to autonomously perform competitive intelligence, social verification, and asset staging.',
      'Workspace Manager: Provides isolated state stores for assets, marketing funnels, and codebase artifacts.',
      'Campaign Dispatcher: Orchestrates automated marketing generation, landing page drafting, and analytics tracking.',
    ],
    engineeringDecisions: [
      'Selected FastAPI for the backend to support asynchronous browser automation jobs without blocking conversational generation threads.',
      'Engineered clean OAuth 2.0 flows for third-party platform integrations.',
      'Architected modular workspace state serialization to enable persistent project snapshots.',
    ],
    agenticComponents: [
      'Market Synthesis Agent: Scrapes and evaluates competitive positioning.',
      'Product Drafter Agent: Generates schema-compliant application templates and marketing collateral.',
      'Automated Browser Worker: Headless browser tasks executing repeatable research protocols.',
    ],
    guardrails: [
      'Sandboxed browser execution environments.',
      'Rate-limited provider API invocation with exponential backoff.',
      'Strict schema validation on generated venture deliverables.',
    ],
    techStack: ['FastAPI', 'Next.js', 'Python', 'TypeScript', 'Playwright', 'Tailwind CSS', 'OAuth 2.0'],
    validation: 'Full-stack platform tested across end-to-end user journeys including venture creation, headless scraping runs, and multi-provider generation pipelines.',
  },
  {
    id: 'researchflow-ai',
    title: 'ResearchFlow AI',
    subtitle: 'Autonomous Competitive Intelligence & Evidence-Backed Research System',
    category: 'Evidence-Grounded Intelligence',
    summary: 'A platform for live competitor research, evidence extraction, source provenance, conflict detection, intelligence synthesis, and human-reviewed execution workflows.',
    githubUrl: 'https://github.com/Dilip-chendra/ResearchFlow.AI',
    tags: ['LangGraph', 'RAG', 'ChromaDB', 'Source Provenance', 'Conflict Detection', 'FastAPI'],
    whatItIs: 'An autonomous research engine that continuously analyzes competitor ecosystems, verifies claims against grounded sources, and flags contradictory market intelligence.',
    problem: 'Generic LLM research hallucinated facts, lacks verifiable source attribution, and cannot detect when two credible sources assert opposing market realities.',
    approach: 'Constructed an evidence-backed extraction pipeline where every generated finding is explicitly linked to raw document or web spans, complete with confidence scores and cross-source conflict detection.',
    architecture: [
      'Ingestion & Web Harvester: Fetches public competitor filings, documentation, and product changes.',
      'Chunking & Vector Store: Indexes multi-modal research artifacts in ChromaDB with tenant-scoped metadata.',
      'Provenance Engine: Annotates extracted intelligence claims with URL, timestamp, and verbatim citation spans.',
      'Conflict Resolver: Evaluates extracted statements across sources to identify conflicting pricing, feature releases, or roadmap changes.',
    ],
    engineeringDecisions: [
      'Enforced multi-tenant isolation at the vector database layer to maintain strict research boundary security.',
      'Designed a confidence scoring algorithm factoring in source recency, authority, and citation frequency.',
    ],
    agenticComponents: [
      'Research Orchestrator: Formulates multi-angle search queries and explores reference graphs.',
      'Claim Grounding Agent: Maps assertions to primary textual evidence.',
      'Synthesis Specialist: Drafts executive market briefs with highlighted confidence ratings.',
    ],
    guardrails: [
      'Zero ungrounded claims policy: Every synthesis must map to at least one verified vector chunk.',
      'Automated alert generation on detected data conflicts.',
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Vector Embeddings', 'Pydantic'],
    validation: 'Tested on live competitor corpora with verifiable citation mapping and multi-source conflict reconciliation.',
  },
  {
    id: 'cityforge-ai',
    title: 'CITYFORGE AI',
    subtitle: 'Urban Economic Intelligence & Opportunity Discovery',
    category: 'Spatial Intelligence System',
    summary: 'A data-driven system that analyzes real city signals to identify unmet demand, supply gaps, geographic gaps, affordability gaps, and business opportunities.',
    githubUrl: 'https://github.com/Dilip-chendra/CITYFORGE-AI',
    tags: ['Spatial Data', 'OpenStreetMap', 'Overpass API', 'Opportunity Scoring', 'Python'],
    whatItIs: 'An urban economic intelligence engine that processes spatial geography, public infrastructure signals, and commercial densities to uncover high-probability business opportunities.',
    problem: 'Urban entrepreneurs and commercial operators traditionally rely on intuitive guesswork or expensive, outdated demographic surveys to evaluate location feasibility.',
    approach: 'Ingests real-time spatial graph data via OpenStreetMap and Overpass API to construct geographic opportunity heatmaps based on infrastructure density, service voids, and population flow.',
    architecture: [
      'Overpass Query Pipeline: Programmatically queries geospatial entity relationships across targeted metropolitan coordinates.',
      'Spatial Gap Analyzer: Computes radial density indices to identify underserved commercial clusters.',
      'Opportunity Scoring Model: Ranks geographic sectors by supply-demand variance and pedestrian accessibility.',
      'Commercial Recommendation Agent: Synthesizes spatial signals into structured opportunity profiles.',
    ],
    engineeringDecisions: [
      'Optimized Overpass spatial queries with bounding box caching to avoid upstream rate limits.',
      'Created deterministic scoring matrices to prevent model hallucination in geographic evaluation.',
    ],
    agenticComponents: [
      'Spatial Insight Synthesizer: Translates raw amenity coordinates into actionable economic insights.',
      'Location Opportunity Evaluator: Compares commercial amenities against residential population density.',
    ],
    guardrails: [
      'Strict boundary validation on coordinate inputs.',
      'Sanitized geo-JSON data pipelines.',
    ],
    techStack: ['Python', 'OpenStreetMap', 'Overpass API', 'GeoJSON', 'FastAPI', 'Data Analytics'],
    validation: 'Demonstrated on live metropolitan datasets with automated discovery of geographic amenity voids and commercial opportunities.',
  },
  {
    id: 'veyra',
    title: 'Veyra',
    subtitle: 'Photorealistic AI Human Interviewer Platform',
    category: 'Interactive Multi-Modal Platform',
    summary: 'An AI interview platform combining human-video interviewer personas, adaptive questioning, voice interaction, live coding, system design, and evidence-backed evaluation.',
    githubUrl: 'https://github.com/Dilip-chendra/Veyra',
    tags: ['React', 'TypeScript', 'Monaco Editor', 'Voice AI', 'Live Coding', 'Adaptive Engine'],
    whatItIs: 'A technical screening platform that pairs an adaptive AI interviewer persona with real-time coding execution and whiteboard system design capabilities.',
    problem: 'Standard AI interviewers feel mechanical, rely on static question banks, and fail to provide interactive technical environments for live problem solving.',
    approach: 'Integrated video persona synchronization with voice interactions, an embedded Monaco code editor, and an adaptive questioning engine that probes deeper based on candidate answers.',
    architecture: [
      'Adaptive Questioning Core: Evaluates candidate answers dynamically to generate follow-up questions tailored to technical depth.',
      'Monaco Workspace: Integrated syntax-highlighted IDE for live algorithmic challenges.',
      'System Design Canvas: Interactive space for architecture diagramming and system reasoning.',
      'Evidence-Backed Rubric: Generates granular feedback reports mapped directly to candidate code and spoken explanations.',
    ],
    engineeringDecisions: [
      'Integrated Monaco editor for native IDE performance and TypeScript autocompletion.',
      'Designed a modular question state machine that adapts difficulty without losing interview structure.',
    ],
    agenticComponents: [
      'Interviewer Persona Agent: Delivers contextual spoken cues and probes edge cases.',
      'Code Evaluator: Analyzes computational complexity and code correctness.',
    ],
    guardrails: [
      'Deterministic evaluation rubrics ensuring standardized scoring criteria across sessions.',
      'Session timeout and state isolation safeguards.',
    ],
    techStack: ['React', 'TypeScript', 'Monaco Editor', 'Python', 'FastAPI', 'Voice AI'],
    validation: 'Evaluated across technical mock sessions covering algorithm challenges and distributed system architecture reviews.',
  },
  {
    id: 'enterprise-brain-copilot',
    title: 'Enterprise Brain OS & AI Copilot',
    subtitle: 'Governed Knowledge Retrieval & MCP Tool Execution Runtimes',
    category: 'Enterprise RAG & MCP Architecture',
    summary: 'Enterprise intelligence systems implementing grounded vector search via ChromaDB alongside Model Context Protocol (MCP) integrations for automated cloud workflows.',
    githubUrl: 'https://github.com/Dilip-chendra',
    tags: ['Model Context Protocol', 'ChromaDB', 'Enterprise RAG', 'LangChain', 'Vector Search'],
    whatItIs: 'A dual-engine enterprise infrastructure combining a centralized knowledge vector system (Brain OS) with an agentic operations copilot leveraging MCP.',
    problem: 'Enterprise operational teams struggle with siloed documentation and cannot safely permit LLMs to execute administrative operations without strict protocol isolation.',
    approach: 'Leveraged ChromaDB for semantic document retrieval and implemented custom Model Context Protocol servers to expose enterprise APIs as strictly typed agent tools.',
    architecture: [
      'Enterprise Document Ingestion: Extracts and parses structured and unstructured internal docs.',
      'ChromaDB Vector Store: Provides semantic document search with metadata filtering.',
      'MCP Tool Server: Exposes operational tools (database lookups, service status, ticket queries) via standard MCP protocols.',
      'Agentic Copilot Runtime: Synthesizes knowledge while safely triggering approved tool operations.',
    ],
    engineeringDecisions: [
      'Adopted the Model Context Protocol to decouple agent reasoning from specific third-party API client code.',
      'Implemented strict chunking and retrieval re-ranking to maximize context density in prompt budgets.',
    ],
    agenticComponents: [
      'Document Retriever: Semantic grounding with source verification.',
      'Tool Execution Supervisor: Schema validation prior to invoking backend MCP tools.',
    ],
    guardrails: [
      'Read-only default permissions on MCP tools.',
      'Role-based access filtering at vector retrieval time.',
    ],
    techStack: ['Python', 'ChromaDB', 'Model Context Protocol (MCP)', 'LangChain', 'FastAPI', 'Docker'],
    validation: 'Grounded retrieval tested on enterprise document collections with verified semantic recall and tool invocation contracts.',
  },
]

// ─────────────────────────────────────────────
// TECHNICAL ARSENAL
// ─────────────────────────────────────────────
export const TECH_CATEGORIES: SkillCategory[] = [
  {
    id: 'agentic',
    title: 'Agentic AI & Tooling',
    subtitle: 'Autonomous workflows, protocol standardization & orchestration',
    skills: [
      'LangGraph',
      'LangChain',
      'Model Context Protocol (MCP)',
      'Claude APIs',
      'OpenAI APIs',
      'LLM Tool Calling',
      'Multi-Agent Orchestration',
    ],
  },
  {
    id: 'retrieval',
    title: 'Data & Retrieval',
    subtitle: 'Vector representations, indexing & factual grounding',
    skills: [
      'RAG',
      'ChromaDB',
      'Vector Databases',
      'Embeddings',
      'Semantic Search',
      'Data Preprocessing',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'Backend runtimes, interfaces & reliable APIs',
    skills: [
      'Python',
      'FastAPI',
      'TypeScript',
      'React',
      'Node.js',
      'SQL',
      'REST APIs',
      'Webhooks',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: 'Deployment, isolation & operational toolchains',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Google Cloud / Vertex AI',
      'Railway',
      'Linux CLI',
    ],
  },
]

export const TECH_CONNECTIONS: TechConnection[] = [
  {
    tech: 'Model Context Protocol (MCP)',
    projects: ['Enterprise AI Copilot', 'ReviveOS', 'Agentic Systems'],
    description: 'Standardized agent-to-tool protocol enabling LLMs to safely query data and invoke actions across isolated backend systems.',
  },
  {
    tech: 'Enterprise RAG & ChromaDB',
    projects: ['Enterprise Brain OS', 'ResearchFlow AI', 'Enterprise AI Copilot'],
    description: 'Grounded vector architectures providing semantic document understanding with strict source provenance and zero hallucination.',
  },
  {
    tech: 'Python & FastAPI',
    projects: ['ReviveOS', 'AI Business Builder', 'CITYFORGE AI'],
    description: 'High-throughput asynchronous backends designed for multi-agent loops, state machine execution, and live browser automation.',
  },
  {
    tech: 'LangGraph & Multi-Agent',
    projects: ['ReviveOS', 'ResearchFlow AI', 'Autonomous Workflows'],
    description: 'Stateful graph runtimes with cyclical routing, supervisor-worker coordination, and deterministic policy firewalls.',
  },
]

// ─────────────────────────────────────────────
// PROFESSIONAL EXPERIENCE
// ─────────────────────────────────────────────
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'flyrank',
    company: 'FlyRank AI',
    role: 'Machine Learning Intern',
    period: 'Jul 2026 – Sep 2026',
    location: 'Remote',
    bullets: [
      'Engineered Python-based preprocessing pipelines to eliminate manual data bottlenecks in analytics workflows.',
      'Cleaned, normalized, and structured large multi-dimensional unstructured datasets for model experimentation.',
      'Created curated evaluation sets for analyzing predictive model behavior, stability, and edge-case anomalies.',
      'Improved the reliability of downstream ML workflows through disciplined data hygiene and structured evaluation metrics.',
    ],
    techTags: ['Python', 'Pandas', 'NumPy', 'Data Pipelines', 'Model Evaluation'],
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    role: 'Machine Learning Intern (NLP & Voice AI)',
    period: 'Nov 2025 – Jan 2026',
    location: 'Remote',
    bullets: [
      'Researched, built, and evaluated a modular NLP pipeline focused on speech-oriented interaction workflows.',
      'Prototyped conversational audio transcription and context-aware LLM response generation systems in Python.',
      'Documented critical failure points, latency bottlenecks, and hallucination cases during pre-deployment testing.',
      'Iterated on conversational system behavior and reliability under mentorship of senior engineering leads.',
    ],
    techTags: ['NLP', 'Voice AI', 'Python', 'Conversational Pipelines', 'Model Testing'],
  },
  {
    id: 'techsonix',
    company: 'Techsonix Solutions Pvt. Ltd.',
    role: 'Python Developer Intern',
    period: 'Sep 2023 – Nov 2023',
    location: 'Hyderabad, Telangana',
    bullets: [
      'Built scalable Python automation scripts to eliminate repetitive manual data entry and system reconciliation.',
      'Integrated REST APIs across external services to connect fragmented backend applications into automated workflows.',
      'Maintained disciplined Git-based team collaboration, code reviews, and Linux terminal tooling.',
    ],
    techTags: ['Python', 'REST APIs', 'Automation', 'Git', 'Linux CLI'],
  },
]

// ─────────────────────────────────────────────
// REPOSITORY ARCHIVE (MORE SYSTEMS)
// ─────────────────────────────────────────────
export const REPOSITORY_ARCHIVE: ArchiveProject[] = [
  {
    name: 'AI-OPPORTUNITY-OS',
    tagline: 'Urban spatial intelligence system analyzing commercial gaps and unmet demand signals.',
    category: 'Spatial Analytics',
    tech: ['Python', 'OpenStreetMap', 'FastAPI'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-OPPORTUNITY-OS',
  },
  {
    name: 'SharePulse-AI',
    tagline: 'Automated social sentiment extraction and market signal analysis pipeline.',
    category: 'Market Intelligence',
    tech: ['Python', 'NLP', 'Data Pipelines'],
    githubUrl: 'https://github.com/Dilip-chendra/SharePulse-AI',
  },
  {
    name: 'AI-Speech-Translation-System',
    tagline: 'End-to-end voice transcription, neural translation, and synthesized speech delivery.',
    category: 'Voice AI / Audio',
    tech: ['Python', 'Whisper', 'Deep Learning'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-Speech-Translation-System',
  },
  {
    name: 'FlyRank',
    tagline: 'Predictive modeling and dataset evaluation pipeline developed during machine learning tenure.',
    category: 'Applied ML',
    tech: ['Python', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/Dilip-chendra/FlyRank',
  },
  {
    name: 'n8n-ai-workflows',
    tagline: 'Production-ready orchestration workflows connecting LLM tools, webhooks, and REST backends.',
    category: 'Automation / Integration',
    tech: ['n8n', 'Webhooks', 'REST APIs'],
    githubUrl: 'https://github.com/Dilip-chendra/n8n-ai-workflows',
  },
  {
    name: 'AI-CHAT-WITH-PDF',
    tagline: 'Conversational RAG interface providing grounded vector Q&A over complex multi-page PDF documents.',
    category: 'RAG & Retrieval',
    tech: ['LangChain', 'ChromaDB', 'Python'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-CHAT-WITH-PDF',
  },
  {
    name: 'AI-Disease-Prediction',
    tagline: 'Machine learning diagnostic classification engine evaluating patient symptoms against structured models.',
    category: 'Healthcare ML',
    tech: ['Scikit-Learn', 'Pandas', 'Flask'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-Disease-Prediction',
  },
  {
    name: 'fullstack-langchain-chatbot',
    tagline: 'Full-stack conversational application with session memory, tool calling, and streaming responses.',
    category: 'Full-Stack AI',
    tech: ['React', 'LangChain', 'FastAPI'],
    githubUrl: 'https://github.com/Dilip-chendra/fullstack-langchain-chatbot',
  },
  {
    name: 'AI-TEXT-GENERATOR',
    tagline: 'Controllable text generation platform with parameterized temperature and decoding strategies.',
    category: 'Generative AI',
    tech: ['Python', 'PyTorch', 'Transformers'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-TEXT-GENERATOR',
  },
  {
    name: 'AI-Web-Summarizer',
    tagline: 'Intelligent web scraping and hierarchical synthesis pipeline extracting key insights from longform articles.',
    category: 'NLP Tools',
    tech: ['Python', 'BeautifulSoup', 'FastAPI'],
    githubUrl: 'https://github.com/Dilip-chendra/AI-Web-Summarizer',
  },
  {
    name: 'Myntra-Clone',
    tagline: 'High-performance e-commerce frontend replica with product catalog filtering and checkout flows.',
    category: 'Web Engineering',
    tech: ['React', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/Dilip-chendra/Myntra-Clone',
  },
  {
    name: 'resume-ai',
    tagline: 'Automated resume analysis and keyword alignment tool optimized for engineering applicant criteria.',
    category: 'Productivity AI',
    tech: ['Python', 'LangChain', 'FastAPI'],
    githubUrl: 'https://github.com/Dilip-chendra/resume-ai',
  },
]

// ─────────────────────────────────────────────
// CERTIFICATION VAULT (VERIFIED ONLY)
// ─────────────────────────────────────────────
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'mcp-advanced',
    issuer: 'Anthropic',
    title: 'Model Context Protocol: Advanced Topics',
    date: 'Aug 2026',
    category: 'Anthropic',
  },
  {
    id: 'claude-code',
    issuer: 'Anthropic',
    title: 'Claude Code in Action',
    date: 'Aug 2026',
    category: 'Anthropic',
  },
  {
    id: 'langchain-guvi',
    issuer: 'HCL GUVI',
    title: 'LangChain Certification',
    date: 'Jun 2026',
    category: 'AI / ML',
  },
  {
    id: 'generative-ai',
    issuer: 'Internshala',
    title: 'Generative AI Professional Training',
    date: '2025',
    category: 'AI / ML',
  },
  {
    id: 'ibm-skillsbuild',
    issuer: 'IBM SkillsBuild / 1M1B',
    title: 'Artificial Intelligence & Emerging Technologies',
    date: '2024',
    category: 'Cloud & Emerging',
  },
]

// ─────────────────────────────────────────────
// EDUCATION (VERIFIED RECORD)
// ─────────────────────────────────────────────
export const EDUCATION_RECORD: Education = {
  degree: 'Bachelor of Technology (B.Tech)',
  specialization: 'Artificial Intelligence and Data Science',
  institution: 'Nalla Malla Reddy Engineering College',
  institutionAbbr: 'NMREC',
  cgpa: '8.5 / 10',
  gradYear: 'Expected Graduation: 2027',
  location: 'Hyderabad, Telangana, India',
}
