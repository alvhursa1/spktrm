
import AboutUsButton from "@/components/buttons/AboutUsButton";
import OurArtistsButton from "@/components/buttons/OurArtistsButton";
import StoreButton from "@/components/buttons/StoreButton";
import Footer from "@/components/footer/Footer";
import HderTxtHomelayout from "@/components/header/HderTxtHomelayout";
import BannerText from "@/components/home/BannerText";
import HorizontalScrollCarousel from "@/components/home/HorizontalScrollCarousel";
import ScrollingArtist from "@/components/home/ScrollingArtist";
import AnimatedLogo from "@/components/logo/AnimatedLogo";




export default function Home() {
  return (
    <HderTxtHomelayout>
      <main>
        <BannerText />
        <HorizontalScrollCarousel />
        <OurArtistsButton />
        <ScrollingArtist />
        <AboutUsButton />
        <AnimatedLogo />
        <StoreButton />
        <Footer />
      </main>
    </HderTxtHomelayout>
  );
}

