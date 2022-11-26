
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

import  { Suspense } from 'react';




 function OffersProduct () {
    const title = useTitle(LocalOfferIcon,'The best Offers')
    const data = useStyle(getDataOffers,selectData,incrementOffers,decrementOffers)
    return(
        
        // <Suspense fallback={<div>Loading...</div>}>
        <>
        {title}
        {data}
        
         {/* </Suspense> */}

        </>


        
    )
}


export default OffersProduct