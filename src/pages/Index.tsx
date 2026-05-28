import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import CoreServices from "@/components/CoreServices";
import Philosophy from "@/components/Philosophy";
import Leadership from "@/components/Leadership";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Overview />
      <CoreServices />
      <Philosophy />
      <Leadership />
      <Engagement />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
