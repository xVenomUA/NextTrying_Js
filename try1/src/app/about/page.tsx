"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";

export default function Someone() {
  const [click, setClick] = useState<number>(0);

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClick(click + 1);
  };
  return (
    <main>
      <p>page</p>
      <Link href="about/blog">Go to blog </Link>
    </main>
  );
}
