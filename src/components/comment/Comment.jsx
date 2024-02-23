import React from 'react'
import './_comment.scss'
import moment from 'moment'

const Comment = () => {
  return (
    <div className='p-2 comment d-flex'>
         <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
               viek • {moment('2003-12-12').fromNow()}
            </p>
            <p className='mb-0'>bchdbcwd</p>
         </div>
      </div>
  )
}

export default Comment