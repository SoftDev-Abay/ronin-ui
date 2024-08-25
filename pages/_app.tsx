import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LanguageProvider } from "@/app/context/TranslationContext";

import Preloader from "@/app/pages/Preloader/Preloader";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      // Disable scrolling when loading is true
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when loading is false
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <LanguageProvider>
      <div>
        <Preloader isShow={loading} />
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}

export default App;
