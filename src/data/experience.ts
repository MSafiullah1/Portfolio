export type Role = {
  title: string
  company: string
  period: string
  location: string
  current?: boolean
  description: string[]
  skills: string[]
}

export const professional: Role[] = [
  {
    title: "Machine Learning Engineer",
    company: "Nymble Leap",
    period: "Mar 2025 - Present",
    location: "Lahore, Pakistan",
    current: true,
    description: [
      "Designed an AI-powered legal research and drafting assistant using LLMs, RAG pipelines, and LangChain with domain-specific knowledge integration",
      "Engineered agentic reasoning pipelines (ReAct-style) enabling multi-step planning, tool integration, and iterative refinement",
      "Architected production full-stack system: FastAPI backend, React frontend, PostgreSQL, Supabase Auth with RBAC, Pydantic models, Alembic migrations, Stripe, and GCS",
      "Built AI Voice-Bot reservation system (Vapi, Retell, Bland AI) automating customer interactions with human-like conversations",
      "Automated testing pipelines for LLM-based systems, improving reliability and reducing manual evaluation time",
    ],
    skills: ["LLMs", "RAG", "LangChain", "FastAPI", "React", "PostgreSQL", "Supabase"],
  },
]

export const research: Role[] = [
  {
    title: "Research, Federated Learning",
    company: "CITY at LUMS",
    period: "Nov 2024 - Mar 2025",
    location: "Lahore, Pakistan",
    description: [
      "Investigated latent space alignment techniques to address data heterogeneity in Federated Learning, improving client and global model convergence",
      "Proposed two novel methods: FedGHBL (Gradient Harmonization Between Losses) and Adversarial Feature Alignment for non-IID settings",
      "Achieved 80.16% accuracy on non-IID CIFAR-10, outperforming FedAvg and SCAFFOLD benchmarks by up to +11%",
      "Evaluated KL Divergence, MMD, and Wasserstein Distance alignment techniques across simulated label and quantity skews",
    ],
    skills: ["PyTorch", "Federated Learning", "CIFAR-10", "TinyVGG"],
  },
  {
    title: "Research, Multi-Agent Path Finding with LLMs",
    company: "CITY at LUMS",
    period: "Sep 2024 - Apr 2025",
    location: "Lahore, Pakistan",
    description: [
      "Fine-tuned GPT-3.5 Turbo as a controller for warehouse environments, generating real-time step-by-step commands for agents",
      "Integrated feedback loop mechanism with corrective prompts, achieving 94% accuracy in single-agent and 80% in multi-agent scenarios",
      "Applied BFS for single-agent ground-truth and Conflict-Based Search (CBS) for multi-agent collision avoidance datasets",
    ],
    skills: ["GPT-3.5", "Fine-tuning", "CBS", "BFS"],
  },
  {
    title: "Research Intern, LLM Fine-tuning",
    company: "Center for Speech and Language Technologies (CSaLT)",
    period: "Jan 2024 - May 2024",
    location: "Lahore, Pakistan",
    description: [
      "Fine-tuned Mistral 7B for medical data analysis and doctor-patient dialogue generation",
      "Designed evaluation pipeline using BLEU and BERT Score with a quality rating scale",
      "Created verified medical dataset (100-150 points) adhering to ethical data guidelines",
    ],
    skills: ["Mistral 7B", "NLP", "BLEU", "BERTScore"],
  },
  {
    title: "Research Intern, Vision Transformers",
    company: "CITY at LUMS",
    period: "May 2023 - Dec 2023",
    location: "Lahore, Pakistan",
    description: [
      "Researched efficiency of Vision Transformers (ViTs) through token merging techniques",
      "Investigated methods to reduce computational costs while preserving model accuracy",
    ],
    skills: ["Vision Transformers", "Token Merging", "Model Optimization"],
  },
  {
    title: "Brain-Computer Interface Internship",
    company: "LUMS",
    period: "Jul 2024",
    location: "Lahore, Pakistan",
    description: [
      "Completed intensive BCI program focused on ECG/EEG data analysis and real-time classification algorithms",
      "Applied AI/ML algorithms to Brain-Computer Interface challenges using Python",
    ],
    skills: ["BCI", "EEG/ECG", "Signal Processing", "Python"],
  },
]

export const teaching: Role[] = [
  {
    title: "Teaching Fellow, Deep Vision-Language Models (Graduate)",
    company: "MS AI, LUMS",
    period: "Jan 2026 - Present",
    location: "Lahore, Pakistan",
    current: true,
    description: [
      "Designed assignments on deep generative modeling: diffusion models (DDPM, DDIM), score-based models (NCSN), flow matching, Langevin dynamics, and discrete diffusion",
      "Evaluated students through vivas on multimodal architectures: VLMs, CLIP-style cross-modal alignment, SFT, LoRA, and RL methods (DPO, GRPO, PPO)",
    ],
    skills: ["Diffusion Models", "VLMs", "CLIP", "RL", "LoRA"],
  },
  {
    title: "Adjunct Faculty, MS AI",
    company: "LUMS",
    period: "Aug 2025 - Sep 2025",
    location: "Lahore, Pakistan",
    description: [
      "Led the bootcamp for Master's in AI batch of 2025, guiding 120+ graduate students through foundational AI concepts",
      "Taught mathematics for AI, programming fundamentals, algorithms, and hands-on Python (Pandas, NumPy)",
      "Delivered live sessions on vector calculus, probability, and core topics essential for AI",
    ],
    skills: ["Teaching", "Applied Mathematics", "Python", "Curriculum Design"],
  },
  {
    title: "TA, LLM Systems (AI 602, Graduate)",
    company: "MS AI, LUMS",
    period: "Jan 2025 - Jul 2025",
    location: "Lahore, Pakistan",
    description: [
      "Designed and led weekly labs on LLM quantization, Agentic AI, RAG pipelines, fine-tuning, prompt engineering, and multi-modal AI",
      "Supervised capstone projects across healthcare, education, retail, and legal advisory domains",
      "Guided end-to-end LLM development from business problem identification to production deployment",
    ],
    skills: ["LLM Systems", "RAG", "Agentic AI", "Fine-Tuning"],
  },
  {
    title: "TA, Operating Systems (CS 370)",
    company: "LUMS",
    period: "Jun 2024 - Dec 2024",
    location: "Lahore, Pakistan",
    description: [
      "Supported ~220 students in mastering memory management, threading, file systems, and virtual machines",
      "Designed and tested assignments: Shell, Memory Allocator, Threading Library, and File System",
    ],
    skills: ["Operating Systems", "C", "Systems Programming"],
  },
  {
    title: "TA, Artificial Intelligence (CS 331)",
    company: "LUMS",
    period: "Jan 2024 - May 2024",
    location: "Lahore, Pakistan",
    description: [
      "Supported ~133 students with assignments on KNN, Neural Networks, SVMs, search algorithms, and decision trees",
      "Conducted tutorials and office hours providing guidance on theory and implementation",
    ],
    skills: ["AI", "Neural Networks", "Search Algorithms"],
  },
  {
    title: "TA, Discrete Maths (CS 210)",
    company: "LUMS",
    period: "Sep 2023 - Dec 2023",
    location: "Lahore, Pakistan",
    description: [
      "Guided students through logic, proof techniques, set theory, combinatorics, graph theory, and recurrence relations",
    ],
    skills: ["Discrete Mathematics", "Logic", "Graph Theory"],
  },
  {
    title: "Peer Advisor, School of Science & Engineering",
    company: "LUMS",
    period: "Aug 2024 - Jul 2025",
    location: "Lahore, Pakistan",
    description: [
      "Mentored freshmen through one-on-one sessions and group workshops, fostering a supportive transition to university life",
    ],
    skills: ["Mentoring", "Leadership"],
  },
]

export const researchInterests = [
  "Federated Learning",
  "Multi-Agent Systems with LLMs",
  "Vision Transformers",
  "Generative AI (Diffusion, VLMs)",
  "Agentic AI Systems",
]

export const labs = [
  { name: "CITY at LUMS", focus: "Urban informatics, ML systems, multi-agent research" },
  { name: "CSaLT at LUMS", focus: "Speech and language technologies, LLM fine-tuning" },
]

export const tabs = [
  { id: 'professional', label: 'Professional', data: professional },
  { id: 'research', label: 'Research', data: research },
  { id: 'teaching', label: 'Teaching', data: teaching },
] as const
