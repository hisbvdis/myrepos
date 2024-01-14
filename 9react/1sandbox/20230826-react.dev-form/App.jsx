import { useState } from "react"

export default function App() {
  const [status, setStatus] = useState("typing"); // "typing", "submitting", "success"
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  const isSubmitting = status === "submitting";
  const isEmpty = answer.length === 0;
  const btnIsDisabled = isSubmitting || isEmpty;

  function handleTextChange(evt) {
    setAnswer(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setStatus("submitting");
    try {
      await submit(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }
  
  if (status === "success") {
    return <h2>That`s right!</h2>;
  }
  
  return (<>
    <h2>City quiz</h2>
    <p>In which city is there a billboard that turns air into drinkable water?</p>
    <form onSubmit={handleSubmit}>
      <input type="text" value={answer} onChange={handleTextChange} disabled={isSubmitting}/>
      <button type="submit" disabled={btnIsDisabled}>Submit</button>
      {error && <p>{error.message}</p>}
    </form>
  </>)
}



async function submit(guess) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (guess.trim().toLowerCase() === "lima") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1000)
  })
}
