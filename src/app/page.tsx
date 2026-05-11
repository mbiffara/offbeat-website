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
      <div className="relative isolate">
        <img
          src="/images/ondasexpansivas.gif"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2 opacity-70 mix-blend-screen"
        />
        <ContactUs data={content.contact} />
        <Faq data={content.faq} />
      </div>
      <Footer data={content.footer} />
    </main>
  );
}
