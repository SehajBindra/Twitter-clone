import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
        {/* feed */}

        {/* widgets */}
      </main>
    </div>
  );
};

export default Home;
