import "./globals.css";

export const metadata = {
  title: "NextJS 13",
  description: "NextJS fullstack boilerplate app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
