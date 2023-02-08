import { useState, useEffect } from 'react'
import axios from 'axios'

const Stage4 = ({ data }) => {
  const [ids, setIds] = useState()
  const [titles, setTitles] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/4').then((d) => {
      setIds(d.data.ids)
      setTitles(d.data.titles)
      setLoaded(true)
    })
  }, [])
  let info = ''
  if (loaded) {
    info = ids.map((id, i) => (
      <li>
        {id}: {titles[i]}
      </li>
    ))
  }

  return (
    <div>
      <h3>Stage 4</h3>
      {loaded ? <ul>{info}</ul> : <p>loading...</p>}
    </div>
  )
}
export default Stage4
