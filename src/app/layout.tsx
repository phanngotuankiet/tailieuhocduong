import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tài liệu Học Đường",
  description: "Tủ sách điện tử tương tác cho học sinh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <main className="bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
