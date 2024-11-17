import AboutBannerText from "@/components/about/AboutBannerText"
import HderTxtAboutlayout from "@/components/header/HderTxtAboutlayout"
import AboutSection from "@/components/about/AboutSection"
import ZoomImageAbout from "@/components/about/ZoomImageAbout"

export default function Home() {
    return (
        <HderTxtAboutlayout>
            <main>
                <AboutBannerText />
                <AboutSection />
                <ZoomImageAbout />
            </main>
        </HderTxtAboutlayout>
    )
}
