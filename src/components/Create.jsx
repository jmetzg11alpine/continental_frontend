import { useState } from 'react'
import axios from 'axios'
import './styles.css'

const Create = () => {
  const [title, setTitle] = useState()
  let url = 'http://127.0.0.1:8000/post'
  const handleSubmit = () => {
    console.log('donkey')
    axios.post(url, { title: title })
  }

  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit}>
        <div className='label-container'>
          <label>Title:</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} type='text' />
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
export default Create
