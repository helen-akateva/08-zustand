"use client";

import Link from "next/link";
import css from "./Home.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — NoteHub",
  description:
    "Sorry, the page you are looking for does not exist. Please check the URL or go back to the homepage.",
  openGraph: {
    title: "Page Not Found — NoteHub",
    description:
      "This page could not be found on NoteHub. Return to the homepage to continue exploring your notes.",
    url: "https://notehub-app.vercel.app/404", 
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub page not found image",
      },
    ],
  },
};
export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
