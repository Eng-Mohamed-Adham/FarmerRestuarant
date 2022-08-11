import Shopping from '../components/shoppingcard';


import { ResponsiveAppBar } from "../components/Menu"
import TitleShopping from '../components/titleOfShopping'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'


 function Shoppingcard () {
    return(
        <>
        <ResponsiveAppBar />
        <TitleShopping />
        <Shopping />
        <Footer2 />
        <Footer />

        </>
    )
}


export default Shoppingcard