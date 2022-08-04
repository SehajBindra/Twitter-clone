import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import Head from "next/head";
interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}
export default function SignIn({ providers }: Props) {
  return (
    <>
      <Head>
        <title>Twitter / Its happening now! </title>
        <link
          rel="icon"
          href="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
        />
      </Head>
      <div className=" bg-black flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/drq" alt="" />

        <h2 className="text-white font-semibold text-3xl mb-5 ">
          {" "}
          Happening now{" "}
        </h2>
        <p className="text-twitter text-2xl "> Join Twitter Now !!</p>

        {/* <p className="text-twitter font-base text-base ">
          This is not a Real App it is Built for Education Purposes only
        </p> */}
        <div className="flex flex-row items-center space-x-2 mt-40 ">
          {Object.values(providers).map((provider) => (
            <div className="flex " key={provider.name}>
              <button
                className=" p-2    flex  items-center  rounded-lg  bg-twitter  text-white sm:p-4  "
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
