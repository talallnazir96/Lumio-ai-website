import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"


const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"], subsets: ['latin'], display: 'swap'
})


export const metadata: Metadata = {
    title: "LumioAi- Hire deeply vetted developers on demand", description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en">
        <body className={`antialiased font-${poppins}`}>
            {children}
        </body>
    </html>);
}
