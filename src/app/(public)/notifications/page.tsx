import type { Metadata } from "next";
import { NotificationsPageClient } from "@/components/notifications/NotificationsPageClient";

export const metadata: Metadata = {
  title: "Notificaciones",
};

export default function NotificationsPage() {
  return <NotificationsPageClient />;
}
