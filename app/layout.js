import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "MonoMinimal",
  description: "A design system experiment by Hélio Sal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
