export const profile = {
  name: 'Harsh Saini',
  headline: 'BTech CSE (Data Science) · SRM IST',
  tagline:
    'Building reliable ML pipelines, full-stack prototypes, and data-driven products. Seeking internships where I can ship real impact.',
  email: 'harshsaini1501@gmail.com',
  phone: '+91 93148 85031',
  linkedin: 'https://www.linkedin.com/in/harsh-saini-554318246/',
  location: 'Chennai, India',
  college: 'SRM Institute of Science & Technology — Kattankulathur',
  cgpa: 9.05,
  cgpaScale: 10,
  jeeRank: 547,
  photoSrc: `${import.meta.env.BASE_URL}profile.png`,
  resumePdfUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeDownloadFileName: 'Harsh_Saini_Resume.pdf',
}

export const skillSlices = [
  { name: 'Python & data stack', value: 28, color: '#c45c3e' },
  { name: 'ML / AI', value: 26, color: '#e8a87c' },
  { name: 'Java & OOP', value: 18, color: '#7c9eb8' },
  { name: 'C / C++', value: 12, color: '#6b8f71' },
  { name: 'Web & SQL', value: 10, color: '#9b8cce' },
  { name: 'Tools & cloud', value: 6, color: '#c4b998' },
] as const

export const techTags = [
  'TensorFlow',
  'Keras',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Seaborn',
  'Scikit-learn',
  'Java',
  'MySQL',
  'HTML',
  'CSS',
  'JavaScript',
]

export const semesterTrend = [
  { sem: 'S1', gpa: 8.5 },
  { sem: 'S2', gpa: 8.67 },
  { sem: 'S3', gpa: 8.78 },
  { sem: 'S4', gpa: 9.6 },
  { sem: 'S5', gpa: 9.7 },
]

export const boardMarks = [
  { label: 'Senior Secondary (RBSE)', percent: 82.4, year: 2022 },
  { label: 'Secondary (RBSE)', percent: 82.2, year: 2022 },
  { label: 'NWAC', percent: 77, year: '—' },
]

export const projects = [
  {
    id: 'gym',
    title: 'Gym Management System',
    role: 'Full-stack (Java)',
    summary:
      'Memberships, attendance tracking, and trainer schedules in one cohesive console.',
    bullets: [
      'Modeled members, plans, and sessions for day-to-day gym operations.',
      'Shipped CRUD flows with validations to keep records consistent.',
    ],
    stack: ['Java', 'MySQL'],
    accent: '#c45c3e',
  },
  {
    id: 'chat',
    title: 'Real-time Chat Application',
    role: 'Networking · Python',
    summary:
      'Low-latency messaging prototype with sockets and multithreading.',
    bullets: [
      'Multiple clients can join a room with threaded message handling.',
      'Focused on stable connections and clean session teardown.',
    ],
    stack: ['Python', 'Sockets', 'Threading'],
    accent: '#7c9eb8',
  },
  {
    id: 'academic-hub',
    title: 'E-Academic Hub',
    role: 'Frontend',
    summary: 'Academic resource sharing with a lightweight collaborative UI.',
    bullets: [
      'Structured uploads and discovery using semantic HTML and modern CSS.',
      'Progressive enhancement with vanilla JavaScript interactions.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    accent: '#e8a87c',
  },
  {
    id: 'data-prep',
    title: 'Industrial Dataset Preparation',
    role: 'Data Engineering',
    summary:
      'End-to-end cleaning pipeline to make messy data ML-ready.',
    bullets: [
      'Handled nulls, duplicates, encoding, and normalization with Pandas.',
      'Visualized distributions to catch outliers early.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    accent: '#6b8f71',
  },
  {
    id: 'product-reco',
    title: 'Product Recommendation Engine',
    role: 'Machine Learning',
    summary:
      'Hybrid reco prototype blending collaborative signals with similarity search.',
    bullets: [
      'Experimented with collaborative filtering / KNN style retrieval.',
      'Tracked precision, recall, and RMSE to compare candidate models.',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    accent: '#9b8cce',
  },
  {
    id: 'movie-ai',
    title: 'Movie Recommendation (AI)',
    role: 'AI / ML',
    summary:
      'Content + collaborative fusion to personalize watchlists.',
    bullets: [
      'Engineered features from genres, ratings, and user affinity signals.',
      'Tuned recommendations to lift engagement in offline evaluation.',
    ],
    stack: ['Python', 'ML', 'Feature engineering'],
    accent: '#c4b998',
  },
] as const

export const certifications = [
  'Oracle Cloud Infrastructure 2025 — Data Science Professional',
  'Machine Learning Fundamentals — Alteryx',
  'Introduction to AI — Cisco Networking Academy',
  'Databases and SQL for Python — IBM',
  'Introduction to Data Engineering — DeepLearning.AI',
  'Introduction to Generative AI — Google Skills',
  'Introduction to Large Language Models — Google Skills',
  'Introduction to Responsible AI — Google Skills',
  'Prompt Design in Vertex AI — Google Skills',
  'Getting Started with Microsoft Excel — Coursera',
  'Machine Learning — NPTEL',
  'Python Pro Bootcamp — Udemy',
]

export const positionsOfResponsibility: {
  role: string
  description?: string
}[] = [
  {
    role: 'Event Coordinator',
    description:
      'Planned and executed college events, managing logistics, registrations, and team coordination.',
  },
  {
    role: 'Project Coordinator',
    description:
      'Assigned tasks, tracked progress, and maintained documentation for timely project delivery.',
  },
  {
    role: 'Technical Lead',
    description:
      'Guided team members in implementation, debugging, and system integration.',
  },
  { role: 'Club / Society Core Members' },
  {
    role: 'Badminton',
    description: 'Intra hostel tournament participant',
  },
  {
    role: 'Cricket',
    description: 'Hostel team captain',
  },
]

export const extracurricularActivities: { role: string; description: string }[] =
  [
    {
      role: 'Sports & Fitness Training',
      description:
        'Followed regular practice schedules, warm-ups, and fitness drills.',
    },
    {
      role: 'Event & Match Support',
      description:
        'Assisted in organizing fixtures, scorekeeping, and equipment management.',
    },
    {
      role: 'Teamwork & Leadership',
      description:
        'Demonstrated discipline, collaboration, and time management through sports participation.',
    },
  ]
