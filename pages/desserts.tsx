


import useStyle from '../hooks/useStyle';
import useTitle from '../hooks/useTitle';
//params of useStyle hook
import {
    getDataDesserts,
    selectDataDesserts
}from '../store/fetchdatadessert'
import {incrementDessert,decrementDessert} from '../store/fetchdatadessert' 

//params of useTitle hook
import CakeIcon from '@mui/icons-material/Cake';


 function DessertProduct () {
    const title =useTitle(CakeIcon,'The best Desserts')
    const data = useStyle(getDataDesserts,selectDataDesserts,incrementDessert,decrementDessert)
    return(
        <>
        {title}
        {data}

        </>
    )
}


export default DessertProduct