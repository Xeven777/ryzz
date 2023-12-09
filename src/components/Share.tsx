"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
  userId: string;
}

const Share = ({ userId }: Props) => {
  const router = useRouter();

  const goToAM = () => {
    console.log("go to am");
    router.push(`/send/${userId}`);
  };

  return (
    <div>
      <Button onClick={goToAM}>go to anonymous msg link</Button>
    </div>
  );
};

export default Share;
