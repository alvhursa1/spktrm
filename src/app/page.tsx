
import HderTxtHomelayout from "@/components/header/HderTxtHomelayout";
import BannerText from "@/components/home/BannerText";
import HorizontalScrollCarousel from "@/components/home/HorizontalScrollCarousel";




export default function Home() {
  return (
 <HderTxtHomelayout>
      <main>
        <BannerText />
 <HorizontalScrollCarousel />
      </main>
      </HderTxtHomelayout>
  );
}

