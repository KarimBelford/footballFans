import React from "react";

const SearchBox = ({searchfield, searching}) => {
    return (
        <div className='pa2'>
            <input
                className="pa2" 
                type= 'search' 
                placeholder= 'Search Club' 
                onChange = {searching}

            />
        </div>
        
    );
}

export default SearchBox