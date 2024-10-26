import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import LandingPageHeader from './dashboard/_components/LandingPageHeader/LandingPageHeader.jsx'
import LandingPageHeading from './dashboard/_components/LandingPageHeading/LandingPageHeading.jsx'
import Cards from './dashboard/_components/Cards/Cards.jsx' 

export default async function Home() { 
  return (
    <div>
      <LandingPageHeader/>
      <LandingPageHeading/>
      <Cards/>
    </div>
  );
}
