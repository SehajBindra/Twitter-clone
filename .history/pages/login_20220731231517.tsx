import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}
export default function SignIn({ providers }: Props) {
  return (
    <>
      <div className=" bg-black flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/drq" alt="" />

        <h2 className="text-white font-semibold text-3xl "> Happening now </h2>
        <p className="text-twitter text-2xl mt-4"> Join Twitter Now !!</p>

        {/* <p className="text-twitter font-base text-base ">
          This is not a Real App it is Built for Education Purposes only
        </p> */}
        <div className="flex flex-row items-center space-x-3 mt-40 ">
          {Object.values(providers).map((provider) => (
            <div className="flex " key={provider.name}>
              <button
                className=" p-3 m-4  flex  items-center  rounded-lg  bg-twitter  text-white sm:p-4  "
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
