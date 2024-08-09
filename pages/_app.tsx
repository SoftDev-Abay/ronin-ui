import type { AppProps } from "next/app";
import "../styles/global.scss";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Preloader from "@/app/pages/Preloader/Preloader";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{loading ? <Preloader /> : <Component {...pageProps} />}</div>;
}

export default appWithTranslation(App);
