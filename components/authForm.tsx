"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logInWithDiscord = async () => {
    setIsLoading(true);

    try {
      await signIn("discord");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div onClick={logInWithDiscord} className="flex w-40 mt-10">
      <Button size="lg">Sign Up</Button>
    </div>
  );
};

export default AuthForm;
