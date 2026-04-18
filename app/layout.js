import "./globals.css";

export const metadata = {
  title: "r3laxik inc.",
  description: "Official r3laxik inc. page with socials, updates, and contact links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
