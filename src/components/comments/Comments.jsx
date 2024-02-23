import React, { useState } from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'

const Comments = () => {

    const [text,setText]=useState('asac')

    const handleComment=()=>{

    }
  return (
    <div className='comments'>
    <p>2374 Comments</p>
    <div className='my-2 comments__form d-flex w-100'>
       <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='avatar' className='mr-3 rounded-circle' />
       <form onSubmit={handleComment} className='d-flex flex-grow-1'>
          <input
             type='text'
             className='flex-grow-1'
             placeholder='Write a comment...'
             value={text}
             onChange={e => setText(e.target.value)}
          />
          <button className='p-2 border-0'>Comment</button>
       </form>
    </div>
    <div className='comments__list'>
        <Comment/>
       {/* {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
       ))} */}
    </div>
 </div>
  )
}

export default Comments