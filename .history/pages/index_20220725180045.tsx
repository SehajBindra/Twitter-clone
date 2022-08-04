import type { NextPage } from "next";
import Head from "next/head";

import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen  overflow-hidden lg:max-w-6xl max-h-scroll">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />

        <Widgets />
      </main>
    </div>
  );
};

export default Home;
