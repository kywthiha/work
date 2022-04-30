import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Thin.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Thin.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Light.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Light.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Regular.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Regular.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Medium.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Medium.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-SemiBold.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-SemiBold.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-ExtraBold.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-ExtraBold.woff2"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Black.woff"
            as="font"
            crossorigin=""
          />
          <link
            rel="preload"
            href="https://www.codigo.co/fonts/NeueEinstellung-Black.woff2"
            as="font"
            crossorigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
