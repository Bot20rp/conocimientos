import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-base-100 to-base-100" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 text-primary/10" />

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6 sm:px-6">
        <Logo size="md" />
        <ThemeToggle />
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        {children}
      </main>

      <footer className="pb-6 text-center text-xs opacity-50">
        <p>
          © 2026 Conocimientos ·{" "}
          <Link href="/" className="underline-offset-2 hover:underline">
            Volver al inicio
          </Link>
        </p>
      </footer>
    </div>
  );
}
