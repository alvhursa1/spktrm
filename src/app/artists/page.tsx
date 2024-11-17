
import BannerArtists from "@/components/artists/BannerArtists";
import ArtistGallery from "@/components/artists/Gallery/ArtistGallery";
import StoreButtonArtists from "@/components/buttons/StoreButtonArtists";
import Footer from "@/components/footer/Footer";
import HderTxtArtistslayout from "@/components/header/HderTxtArtistslayout";



export default function Home() {
    return (
        <HderTxtArtistslayout>
            <main>
                <BannerArtists />
                <ArtistGallery />
                <StoreButtonArtists />
                <Footer />
            </main>
        </HderTxtArtistslayout>

    )
}