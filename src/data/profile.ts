// Everything the home page says, in one place. Facts match the resume (public-level only).

export const person = {
  name: "Qian Qu",
  role: "Machine Learning Engineer at Amazon",
  location: "Seattle",
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
