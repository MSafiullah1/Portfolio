export type Service = {
  /** lucide icon name, resolved in the Capabilities component. */
  icon: 'brain' | 'layers' | 'chart' | 'teach'
  title: string
  summary: string
  /** What I deliver. */
  offerings: string[]
  /** What I build it with. */
  tools: string[]
}

/**
 * One answer to "what can you do", covering both the service and the stack
 * behind it. Previously these were two adjacent sections that overlapped
 * heavily, with the same tools implied in both.
 */
export const services: Service[] = [
  {
    icon: 'brain',
    title: 'ML & AI systems',
    summary:
      'Taking a model from a notebook to something that runs, is measured, and can be maintained.',
    offerings: [
      'Agentic Systems',
      'Fine-tuning',
      'AI automations',
      'RAG pipelines',
      'LLM agents',
      'Fine-tuning',
      'Evaluation harnesses',
      'Model compression',
      'Federated learning',
    ],
    tools: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'scikit-learn',
      'LangChain',
      'ChromaDB',
      'FAISS',
      'OpenAI API',
      'Mistral',
    ],
  },
  {
    icon: 'layers',
    title: 'Full-stack & deployment',
    summary:
      'The application around the model: APIs, auth, storage, payments, and the pipeline that ships it.',
    offerings: [
      'REST APIs',
      'Auth & RBAC',
      'Database design',
      'Payments',
      'Containerisation',
      'CI pipelines',
    ],
    tools: [
      'FastAPI',
      'React',
      'PostgreSQL',
      'Supabase',
      'Pydantic',
      'Alembic',
      'Docker',
      'Stripe',
      'GCS',
      'Render',
    ],
  },
  {
    icon: 'chart',
    title: 'Quantitative & computational finance',
    summary:
      'Modelling and analysis on market data, from portfolio construction to derivative pricing.',
    offerings: [
      'Portfolio construction',
      'Efficient frontier',
      'Option pricing',
      'Historical data analysis',
      'Sensitivity analysis',
      'Monte Carlo',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'LSTM', 'Time series'],
  },
  {
    icon: 'teach',
    title: 'AI teaching & workshops',
    summary:
      'Curriculum, labs, and tutorials for teams and cohorts. Over 500 students taught to date.',
    offerings: [
      'Course design',
      'Hands-on labs',
      'Graduate-level teaching',
      'Team upskilling',
      'Technical mentoring',
    ],
    tools: ['Jupyter', 'Colab', 'Kaggle', 'Streamlit'],
  },
]

/** Cross-cutting, so it sits outside the four service lines. */
export const languages = [
  'Python',
  'TypeScript / JavaScript',
  'C / C++',
  'SQL',
  'Haskell',
  'HTML / CSS',
]

export const tooling = ['Git', 'Docker', 'Valgrind', 'Jupyter', 'Colab', 'Kaggle']
