import {forsharing} from '../../../data/frosharing';


export default function handler(req,res){
    res.status(200).json(forsharing)
}