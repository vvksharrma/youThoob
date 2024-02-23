import React, { useEffect, useState } from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import {request} from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'

const VideoHorizontal = () => {
//    const {
//       id,
//       snippet: {
//          channelId,
//          channelTitle,
//          description,
//          title,
//          publishedAt,
//          thumbnails: { medium },
//          resourceId,
//       },
//    } = video

//    const isVideo = !(id.kind === 'youtube#channel' || subScreen)

//    const [views, setViews] = useState(null)
//    const [duration, setDuration] = useState(null)
//    const [channelIcon, setChannelIcon] = useState(null)

//    useEffect(() => {
//       const get_video_details = async () => {
//          const {
//             data: { items },
//          } = await request('/videos', {
//             params: {
//                part: 'contentDetails,statistics',
//                id: id.videoId,
//             },
//          })
//          setDuration(items[0].contentDetails.duration)
//          setViews(items[0].statistics.viewCount)
//       }
//       if (isVideo) get_video_details()
//    }, [id, isVideo])

//    useEffect(() => {
//       const get_channel_icon = async () => {
//          const {
//             data: { items },
//          } = await request('/channels', {
//             params: {
//                part: 'snippet',
//                id: channelId,
//             },
//          })
//          setChannelIcon(items[0].snippet.thumbnails.default)
//       }
//       get_channel_icon()
//    }, [channelId])

   const seconds = moment.duration("100").asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

//    const history = useNavigate()

//    const _channelId = resourceId?.channelId || channelId

// //    const handleClick = () => {
//       isVideo
//          ? history.push(`/watch/${id.videoId}`)
//          : history.push(`/channel/${_channelId}`)
//    }

//    const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'

   return (
      <Row
         className='py-2 m-1 videoHorizontal align-items-center'>
         {/* //TODO refractor grid */}
         <Col
            xs={6}
            md={4}
            className='videoHorizontal__left'>
            <LazyLoadImage
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               effect='blur'
               className={`videoHorizontal__thumbnail `}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            {/* {isVideo && (
               <span className='videoHorizontal__duration'>{_duration}</span>
            )} */}
         </Col>
         <Col
            xs={6}
            md={8}
            className='p-0 videoHorizontal__right'>
            <p className='mb-1 videoHorizontal__title'>nothing Tile</p>

            {/* {isVideo && ( */}
               <div className='videoHorizontal__details'>
                  <AiFillEye /> {numeral(10000).format('0.a')} Views •
                  {moment('2023-08-06').fromNow()}
               </div>
            {/* )} */}

            {/* {(searchScreen || subScreen) && ( */}
               <p className='mt-1 videoHorizontal__desc'>description</p>
            {/* )} */}

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {/* {isVideo && ( */}
                  <LazyLoadImage src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" effect='blur' />
               {/* )} */}
               <p className='mb-0'>T-Series</p>
            </div>
            {/* {subScreen && ( */}
               {/* <p className='mt-2'>
                  {video.contentDetails.totalItemCount} Videos
               </p> */}
            {/* )} */}
         </Col>
      </Row>
   )
}

export default VideoHorizontal