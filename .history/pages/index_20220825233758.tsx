import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Feed from "../Components/Feed";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";
import { Tweet } from "../typing";
import { fetchTweets } from "../utils/FetchTweets";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);

  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "authenticated") {
    return (
      <div className="mx-auto max-h-screen overflow-y-hidden   lg:max-w-7xl  ">
        <Head>
          <title> Home / Twitter </title>
          <link
            rel="icon"
            href="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
          />
        </Head>

        <Toaster />

        <main className="grid grid-cols-10">
          <Sidebar />
          <Feed tweets={tweets} />

          <Widgets />
        </main>
      </div>
    );
  }
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  };
};
