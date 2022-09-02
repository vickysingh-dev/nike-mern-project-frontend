import LaunchPage from './home/LaunchPage';
import HomePage from './home/HomePage';
import OutfitOverlay from './home/OutfitOverlay';
import OutfitGallery from './home/OutfitGallery';
import ShoesOverlay from './home/ShoesOverlay';
import About from './home/About';
import Footer from './home/Footer';

function FirstPage() {
    return (
        <div className="firstPage">
            <LaunchPage />
            <HomePage />
            <OutfitOverlay />
            <OutfitGallery />
            <ShoesOverlay />
            <About />
            <Footer />
        </div>
    )
}

export default FirstPage;