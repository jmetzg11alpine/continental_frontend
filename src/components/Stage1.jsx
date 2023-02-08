import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

const Stage1 = ({ data }) => {
  const [ids, setIds] = useState()
  const [titles, setTitles] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get('https://axh4l5.deta.dev/1').then((d) => {
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
    <div className='info-container'>
      <h3>Stage 1</h3>
      {loaded ? <ul>{info}</ul> : <p>loading...</p>}
    </div>
  )
}
export default Stage1
