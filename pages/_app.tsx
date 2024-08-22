import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { appWithTranslation } from "next-i18next";

const Preloader = dynamic(() => import("@/app/pages/Preloader/Preloader"), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <Component {...pageProps} />}
    </>
  );
}

export default appWithTranslation(App);
