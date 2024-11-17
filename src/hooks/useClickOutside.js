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

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, liveCapturing]
  );

  return ref;
}
