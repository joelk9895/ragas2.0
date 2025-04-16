export default function Footer() {
  const links = {
    Product: [
      { label: "Overview", href: "/overview" },
      { label: "Features", href: "/features" },
      { label: "Changelog", href: "/changelog" },
    ],
    Company: [
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
    Connect: [
      { label: "Twitter", href: "https://twitter.com/ragasai" },
      { label: "GitHub", href: "https://github.com/explodinggradients/ragas" },
      { label: "Discord", href: "/discord" },
    ],
  };

  return (
    <footer className="border-t border-[#E5E5E5] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-[var(--font-instrument)] mb-6">
              ragas
            </div>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Supercharge your LLM evaluation with trusted metrics and flexible
              benchmarks.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="font-medium mb-4">{category}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
