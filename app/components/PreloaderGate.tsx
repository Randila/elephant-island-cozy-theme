"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    // Scroll to top on mount (for page reloads)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader
        show={show}
        videoSrc="/header-video.mp4"
        logoTextTop="ELEPHANT"
        logoTextBottom="ISLAND"
        onDone={() => setShow(false)}
      />
      {children}
    </>
  );
}
