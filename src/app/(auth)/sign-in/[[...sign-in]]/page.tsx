import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
