import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Feed />

        {/* widgets */}
      </main>
    </div>
  );
};

export default Home;
