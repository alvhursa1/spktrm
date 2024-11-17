import AboutBannerText from "@/components/about/AboutBannerText"
import HderTxtAboutlayout from "@/components/header/HderTxtAboutlayout"
import AboutSection from "@/components/about/AboutSection"

export default function Home() {
    return (
        <HderTxtAboutlayout>
            <main>
                <AboutBannerText />
                <AboutSection />
            </main>
        </HderTxtAboutlayout>
    )
}
