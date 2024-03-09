import "primereact/resources/themes/lara-light-cyan/theme.css";
import "~/styles/globals.css";


import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "TODO LIST BY HINA",
  description: "Practice project for todo list by HINA",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} text-white`}>
        <TRPCReactProvider>
          <Provider>
            {children}
          </Provider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
