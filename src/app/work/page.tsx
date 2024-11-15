
import ContactButton from "@/components/buttons/ContactButton";
import Footer from "@/components/footer/Footer";
import HderTxtWorklayout from "@/components/header/HderTxtWorklayout";
import BannerWork from "@/components/Work/BannerWork";
import WorkGallery from "@/components/Work/WorkGallery";

export default function Home() {
  return (
    <HderTxtWorklayout>
      <main>
        <BannerWork />
        <WorkGallery />
        <ContactButton />
        <Footer />
      </main>
    </HderTxtWorklayout>

  )
}
