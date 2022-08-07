import Shopping from '../components/shoppingcard';


import { ResponsiveAppBar } from "../components/Menu"
import TitleOfOffers from '../components/titleOfoffers'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


 function Shoppingcard () {
    return(
        <>
        <ResponsiveAppBar />
        <TitleOfOffers />
        <Shopping />
        <Footer2 />
        <Footer />

        </>
    )
}


export default Shoppingcard