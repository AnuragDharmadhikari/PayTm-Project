"use client";

import { Provider } from "jotai";

// import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};
