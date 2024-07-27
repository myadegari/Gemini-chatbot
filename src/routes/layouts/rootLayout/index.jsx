import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton,ClerkProvider  } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const index = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className="flex h-svh flex-col px-16 py-4">
      <header className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <span>LAMA AI</span>
        </Link>
        <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </header>
      <main className=" flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
</ClerkProvider>

  );
};

export default index;
