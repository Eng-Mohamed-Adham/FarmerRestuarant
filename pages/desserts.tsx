import Dessert from '../components/Desserts';



import { ResponsiveAppBar } from "../components/Menu"
import TitleOfOffers from '../components/titleOfoffers'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


 function DessertProduct () {
    return(
        <>
        <ResponsiveAppBar />
        <TitleOfOffers />
        <Dessert />
        <Footer2 />
        <Footer />

        </>
    )
}


export default DessertProduct