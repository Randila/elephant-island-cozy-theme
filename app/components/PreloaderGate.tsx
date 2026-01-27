"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);
  const startRef = useRef<number>(Date.now());

  // lock scroll while showing
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  useEffect(() => {
    const minMs = 1200;

    const finish = () => {
      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => setShow(false), wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);

    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <>
      <Preloader show={show} logoSrc="/logo.png" />
      {children}
    </>
  );
}
