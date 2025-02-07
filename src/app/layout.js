import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  antialiased`}>
        <div className={montserrat.variable}>
          <div className="font-sans">{children}</div>
        </div>
      </body>
    </html>
  );
}
