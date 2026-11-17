import type { ReactNode } from "react";

export const metadata = { title: "Shop" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 960, margin: "40px auto", padding: "0 16px" }}>{children}</body>
    </html>
  );
}
