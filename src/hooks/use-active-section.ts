import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[], offset = 0.4) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible.set(id, entry.intersectionRatio);
          });
          let best = ids[0];
          let bestRatio = -1;
          visible.forEach((ratio, key) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = key;
            }
          });
          if (bestRatio > 0) setActive(best);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: `-${offset * 100}% 0px -${offset * 100}% 0px` }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join(","), offset]);

  return active;
};
