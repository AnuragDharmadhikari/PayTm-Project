"use client";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
// import { RecoilRoot } from "recoil";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>
    <SessionProvider>
      {children}
    </SessionProvider>
  </Provider>;
};
