import React from 'react'
import './watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/VIdeoHorizontal'
import { useParams } from 'react-router'

const WatchScreen = () => {

    const {id} =useParams()
  return (
    <Row>
        <Col lg={8}>
            <div className="watchScreen__player">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    rel='0'
                    controls='0'
                    autoplay='1'
                    title='my vid '
                    frameBorder='0'
                    allowFullScreen
                    width="100%"
                    height="100%"
                >

                </iframe>
            </div>
            <VideoMetaData/>
            <Comments/>
        </Col>
        <Col lg={4}>
        {[...Array(10)].map(()=>(
            <VideoHorizontal/>
            // <h1>test</h1>
        ))}
        </Col>
    </Row>
  )
}

export default WatchScreen