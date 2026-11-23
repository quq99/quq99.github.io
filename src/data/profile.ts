// Everything the home page says, in one place. Facts match the resume (public-level only).

export const person = {
  name: "Qian Qu",
  role: "Machine Learning Engineer at Amazon",
  location: "Palo Alto",
  intro:
    "I build LLM agents that write GPU kernels, and the training, data and serving systems behind large language models.",
  email: "eequq99@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/quq99" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/qian-qu/" },
    { label: "Hugging Face", href: "https://huggingface.co/QianQu" },
    { label: "Email", href: "mailto:eequq99@gmail.com" },
  ],
};

export const featured = {
  title: "CompoundingKernel",
  year: "2026",
  film: {
    src: "/media/compoundingkernel-demo.mp4",
    poster: "/media/compoundingkernel-poster.jpg",
    credit:
      "Music: Pixabay tracks 633374 by the_mountain and 606698 by nastelbom, under the Pixabay Content License.",
  },
  text: [
    "A self-improving agent system that writes and tunes CUDA kernels for NVIDIA B200 by search. Each search starts from a problem's PyTorch definition, with no reference kernels; an archive keeps every correct kernel, so later attempts build on earlier ones.",
    "As of November 11, 2026, its kernels rank first on the public L1, L2 and Quantization leaderboards of NVIDIA SOL-ExecBench, and run 4.40× faster than the PyTorch baseline on average across the 209 public problems.",
  ],
  links: [
    { label: "Read the paper", href: "https://arxiv.org/abs/2611.19230" },
    { label: "Browse the problems", href: "https://huggingface.co/spaces/QianQu/CompoundingKernel-Explorer" },
  ],
};

// More work, after the featured project. Public facts only (the linked pages say the same).
export const projects = [
  {
    title: "TorchNeuron",
    years: "2025 – 2026",
    code: { line: 'model = MyModel().to("neuron")', note: "# the only change" },
    text: [
      "Native PyTorch on AWS Trainium: model code, libraries and tools run on Trainium as a standard PyTorch device, in eager mode or with torch.compile. Open-sourced as torch-neuronx under Apache 2.0 at PyTorch Conference North America on October 20, 2026.",
      "I was on the core team that enabled it, working on LLM training and evaluation, distributed training, and PyTorch ATen operators with torch-mlir.",
    ],
    links: [
      { label: "Read the announcement", href: "https://pytorch.org/blog/introducing-torchneuron-native-pytorch-backend-for-aws-trainium/" },
      { label: "View the code", href: "https://github.com/aws-neuron/torch-neuronx" },
    ],
  },
  {
    title: "Amazon Rufus",
    years: "2023 – 2025",
    code: null,
    text: [
      "Amazon's generative AI shopping assistant in the Amazon app and on the web, trained on the product catalog, customer reviews and community Q&A. It was renamed Alexa for Shopping in May 2026.",
      "As an early member of the foundation model and data team, I built the pre-training data pipeline for trillions of tokens, the customer data system for release gating, evaluation and RLHF, and the LLM playground used for demos to the Amazon CEO.",
    ],
    links: [{ label: "Read the launch post", href: "https://www.aboutamazon.com/news/retail/amazon-rufus" }],
  },
];

export type Publication = {
  title: string;
  href: string;
  authors: string; // "Qian Qu" is set in bold where it appears
  venue: string;
  firstAuthor?: boolean;
};

export const publications: Publication[] = [
  {
    title: "CompoundingKernel: Self-Improving from Zero to First",
    href: "https://arxiv.org/abs/2611.19230",
    authors: "Qian Qu, Hongyang Wang, Wenbo Chen, et al.",
    venue: "arXiv 2611.19230, 2026",
    firstAuthor: true,
  },
  {
    title: "Plumbline: When the Loss Lies, Validating LLM Training Correctly",
    href: "https://arxiv.org/abs/2611.13393",
    authors: "Ruochen Wen, Hongyang Wang, Siwei Li, …, Qian Qu, et al.",
    venue: "arXiv 2611.13393, 2026",
  },
  {
    title: "Sandman: A Sandbox Service for Production Agentic Reinforcement Learning",
    href: "https://arxiv.org/abs/2610.39711",
    authors: "Yiming Yan, Hongyang Wang, Wenbo Chen, …, Qian Qu, et al.",
    venue: "arXiv 2610.39711, 2026",
  },
  {
    title: "ATTUNE: Agentic Throughput Tuning for LLM Training",
    href: "https://arxiv.org/abs/2610.17528",
    authors: "Leo Fan, Hongyang Wang, Wenbo Chen, …, Qian Qu, et al.",
    venue: "arXiv 2610.17528, 2026",
  },
];

export const experience = [
  {
    years: "2026 – now",
    team: "Ads Foundation Model",
    text: "Conceived, designed and built CompoundingKernel, a self-improving agent system for GPU kernels.",
  },
  {
    years: "2025 – 2026",
    team: "Annapurna Labs",
    text: "Core team for TorchNeuron (torch-neuronx), native PyTorch on AWS Trainium: LLM training and evaluation, distributed training, and PyTorch ATen operators with torch-mlir.",
  },
  {
    years: "2023 – 2025",
    team: "Amazon Rufus",
    text: "Early member of the foundation model and data team: a pre-training data pipeline processing trillions of tokens, the customer data system for release gating, evaluation and RLHF, and an LLM playground with 4× faster vLLM inference.",
  },
  {
    years: "2020 – 2023",
    team: "Product catalog ML",
    text: "Brand classification at 2,000 requests per second across 12 marketplaces.",
  },
];

export const education = [
  { years: "2019", school: "University of Virginia", degree: "M.S. in Computer Science" },
  { years: "2018", school: "Nanjing University", degree: "M.S. in Electronic and Communication Engineering" },
  { years: "2015", school: "Nanjing University", degree: "B.S. in Electronic Information Science and Technology" },
];

// The CV page: the same facts as the resume PDF (public/cv/Qian_Qu_Resume.pdf, the phone-free copy
// made by `make web` in the resume repo), with room to read.
export const cv = {
  pdf: "/cv/Qian_Qu_Resume.pdf",
  updated: "November 2026",
  role: { title: "Machine Learning Engineer", org: "Amazon, Palo Alto", years: "2020 – now" },
  teams: [
    {
      team: "Ads Foundation Model",
      years: "Sep 2026 – now",
      note: "",
      points: [
        ["CompoundingKernel", "Conceived, designed and built a self-improving LLM agent system that writes and tunes CUDA kernels for NVIDIA B200, starting from PyTorch with no reference kernels. First author of the paper (arXiv 2611.19230)."],
        ["Leaderboards", "First on the L1, L2 and Quantization boards of NVIDIA SOL-ExecBench as of November 11, 2026; correct kernels for all 235 problems, 4.40× faster than the PyTorch baseline on the 209 public ones."],
        ["Search design", "A per-problem archive of every correct kernel and its lineage, an LLM controller that picks a parent or a new design for parallel child agents, and correctness checks outside the model."],
        ["Scale", "More than 1,000 agent sessions at once; one warm restart raised evaluated candidates per hour 3.6×. At equal wall time, the controller beat a UCB-style tree search on 35 of 38 problems."],
      ],
    },
    {
      team: "Annapurna Labs",
      years: "Dec 2025 – Sep 2026",
      note: "",
      points: [
        ["TorchNeuron", "Core team member enabling native PyTorch on AWS Trainium (torch-neuronx), open-sourced under Apache 2.0 at the PyTorch Conference in October 2026. PyTorch code runs on Trainium with a one-line change."],
        ["Training and operators", "LLM training and evaluation and distributed training on Trainium, and PyTorch ATen operators with torch-mlir. The team validated the 100,000 most popular models and more than 800 ML architectures."],
      ],
    },
    {
      team: "Amazon Rufus",
      years: "Apr 2023 – Dec 2025",
      note: "Early member of the foundation model and data team behind the shopping assistant used by millions of customers on the Amazon app.",
      points: [
        ["Pre-training data", "Led and launched a refreshable pipeline processing trillions of tokens (AWS EMR Serverless, Airflow) that transforms, cleans, de-duplicates and PII-filters product catalog, reviews, community Q&A, A+ and OCR data; manual effort went from a week per dataset to almost none."],
        ["Customer data", "Led and designed the system for model release gating, evaluation, traffic replay and RLHF, meeting privacy, security, governance and compliance requirements, and drove its integration across teams."],
        ["Playground and serving", "Launched two FastChat environments for testing models and prompts, used for demos to the Amazon CEO; customized vLLM for 4× faster inference, more GPUs, longer conversations and no out-of-memory errors."],
      ],
    },
    {
      team: "Product catalog ML",
      years: "Mar 2020 – Apr 2023",
      note: "",
      points: [
        ["Brand classification", "An ML service at 2,000 requests per second across 12 marketplaces; raised UK recall from 57% to 72% at 95% precision."],
      ],
    },
  ],
  education: [
    { years: "2018 – 2019", school: "University of Virginia", degree: "M.S. in Computer Science", detail: "GPA 3.9 / 4.0" },
    { years: "2015 – 2018", school: "Nanjing University", degree: "M.S. in Electronic and Communication Engineering", detail: "GPA 4.38 / 5.0. First Prize of the Postgraduate Scholarship, 2015 and 2017." },
    { years: "2011 – 2015", school: "Nanjing University", degree: "B.S. in Electronic Information Science and Technology", detail: "GPA 4.26 / 5.0, top 15%. Second Prize of the People's Scholarship, 2012." },
  ],
  skills: [
    ["Languages", "Python, C/C++, CUDA, Triton, Java, Scala, SQL, TypeScript"],
    ["AI and ML", "LLM agents, Claude Code, PyTorch, torch-mlir, AWS Trainium, distributed training, CUTLASS, vLLM"],
    ["Data and tools", "PySpark, Pandas, Docker, Linux, AWS (Bedrock, SageMaker, EMR, Airflow, Lambda, S3, DynamoDB)"],
  ],
};
