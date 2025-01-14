import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


export const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  
  return (
    <article className='question'>
      <header>
            <h4>{title}</h4>
      </header>
      <p>{info}</p>
    </article>
  )
}
export default SingleQuestion