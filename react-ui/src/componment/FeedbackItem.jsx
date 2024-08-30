import React from 'react'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from './Card'
import FeedbackContext from './FeedbackContext'
import PropTypes from 'prop-types'

const FeedbackItem = ({item}) => {
    const {deleteFeedback , editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
     <button onClick={() => deleteFeedback(item.id) }className="Close"><FaTimes color='purple'/></button>
    <div className="text-display">{item.text}</div>
     </Card>
  )
}

FeedbackItem.prototype={
    item:PropTypes.object.isRequired,
}
export default FeedbackItem
