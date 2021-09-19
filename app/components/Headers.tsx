import React, { ReactElement } from "react";
import { _Header } from "../constants/interfaces";
import Head from "next/head";

export default function Headers({
  title,
  keywords,
  description,
}: _Header): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link
        rel="shortcut icon"
        href="/s_g_icon.png"
        type="image/png"
        sizes="96x96"
      />
    </Head>
  );
}
Headers.defaultProps = {
  title: "Store genius | World's biggest store manager",
  keywords:
    "sg, store-genius, genius, store, store manager, management, stores",
  description: "Web application for managing stores around the world",
};
