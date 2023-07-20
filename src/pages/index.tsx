import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import Link from "next/link";
import { ReactElement } from "react";
import RootLayout from "../../components/Layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button type="primary">
        <Link href="/news">News</Link>
      </Button>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
