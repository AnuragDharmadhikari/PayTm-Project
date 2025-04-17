"use client";

import { useBalance } from "@repo/store/balance";

export default function Home() {
  const value = useBalance();
  return <div className="font-bold">Merchant-App {`${value}`} </div>;
}
