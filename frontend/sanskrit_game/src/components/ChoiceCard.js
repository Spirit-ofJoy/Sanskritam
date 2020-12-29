import React from 'react';

import './ChoiceCard.css';

//Main Button-Card component to store and display letters
const ChoiceCard = (props) => {
    
        return (

            <div className="d-inline container">
                <button type="button" className="btn btn-primary" onClick={()=>{ cardClick(props.letter) } }> {props.letter} </button>  {/*onClick={cardClick()*/}
            </div>
            
        );

}

function cardClick(text) {
    alert(text +" clicked!");  //Modify card functionality here
}


export default ChoiceCard;