const Input = () => {
  return (
    <div className="input">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button>ADD BOOK</button>
      </form>
    </div>
  )
}

export default Input;