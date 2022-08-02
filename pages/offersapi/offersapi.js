import { useState,useEffect } from "react";




export let DataOfOffers;

function Offersapi() {
    const [offers, setOffers] = useState([])
useEffect(()=> {
    fetchDataOffers()
},[])
    const fetchDataOffers = async () => {
        const response = await fetch('/api/offers')
        const data = await response.json()
        setOffers(data)
        DataOfOffers = [data]

    }



    // console.log(DataOfOffers)
    return(
        <>
        
            {
                offers.map(e => {
                    return(
                        <div key={e.id}>
                            {e.label}
                            {e.info}

                        </div>
                    )
                })
            }
        
        </>
      
    )
}

export default Offersapi