
import {offers} from '../../../data/offers';


export default function handler(req,res){
    res.status(200).json(offers)
}