import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Rohit Kumar | Full-Stack Developer",
  description:
    "Portfolio of Rohit Kumar — developer building responsive web applications with React, Next.js, TypeScript and the MERN stack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="site-shell min-h-screen pt-20 sm:pt-24">{children}</main>
      </body>
    </html>
  );
}
