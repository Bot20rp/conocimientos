import type { Metadata } from "next";
import { getUserById } from "@/lib/data";
import { ProfileClient } from "@/components/profile/ProfileClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const user = getUserById(id);
  return {
    title: user?.name ?? "Perfil",
    description: user?.headline,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProfileClient userId={id} />;
}
