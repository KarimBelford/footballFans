import React from 'react';


const Card = ({name,player,id,club}) =>{
    
    return (
        <div className='tc bg-yellow dib br3 pa3 ma2 bw2 grow shadow-5'>
            <img alt='Fan1' src = {`https://robohash.org/${id}?100x100`}/> 
            <div>
                <h2>{name}</h2>
                <div>
                    <p1 className='b'>Favourite Club: </p1>
                    <p2>{club}</p2>
                </div>
                <div>
                    <p1 className='b'>Favourite player: </p1>
                    <p2>{player}</p2>
                </div>
            </div>
        </div>

    );
}

export default Card;