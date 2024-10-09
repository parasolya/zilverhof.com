import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";



export const metadata = {
  title: "Zilverhof",
  description: "Landgoed Zilverhof met casino speelkamer is een culinair landgoed waar luxe en geschiedenis samenkomen.",
  icons: {
    icon: "/crown.svg",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
