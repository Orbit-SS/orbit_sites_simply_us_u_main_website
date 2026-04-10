"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./portal.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const designs = [
  {
    number: "01",
    name: "Velocity",
    direction: "Corporate / SaaS",
    description:
      "Deep navy, electric blue, white. Animated stat counters. Card grid services. The immediately approvable option.",
    href: "/design-1",
  },
  {
    number: "02",
    name: "Raw Power",
    direction: "Brutalist",
    description:
      "Black, white, neon yellow. Oversized stacked type. Zero polish, maximum impact. Confrontational and unforgettable.",
    href: "/design-2",
  },
  {
    number: "03",
    name: "The Atelier",
    direction: "Luxury / Editorial",
    description:
      "Ivory, near-black, champagne gold. Cormorant Garamond serifs. Breathes like a fashion magazine.",
    href: "/design-3",
  },
  {
    number: "04",
    name: "System Online",
    direction: "Tech-Forward / Terminal",
    description:
      "Matrix green on near-black. JetBrains Mono throughout. Typing animation. Built for founders who think in code.",
    href: "/design-4",
  },
  {
    number: "05",
    name: "Momentum",
    direction: "Kinetic / Bold",
    description:
      "Deep orange, diagonal cuts, rotating badge, staggered reveals. The one they didn't know they needed.",
    href: "/design-5",
  },
];

export default function Portal() {
  return (
    <div className={`${styles.root} ${inter.variable}`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Design System — Internal Review
        </p>
        <h1 className={styles.title}>Simply Us & U</h1>
        <p className={styles.subtitle}>
          5 distinct design directions for the same business. Select a concept
          to preview the full landing page — each is a complete, fully built
          experience.
        </p>
      </header>

      <main className={styles.grid}>
        {designs.map((d) => (
          <Link key={d.number} href={d.href} className={styles.card}>
            <span className={styles.cardNum}>{d.number}</span>
            <div className={styles.cardBody}>
              <h2 className={styles.cardName}>{d.name}</h2>
              <span className={styles.cardTag}>{d.direction}</span>
              <p className={styles.cardDesc}>{d.description}</p>
            </div>
            <span className={styles.cardArrow}>→</span>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerCopy}>© 2026 Simply Us & U</span>
        <span className={styles.footerNote}>Internal Design Presentation</span>
      </footer>
    </div>
  );
}
