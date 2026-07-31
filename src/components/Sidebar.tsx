"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  exact?: boolean;
}

export function Sidebar({
  nav,
  footer,
  title,
}: {
  nav: NavItem[];
  footer?: React.ReactNode;
  title?: string;
}) {
  const pathname = usePathname();

  const isActive = (item: NavItem) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <aside className="flex h-full w-72 flex-col gap-1 bg-base-200/70 p-4">
      {title && (
        <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider opacity-50">
          {title}
        </h2>
      )}
      <ul className="menu gap-1 p-0">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "rounded-xl font-medium transition",
                isActive(item) && "menu-active bg-primary text-primary-content shadow-sm",
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {footer && <div className="mt-auto">{footer}</div>}
    </aside>
  );
}
