export type FlagshipProject = {
  /** Stable anchor id, used to deep-link a homepage card to its case study. */
  slug: string
  title: string
  period: string
  affiliation: string
  /** One-line framing for the homepage card. */
  summary: string
  /** Headline number pulled out of `summary` for emphasis, if there is one. */
  metric?: string
  problem: string
  approach: string
  stack: string[]
  result: string
  repo?: string
  demo?: string
}

export type CompactProject = {
  title: string
  period: string
  description: string
  stack: string[]
  repo?: string
}

export const flagship: FlagshipProject[] = [
  {
    slug: 'ai-legal-document-review',
    title: 'AI Legal Document Review Assistant',
    period: 'Aug 2025 - Present',
    affiliation: 'Nymble Leap',
    summary:
      'Agentic LLM workflow for automated clause-level legal review with RAG-powered few-shot prompting.',
    problem:
      'Attorneys spend significant time on manual clause-level document review requiring legal knowledge.',
    approach:
      'Built an agentic LLM workflow for document-wide legal edits from natural language instructions. Developed a RAG pipeline using ChromaDB for few-shot prompting with semantically similar human-edited clauses. ReAct-style orchestration enables multi-step reasoning over legal documents.',
    stack: ['LLMs', 'RAG', 'ChromaDB', 'LangChain', 'FastAPI', 'React', 'PostgreSQL', 'GCS', 'Docker'],
    result: 'Automated clause-level review for tasks traditionally requiring manual lawyer intervention.',
  },
  {
    slug: 'federated-learning-heterogeneity',
    title: 'Mitigating Data Heterogeneity in Federated Learning',
    period: 'Nov 2024 - Mar 2025',
    affiliation: 'CITY at LUMS',
    summary:
      'Novel alignment methods (FedGHBL, FedAdversarial) reaching 80.16% accuracy on non-IID CIFAR-10, outperforming FedAvg and SCAFFOLD.',
    metric: '80.16% accuracy',
    problem:
      'Clients in federated learning hold heterogeneous (non-IID) datasets, causing degraded convergence and model performance.',
    approach:
      'Proposed FedGHBL (Gradient Harmonization Between Losses) and FedAdversarial (adversarial feature alignment) to reduce client drift. Evaluated KL Divergence, MMD, and Wasserstein Distance alignment across simulated label and quantity skews.',
    stack: ['Python', 'PyTorch', 'CIFAR-10', 'TinyVGG', 'Federated Learning'],
    result: 'Achieved 80.16% accuracy on non-IID data, up to +11% over FedAvg and SCAFFOLD baselines.',
    repo: 'https://github.com/MSafiullah1/Latent-Alignment-in-FL',
  },
  {
    slug: 'multi-agent-path-finding-llms',
    title: 'Multi-Agent Path Finding with LLMs',
    period: 'Sep 2024 - Apr 2025',
    affiliation: 'CITY at LUMS',
    summary:
      'Fine-tuned GPT-3.5 controller for warehouse navigation reaching 94% single-agent and 80% multi-agent accuracy.',
    metric: '94% single-agent',
    problem:
      'Coordinating multiple warehouse robots for collision-free navigation in real-time using traditional methods is computationally expensive.',
    approach:
      'Fine-tuned GPT-3.5 Turbo as a decision controller generating step-by-step commands. Integrated corrective feedback loop for error detection and prompt re-engineering. Used BFS for single-agent ground truth and CBS for multi-agent collision avoidance datasets.',
    stack: ['GPT-3.5', 'Fine-tuning', 'BFS', 'CBS', 'Python'],
    result: '94% accuracy for single-agent, 80% for multi-agent scenarios.',
  },
  {
    slug: 'llm-grader',
    title: 'LLM Grader: Automated Assignment Evaluation',
    period: 'Jan 2025 - May 2025',
    affiliation: 'Personal (TA Tool)',
    summary:
      'LLM grading pipeline for 100+ weekly notebook submissions, cutting grading time by ~95%.',
    metric: '~95% time saved',
    problem:
      'Grading 100+ Jupyter Notebook assignments weekly as a TA consumed 2-3 full days per week.',
    approach:
      'Built an LLM-powered grading system handling zipped submissions, late-penalty application, rubric-aligned grading, and personalized PDF feedback. Reports were auto-delivered via OneDrive with a consolidated grade file for LMS upload.',
    stack: ['Python', 'LLMs', 'Jupyter', 'OneDrive API'],
    result: 'Reduced grading from 2-3 days/week to 1-2 hours/week (~95% efficiency gain).',
  },
]

export const otherProjects: CompactProject[] = [
  {
    title: 'Stock Market Price Prediction',
    period: 'Feb 2025 - May 2025',
    description:
      'LSTM and sentiment-aware models combining Nasdaq-100 data with NY Times API news sentiment to predict stock trends.',
    stack: ['Python', 'LSTM', 'NLP', 'NY Times API'],
  },
  {
    title: 'Toxic Comment Classification',
    period: 'Sep 2023 - Dec 2023',
    description:
      'Compared classifiers (LR, SVM, RNN, LSTM, BERT) on Jigsaw dataset. BERT fine-tuned model achieved F1=0.81.',
    stack: ['Python', 'PyTorch', 'Transformers', 'TF-IDF', 'BERT'],
  },
  {
    title: 'Course Recommendation System (RAG)',
    period: 'Jan 2024 - May 2024',
    description:
      'RAG-based chatbot with LangChain, ChromaDB, Mistral-7B, and Gradio for personalized course recommendations.',
    stack: ['LangChain', 'ChromaDB', 'Mistral-7B', 'Gradio'],
  },
  {
    title: 'Model Compression Techniques',
    period: 'Nov 2024',
    description:
      'Pruning, quantization (PTQ/QAT), and knowledge distillation on VGG/CIFAR-100 for resource-limited environments.',
    stack: ['PyTorch', 'VGG', 'Pruning', 'Quantization', 'Distillation'],
  },
  {
    title: 'Landmark 3D Reconstruction',
    period: 'Nov 2024 - Dec 2024',
    description:
      'Structure from Motion with SIFT and linear triangulation to generate 3D point clouds, deployed in a Flutter Android app.',
    stack: ['Python', 'SIFT', 'SfM', 'Flutter'],
  },
  {
    title: 'Succession Planning Portal',
    period: 'Jan 2024 - May 2024',
    description:
      'Full-stack talent management portal with ML-driven KPI assessment, RBAC, 2FA, and mentor-mentee matching.',
    stack: ['React', 'MongoDB', 'Express', 'ML'],
    repo: 'https://github.com/MSafiullah1/My-SE-project',
  },
  {
    title: 'Unit Linked Insurance Product Design',
    period: 'Jun 2024 - Jul 2024',
    description:
      'Designed ULIP product with financial modeling: allocation optimization, sensitivity analysis, and competitor benchmarking.',
    stack: ['Financial Modeling', 'Actuarial Science'],
  },
]
