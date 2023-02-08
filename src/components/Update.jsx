import { useState } from 'react'
import axios from 'axios'
import './styles.css'

const Update = () => {
  const [id, setId] = useState()
  let url = 'http://127.0.0.1:8000/update'
  const handleSubmit = () => {
    axios.post(url, { id: id })
  }

  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit}>
        <div className='label-container'>
          <label>Id:</label>
          <input value={id} onChange={(event) => setId(event.target.value)} type='number' />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}
export default Update
