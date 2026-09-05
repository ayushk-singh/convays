import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import OurServices from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhoWeAre/>
      <TrustedBy/>
      <OurServices />
      <Footer/>
    </>
  );
}
