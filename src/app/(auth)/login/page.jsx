"use client";

import { HandleGithubLogin } from "@/lib/action";
import { useSession, signOut } from "next-auth/react";

const LoginPage = async () => {
  const { data: status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={HandleGithubLogin}>Sign In</button>
    </div>
  );
};

export default LoginPage;
