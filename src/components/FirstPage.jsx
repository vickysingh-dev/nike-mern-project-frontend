import LaunchPage from './home/LaunchPage';
import HomePage from './home/HomePage';
import OutfitOverlay from './home/OutfitOverlay';
import OutfitGallery from './home/OutfitGallery';
import ShoesOverlay from './home/ShoesOverlay';
import SignUp from './home/SignUp';
import Footer from './home/Footer';

function FirstPage() {
    return (
        <div className="firstPage">
            <LaunchPage />
            <HomePage />
            <OutfitOverlay />
            <OutfitGallery />
            <ShoesOverlay />
            <SignUp />
            <Footer />
        </div>
    )
}

export default FirstPage;