import React from 'react'
import ShowMoreText from 'react-show-more-text'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import './_videoMeta.scss'

const VideoMetaData = () => {
    const subscriptionStatus='Subscribe'
  return (
    <div className='py-2 videoMetaData'>
         {/* <HelmetCustom title={title} description={description} /> */}

         <div className='videoMetaData__top'>
            <h5>Video title</h5>
            <div className='py-1 d-flex justify-content-between align-items-center'>
               <span>
                  {numeral(1000).format('0.a')} Views •{' '}
                  {moment('2003-10-10').fromNow()}
               </span>

               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} /> {numeral(575).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} />{' '}
                     {numeral(234).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                  alt=''
                  className='mr-3 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>XYC</span>
                  <span>
                     {' '}
                     {numeral(842).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
               className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
         </div>
         <div className='videoMetaData__description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nemo accusantium at sapiente distinctio similique nulla quisquam odit, saepe ad expedita perferendis aliquam enim consequuntur consectetur eum error tempora libero?
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam omnis libero quaerat fugiat et impedit esse mollitia incidunt, sit, iste optio harum nostrum nobis velit. Voluptas magni expedita iure harum!
            </ShowMoreText>
         </div>
      </div>
  )
}

export default VideoMetaData