import Image from "next/image";

export default function MetricsVisualization() {
  return (
    <div className="w-full aspect-[16/9] overflow-hidden">
      <Image
        src="/image.png"
        alt="Metrics Visualization"
        width={1920}
        height={1080}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}
