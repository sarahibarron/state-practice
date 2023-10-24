import raccoon from "../assets/raccoon.png";
import { useState } from "react";

// when we want to use useState, we have to import it with {}'s
export default function Child(props) {
  //use state is just a function
  // as an arguement it takes an initial value for a
  // 'state' variable
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>{props.name} is the child</p>
      <img src={raccoon} onClick={handleLikes} />
      <span>♡ {likes}</span>
    </div>
  );
}
