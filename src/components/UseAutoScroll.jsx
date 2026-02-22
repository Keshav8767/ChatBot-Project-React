import { useEffect, useRef } from "react";

export function useAutoScroll(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, deps);

  return containerRef;
}