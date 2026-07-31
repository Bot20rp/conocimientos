import type { Metadata } from "next";
import { MessagesClient } from "@/components/messages/MessagesClient";

export const metadata: Metadata = {
  title: "Mensajes",
};

export default function MessagesPage() {
  return <MessagesClient />;
}
