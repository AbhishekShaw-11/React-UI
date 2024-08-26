import React from 'react'
import { useState,useContext,useEffect } from 'react'
import Card from './Card'
import Button from './Button'
import Rating from './Rating'
import FeedbackContext from './FeedbackContext'



const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('') 

  //useContextProvider is here
  const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const handleTextChange = ({target:{value}})=>{
    if(value === ''){
      setBtnDisable(true)
      setMessage(null)
    }
    else if(value.trim().length<5){
      setMessage('Text must be at least 5 characters')
      setBtnDisable(true)
    }else{
      setMessage(null)
      setBtnDisable(false)
    }
    setText(value)
  }
   
  const handleSubmit =(e) => {
    e.preventDefault()
    if(text.trim().length>5){
      const newFeedback = {
        text,
        rating,
      }
      if(feedback.edit==true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
    }
    else{
      addFeedback(newFeedback)
    }
    setBtnDisable(true)
    setRating(10)
    setText('')
   }
  }
  return (
    <card>
    <form onSubmit={handleSubmit}>
    <h2> Rate our service </h2>
    <RatingSelect select={setRating} selected={rating}/>
     <div className="input-group">
     <input 
     onChange={handleTextChange} 
     type="text"
     placeholder='Write a review'
     value={text}
     />
     <Button type='submit' isDisable={btnDisable}>Send</Button>
     </div>
     {message && <div className='message'>{message}</div>}
    </form>
      
    </card>
  )
}

export default FeedbackForm
