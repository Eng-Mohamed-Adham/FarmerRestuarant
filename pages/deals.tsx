
//hooks
import useStyle from '../hooks/useStyle';
import useTitle from '../hooks/useTitle';

//params of useStyle hook
import {incrementOffers,decrementOffers} from '../store/fetchdataoffers' 
import {
    getDataOffers,
    selectData
}from '../store/fetchdataoffers'

//params of useTitle hook
import LocalOfferIcon from '@mui/icons-material/LocalOffer';




 function OffersProduct () {
    const title = useTitle(LocalOfferIcon,'The best Offers')
    const data = useStyle(getDataOffers,selectData,incrementOffers,decrementOffers)
    return(
        <>
        {title}
        {data}

        </>
    )
}


export default OffersProduct