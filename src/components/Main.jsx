import { useState } from "react";
import Form from "./Form.jsx"
//import AnswersList from "./AnswersList.jsx"


function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rating, setRating] = useState('')
  const [time, setTime] = useState('')
  const [say, setSay] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  function ratingInput(event) {
    const inputValue = event.target.value;
    setRating(inputValue);
  }

  function checkTimeInput(event) {
    const inputValue = event.target.value;
    setTime(inputValue);
  }

  function sayInput(event) {
    const inputValue = event.target.value;

    setSay(inputValue);
  }

  function nameInput(event) {
    const inputValue = event.target.value;
    setName(inputValue);
  }

  function emailInput(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);
  }


  function submitButton(event){
    event.preventDefault();
    const userInfo = {rating, time, say, name, email}
    console.log('Form Submission', userInfo)

    setRate('')
    setTime('')
    setSay('')
    setUsername('')
    setEmail('')
  }


  return (
    <main className="main" onSubmit={submitButton}>
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{


<form class="form">
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
  <li>
    <input id="color-one" 
    type="radio"
    name="color" 
    value="1" 
    onChange={ratingInput}
    checked={rating === "1"}/><label
      for="color-one"
      >1</label
    >
  </li>
  <li>
    <input id="color-two" 
    type="radio" 
    name="color" 
    value="2" 
    onChange={ratingInput}
    checked={rating === "2"}/><label
      for="color-two"
      >2</label
    >
  </li>
  <li>
    <input id="color-three" 
    type="radio" 
    name="color" 
    value="3" 
    onChange={ratingInput}
    checked={rating === "3"}/><label
      for="color-three"
      >3</label
    >
  </li>
  <li>
    <input id="color-four" 
    type="radio" 
    name="color" 
    value="4" 
    onChange={ratingInput}
    checked={rating === "4"}/><label
      for="color-four"
      >4</label
    >
  </li>
</ul>

  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        onChange={checkTimeInput}
          checked={time === 'swimming'}
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" 
      type="checkbox" 
      value="bathing" 
      onChange={checkTimeInput}
      checked={time === 'bathing'}
      />Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        onChange={checkTimeInput}
        checked={time === 'chatting'}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" 
      type="checkbox" 
      value="noTime" 
      onChange={checkTimeInput}
      checked={time === 'noTime'}
      />I don't like to
      spend time with it</label
    >
  </li>
</ul>

  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
      onChange={sayInput}
        value={say}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value=''
      onChange={nameInput}
        value={name}
      /></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      value="" 
      onChange={emailInput}
        value={email}
      /></label
  ><input class="form__submit" 
  type="submit" 
  value="Submit Survey!" />
</form>
      }</section>
    </main>
  );
}

export default Main;
