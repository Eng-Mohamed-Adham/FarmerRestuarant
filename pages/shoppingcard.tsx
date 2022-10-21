import Shopping from '../components/shoppingcard';

import useTitle from '../hooks/useTitle';

import FastfoodIcon from '@mui/icons-material/Fastfood';




 function Shoppingcard () {
    const title =useTitle(FastfoodIcon,'Your Order ')
    return(
        <>
        {title}
        <Shopping />

        </>
    )
}


export default Shoppingcard