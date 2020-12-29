import React from 'react';

import './ScoreCard.css';

//Main Button-Card component to store and display letters
const ScoreCard = (props) => {
    
        return (

            <div className="scorecard-container">
                
                <div className="score-container">
                    <h3>
                        <small className="text-muted">Score: </small>
                        { props.currentScore /*Score to be displayed*/ }
                    </h3>
                </div>

                <div className="submit-container">
                    {/* The submission of answer for validation */}
                    <button type="button" className="btn btn-outline-success" onClick={ ()=> {SubmitClick()} }>Submit</button>
                </div>

            </div>
            
        );

}

function SubmitClick() {
    //Check Answer here
    alert("Submit clicked!");  //Modify submit functionality here
}


export default ScoreCard;