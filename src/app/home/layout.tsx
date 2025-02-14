import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CustomerX - Home",
  description: "Crie sua conta",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
