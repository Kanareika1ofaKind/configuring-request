import React from 'react'

export default function App() {
  const  onSubmit = evt => {
    evt.preventDefault()
    fetch('http://localhost:3003/api/cats/4', {
      method: 'PUT',
      body: JSON.stringify({
        name: "Freddy RULES",
        // breed: "Siamese",
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'xyz'
      })
    })
      .then(res => {
        debugger
        return res.json()
      })
      .then(data => {
        debugger
        console.log(data);
      })
      .catch(err => {
        debugger
        console.log(err);
      })
  }
  return (
    <div>
      <h2>Hello, Cats!</h2>
      <form onSubmit={onSubmit}>
        <input  type="submit" />
      </form>
    </div>
  )
}
