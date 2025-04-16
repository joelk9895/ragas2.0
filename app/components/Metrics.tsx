interface MetricProps {
  number: string;
  label: string;
}

function Metric({ number, label }: MetricProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-8">
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8V12L14 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="text-xl font-medium">19ms</div>
          <div className="text-sm text-muted-foreground">Latency</div>
        </div>

        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-xl font-medium">99.1%</div>
          <div className="text-sm text-muted-foreground">Accuracy</div>
        </div>

        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 8h14M5 12h14M5 16h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-xl font-medium">4.1.2</div>
          <div className="text-sm text-muted-foreground">Version</div>
        </div>

        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-xl font-medium">4.3k+</div>
          <div className="text-sm text-muted-foreground">Stars</div>
        </div>

        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-xl font-medium">2.2k</div>
          <div className="text-sm text-muted-foreground">Downloads</div>
        </div>
      </div>
    </section>
  );
}
