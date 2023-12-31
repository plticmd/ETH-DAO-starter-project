import type { AppProps } from "next/app";
import {ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import HeadComponent from '../components/head';

// アプリケーションが動作するチェーン（ Sepolia）を取得し、定義します。
const activeChainId = 11155111;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <HeadComponent/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
