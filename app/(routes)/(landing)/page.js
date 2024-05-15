"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export default function LandingPage() {
  const session = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landing Page
      <Button onClick={() => signIn("google")}>Prisijungti</Button>
      <p>{session.data?.user?.name}</p>
    </main>
  );
}
