import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/navbar";
import FooterTop from "./components/footer/footerTop";
import FooterBottom from "./components/footer/footerBottom";
import { CartContextProvider } from "./components/utils/CartContext";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "audiophile",
  description: "crafted by @filecc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartContextProvider>
          <div className="bg-dark-primary">
            <div className="max-w-[689px] lg:max-w-[1110px] mx-auto px-4 relative">
              <Navbar />
            </div>
          </div>
          <div>{children}</div>
          <footer>
            <div className="max-w-[689px] lg:max-w-[1110px] mx-auto">
              <FooterTop />
            </div>
            <div className="bg-dark-secondary">
              <div className="max-w-[689px] lg:max-w-[1110px] mx-auto">
                <FooterBottom />
              </div>
            </div>
          </footer>
        </CartContextProvider>
      </body>
    </html>
  );
}
