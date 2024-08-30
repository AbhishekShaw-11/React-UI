import React from 'react'
import {motion, AnimatePresence} from 'frame-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'
import FeedbackContext from './FeedbackContext'

const Feedbacklist = () => {
 const { feedback,isLoading}= useContext(FeedbackContext)

 if(isLoading &&(!feedback || feedback.length===0)){
    return <p>No FeedBack Yet</p>
 }

  return isLoading?( <Spinner/> ) : (
    <div className='feedback-list'>
    <AnimatePresence>
    {feedback.map((item) =>(
        <motion.div
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        layout
        >
        <FeedbackItem key={item.id} item={item}/>
        </motion.div>
    ))}
    </AnimatePresence>
      
    </div>
  )
}

export default Feedbacklist
