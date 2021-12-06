// https://www.learnbestcoding.com/post/9/easiest-way-to-integrate-google-analytics-with-react-js-and-next-js
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "@/styles/global.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID });
  }, []);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "",
          site_name: "",
          title: "",
          description: "",
          images: [
            {
              url: "https://dl.airtable.com/.attachmentThumbnails/079f7e6ff888ffe75607a7bffb940738/384286fb",
              width: 1200,
              height: 1200,
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
