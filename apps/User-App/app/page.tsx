import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../lib/auth";


// Hello world
//change 2
//change 4








export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
}
