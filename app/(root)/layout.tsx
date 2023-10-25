import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

// shared layouts
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";

// clerk
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/shared/Navbar";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "300 Aragveli",
  description: "300 Aragveli page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  let email = "";

  if (user) {
    const arrOfEmails = user?.emailAddresses.map((item) => item.emailAddress);
    email = arrOfEmails?.[0];
  }

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en">
        <body className={`${inter.className} bg-[#00060f] relative`}>
          <ToastContainer />
          <Topbar />
          <Navbar email={email} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
