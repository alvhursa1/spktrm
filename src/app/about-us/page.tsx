import AboutBannerText from "@/components/about/AboutBannerText"
import HderTxtAboutlayout from "@/components/header/HderTxtAboutlayout"
import AboutSection from "@/components/about/AboutSection"
import ZoomImageAbout from "@/components/about/ZoomImageAbout"
import BePartAbout from "@/components/about/bepart/BePartAbout"
import Footer from "@/components/footer/Footer"
import TextAboutImage from "@/components/about/TextAboutImage"

export default function Home() {
    return (
        <HderTxtAboutlayout>
            <main>
                <AboutBannerText />
                <AboutSection />
                <ZoomImageAbout />
                <BePartAbout />
                <TextAboutImage />
                <Footer />
            </main>
        </HderTxtAboutlayout>
    )
}
