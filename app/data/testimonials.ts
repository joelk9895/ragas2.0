interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string; // path to the avatar image
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Data Scientist",
    company: "TechCorp",
    testimonial:
      "RAGAS has transformed how we evaluate our RAG systems. The metrics are intuitive and the visualizations help us quickly identify bottlenecks.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "ML Engineer",
    company: "AI Solutions",
    testimonial:
      "Using RAGAS metrics has improved our retrieval quality by 45%. It's now an essential part of our evaluation pipeline.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Research Lead",
    company: "DataInnovate",
    testimonial:
      "The comprehensive evaluation framework provided by RAGAS has accelerated our research cycles significantly.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "NLP Systems",
    testimonial:
      "RAGAS offers metrics that align perfectly with real-world user satisfaction. It's transformed how we iterate on our products.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];
