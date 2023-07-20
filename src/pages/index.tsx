import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import Link from "next/link";
import { ReactElement } from "react";
import RootLayout from "@/../components/Layouts/RootLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="home page" description="hello Next js"></meta>
      </Head>
      <Button type="primary">
        <Link href="/news">News</Link>
      </Button>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
