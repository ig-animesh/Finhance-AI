import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";


const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Finhance",
  description: "One stop Finanace Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <Header/>


        <main className="min-h-screen">
          {children}
        </main>
        
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Finhance Personal Finance Platform❤️</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
