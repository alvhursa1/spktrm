
import BannerArtists from "@/components/artists/BannerArtists";
import ArtistGallery from "@/components/artists/Gallery/ArtistGallery";
import HderTxtArtistslayout from "@/components/header/HderTxtArtistslayout";



export default function Home() {
    return (
<HderTxtArtistslayout>
<main>
<BannerArtists />
<ArtistGallery />
</main>
</HderTxtArtistslayout>

    )
}