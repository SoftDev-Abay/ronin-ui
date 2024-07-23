import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Preloader from "@/app/pages/Preloader/Preloader";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <AppCacheProvider {...pageProps}>
          <NextIntlClientProvider
            locale={router.locale}
            timeZone="Europe/Vienna"
            messages={pageProps.messages}
          >
            <Component {...pageProps} />
          </NextIntlClientProvider>
        </AppCacheProvider>
      )}
    </div>
  );
}
