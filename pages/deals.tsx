import Offers from '../components/Offers';



import { ResponsiveAppBar } from "../components/Menu"
import TitleOfOffers from '../components/titleOfoffers'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


 function OffersProduct () {
    return(
        <>
        <ResponsiveAppBar />
        <TitleOfOffers />
        <Offers />
        <Footer2 />
        <Footer />

        </>
    )
}


export default OffersProduct