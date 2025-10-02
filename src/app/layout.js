import "./globals.css";



export const metadata = {
  title: "Hussen SH",
  description: "Hi, I’m Hussen, a developer based in Syria with a passion for code.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
