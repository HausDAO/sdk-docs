export default {
  github: 'https://github.com/hausdao/sdk-docs',
  docsRepositoryBase: 'https://github.com/hausdao/sdk-docs/blob/main',
  titleSuffix: 'HausDAO',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">DAO Toolbox</span>
    </>
  ),
  head: (
    <>
      <title>HausDAO</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="DAO Toolbox" />
      <meta name="og:description" content="DAO Toolbox" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/daohaus-logo-big.png" />
      <meta
        name="twitter:site:domain"
        content="staging-haus-toolbox.vercel.app"
      />
      <meta name="twitter:url" content="https://twitter.com/nowdaoit" />
      <meta name="og:title" content="DAO Toolbox" />
      <meta name="og:image" content="/daohaus-logo-big.png" />
      <meta name="apple-mobile-web-app-title" content="HausDAO" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © HausDAO.</>,
  unstable_faviconGlyph: '🧰',
}
