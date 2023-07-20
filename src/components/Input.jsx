import { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorInputChange(event) {
    setAuthor(event.target.value);
  }


  function handleAddButtonClick(event) {
    event.preventDefault()
    return console.log(title, author)
  }

  return (
    <div className="input">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Title" onChange={handleTitleInputChange}/>
        <input type="text" placeholder="Author" onChange={handleAuthorInputChange} />
        <button onClick={handleAddButtonClick}>ADD A BOOK</button>
      </form>
    </div>
  )
}

export default Input;