import Dessert from '../components/Desserts';



import { ResponsiveAppBar } from "../components/Menu"
import TitleDessert from '../components/titleForDessert'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


 function DessertProduct () {
    return(
        <>
        <ResponsiveAppBar />
        <TitleDessert />
        <Dessert />
        <Footer2 />
        <Footer />

        </>
    )
}


export default DessertProduct