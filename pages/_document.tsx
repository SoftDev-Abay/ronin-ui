import { Html, Head, Main, NextScript } from "next/document";

// or `v1X-pagesRouter` if you are using Next.js v1X

import type { DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/urj0jhb.css" />
        <link rel="icon" href="/logo-short-blue.svg" sizes="any" />
        <title>Ronin UI</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root" />
      </body>
    </Html>
  );
}
