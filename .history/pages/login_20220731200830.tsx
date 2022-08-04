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

        <p className="text-twitter font-base italic">
          This is not a Real App it is Built for Education Purposes only
        </p>
        <div className="flex flex-row space-x-2 mt-40">
          {Object.values(providers).map((provider) => (
            <div className="flex " key={provider.name}>
              <button
                className=" flex  items-center space-x-2 rounded-lg  bg-twitter font-semibold text-white p-5 px-2"
                onClick={() => signIn(provider.id)}
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
