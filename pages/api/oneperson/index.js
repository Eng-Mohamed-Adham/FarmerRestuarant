
import {oneperson} from '../../../data/oneperson';


export default function handler(req,res){
    res.status(200).json(oneperson)
}