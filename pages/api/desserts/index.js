import {desserts} from '../../../data/desserts';


export default function handler(req,res){
    res.status(200).json(desserts)
}