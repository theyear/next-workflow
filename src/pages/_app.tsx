import { AppProps } from "next/app";

import Layout from "@/components/layout";

import "@/styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
