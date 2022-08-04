import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";
import { fetchTweets } from "../utils/FetchTweets";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen  overflow-hidden lg:max-w-6xl ">
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {},
  };
};
