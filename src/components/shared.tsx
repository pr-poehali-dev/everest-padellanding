import { useEffect, useRef, useState } from "react";

export const LOGO = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/bucket/5ca6fc9c-45e8-43e3-abab-612549b7de80.png";
export const IMG_COURT_1 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/87a1973d-b204-4163-ad60-e70633657fe6.jpg";
export const IMG_COURT_2 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/0e09a9c9-8080-4f67-9b6e-f48f4b77bf96.jpg";
export const IMG_COURT_3 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/765722af-5f3d-4aad-95d1-39acd34ac746.jpg";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}
