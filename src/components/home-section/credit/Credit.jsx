import './credit.scss'

import { useRef, useEffect } from 'react'
import { bgVideo } from '../../../assets/videos'
import Button from '../../button/Button'

const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);
        
        const handlePlayNowClick = () => {
            window.open('https://signup.leagueoflegends.com/en-gb/signup/index#/', '_blank');
        };

        const handlePlayNowClickSecond = () => {
            window.open('https://www.leagueoflegends.com/en-gb/news/game-updates/2024-gameplay-preview/', '_blank');
        };

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="cover"
                height="150%"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Start Your</span>
                    <h2 className="main-color">LEGENDS</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">
                    <a href="#"  rel="noopener noreferrer" onClick={handlePlayNowClick}>
                        PLAY NOW
                    </a>
                    </Button>
                    <Button className="btn-second">
                    <a href="#"  rel="noopener noreferrer" onClick={handlePlayNowClickSecond}>
                        GET STARTED
                    </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Credit