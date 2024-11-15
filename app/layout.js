import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Typing Test",
  description: "Practice and improve your typing speed",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
