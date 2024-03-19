import { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <Head>
                <title>Hello!</title>
                <meta name="description" content="Landing page made by Hamada" />
                <link rel="icon" href="/images/favicon.ico" sizes="any" />
            </Head>
            <main
                role="main"
                className={"min-vh-100 overflow-hidden " + inter.className}
            >
                <div className="min-vw-100">
                    <Component {...pageProps} />
                </div>
            </main>
        </React.StrictMode>
    );
}