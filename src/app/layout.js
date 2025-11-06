import { EasterEggProvider } from "./context/EasterEggContext";
import "./globals.css";
import "./page.module.css"
import QueryProvider from "./tanstack/QueryProvider";


export const metadata = {
  title: "Hussen SH",
  description: "Hi, I’m Hussen, a developer based in Syria with a passion for code.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>

          <EasterEggProvider>
            {children}

          </EasterEggProvider>

        </QueryProvider>

      </body>
    </html>
  );
}
