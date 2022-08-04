import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../Components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> hello world</h1>

      <main>
        <Sidebar />
        {/* feed */}

        {/* widgets */}
      </main>
    </div>
  );
};

export default Home;
