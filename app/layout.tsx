"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
        <Provider store={store}>
          {children}
          </Provider>
          </ThemeProvider>
      </body>
    </html>

  );
}
