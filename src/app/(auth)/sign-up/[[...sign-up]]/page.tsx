import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-primary/25 via-background to-primary/5">
      <SignUp signInUrl="sign-in" />
    </div>
  );
}