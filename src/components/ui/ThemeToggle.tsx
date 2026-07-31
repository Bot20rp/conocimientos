"use client";

import { useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "./icons";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getSnapshot(): string {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark" || theme === "light") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");
  const dark = theme === "dark";

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema"
      className={`btn btn-circle btn-ghost ${className ?? ""}`}
    >
      {dark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}
