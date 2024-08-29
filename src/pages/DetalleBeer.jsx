import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState({})
    const params = useParams();

    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`)
        const data = await res.json()
        setBeer(data)
    }

    useEffect(()=>{
        getBeer()
    });

    return (
        <div className='card'>
            <h3>{beer.name}</h3>
            <p>{beer.price}</p>
            <img src={beer.image} alt="beer-detail" />
            <button className="button is-link">SAPE</button>
        </div>
    );
}

export default Beer