








import useStyle from '../hooks/useStyle';
import useTitle from '../hooks/useTitle';

//params of useStyle hook
import {
    getDataOnePerson,
    selectDataOnePerson
}from '../store/fetchdataoneperson'

import {incrementOneperson,decrementOneperson} from '../store/fetchdataoneperson' 

//params of useTitle hook
import LocalDiningIcon from '@mui/icons-material/LocalDining';

 function ForOne () {
    const title = useTitle(LocalDiningIcon,'The best individual meals')
    const data = useStyle(getDataOnePerson,selectDataOnePerson,incrementOneperson,decrementOneperson)
    return(
        <>
        {title}
        {data}

        </>
    )
}


export default ForOne