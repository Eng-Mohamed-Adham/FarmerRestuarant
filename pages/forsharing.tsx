





import useStyle from '../hooks/useStyle';
import useTitle from '../hooks/useTitle';

//params of useStyle hook
import {
    getDataSharing,
    selectDataSharing
}from '../store/fetchdatasharing'
import {incrementSharing,decrementSharing} from '../store/fetchdatasharing' 

//params of useTitle hook
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';


 function Sharing () {
    const title = useTitle(FamilyRestroomIcon,'The best to Sharing')
    const data = useStyle(getDataSharing,selectDataSharing,incrementSharing,decrementSharing)

    return(
        <>
        {title}
        {data}
        </>
    )
}


export default Sharing