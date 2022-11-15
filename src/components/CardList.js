import React from "react";
import Card from "./Card";



const CardList = ({fans}) => {
    return (
        <div>
            {
                fans.map((user,i) => {
                    return (
                        <Card 
                        key = {i} 
                        id ={fans[i].id} 
                        name ={fans[i].name} 
                        player={fans[i].player}
                        club ={fans[i].club}
                         />
                     );
                 })
            }  
        </div>
    );   
}

export default CardList;