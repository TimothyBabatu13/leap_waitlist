import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leap",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#171717] py-[20px]`}>
        <ClientLayout>
          <section className="w-[90%] mx-auto h-[90vh] flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </section>
        </ClientLayout>
      </body>
    </html>
  );
}
