import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) It defines a function called "drawCard"
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) It generates a combination of random number from 2~A and one of four suits.
    if (hand.indexOf(draw) === -1) {
      // 3) It states a condition when newly drawn card is not found in the dect of Hand.(Avoding duplication)
      setHand([...hand, draw])
      // 4) It will add a next card to previously drawn card set.
    } else if (hand.length !== 52) {
      // 5) it gives a condition when the number of card is NOT 52, meaning that if not all cards are drawn.
      drawCard()
      // 6) draw next card.
    } else {
      // 7) it implies the condition when the number of card reaches 52, meaning that all cards are drawn.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^
  const shuffle = () => {
      setHand([])
  }
  console.log(hand)
  return (
    <>
    {/* first error found */}
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}> Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}
export default App

