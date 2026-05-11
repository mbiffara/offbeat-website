import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurSystem from "@/components/OurSystem";
import Credentials from "@/components/Credentials";
import BuiltFor from "@/components/BuiltFor";
import WeWork from "@/components/WeWork";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import content from "@/content/landing.json";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-offbeat-black text-offbeat-white">
      <Header data={content.header} />
      <Hero data={content.hero} />
      <OurSystem data={content.ourSystem} />
      <Credentials data={content.credentials} />
      <BuiltFor data={content.builtFor} />
      <WeWork data={content.weWork} />
      <ContactUs data={content.contact} />
      <Faq data={content.faq} />
      <Footer data={content.footer} />
    </main>
  );
}
