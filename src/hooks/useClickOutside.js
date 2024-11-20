import { useEffect, useRef } from "react";

export function useClickOutside(handler, liveCapturing = true) {
  const ref = useRef();

  useEffect(
    function() {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, liveCapturing);

      return () => document.removeEventListener("click", handleClick, liveCapturing);
    },
    [handler, liveCapturing]
  );

  return ref;
}
