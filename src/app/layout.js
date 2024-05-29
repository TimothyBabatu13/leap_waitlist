import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Leap",
    description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
    twitter: {
      card: "summary_large_image",
      title: "Leap",
      description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
      siteId: "",
      creator: "@timothy_akanbii",
      creatorId: "",
      images: ["/opengraph.svg"]
    },
    openGraph: {
      title: "Leap",
      description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
      url: "https://leap-waitlist.vercel.app",
      siteName: "Leap",
      images: [
        {
          url: "/opengraph.svg",
          width: 800,
          height: 800
        },
      ],
    },
    locale: "en_US",
    type: "website"
  }
}

// export const metadata = {
//   title: "Leap",
//   description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
//   twitter: {
//     card: "summary_large_image",
//     title: "Leap",
//     description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
//     siteId: "",
//     creator: "@timothy_akanbii",
//     creatorId: "",
//     images: ["/opengraph.svg"]
//   },
//   openGraph: {
//     title: "Leap",
//     description: `Leap is a customer/user feedback platform based on peer to peer educational resource pooling that enables founders gain insight into their business/projects`,
//     url: "https://leap-waitlist.vercel.app",
//     siteName: "Leap",
//     images: [
//       {
//         url: "/opengraph.svg",
//         width: 800,
//         height: 800
//       },
//     ],
//   },
//   locale: "en_US",
//   type: "website"
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#171717] py-[20px]`}>
        {/* <ClientLayout> */}
          <section className="w-[90%] mx-auto h-[90vh] flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </section>
        {/* </ClientLayout> */}
      </body>
    </html>
  );
}
