"use client";

import { useEffect, useRef, useState } from "react";
import PreloaderDamai from "./PreloaderDamai";

export default function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
  }, []);

  return (
    <>
      <PreloaderDamai
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
