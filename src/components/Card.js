import React from "react"

const Card = (props) => {
  return (
    <div className="handStyles">
      {props.hand.map((card, index) => {
        //third error found
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

export default Card
//second error found