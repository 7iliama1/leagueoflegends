import { useEffect } from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion
} from '../../../assets/images'

const champImgs = [champAshe, champAhri, champGaren]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, []);


    const handlePlayNowClick = () => {
        window.open('https://signup.leagueoflegends.com/en-gb/signup/index#/', '_blank');
    };

    const handlePlayNowClickSecond = () => {
        window.open('https://www.leagueoflegends.com/en-gb/news/game-updates/2024-gameplay-preview/', '_blank');
    };

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Legends of Runeterra</h2>
                    </div>
                    <div className="description m-t-4">
                    Join forces with your pals and put your abilities to the test in 5v5 MOBA battles. 
                    Experience the intense, high-skill competition you desire, tailored specifically for mobile and console gaming with enhanced controls and quick-paced matches. 
                    Immerse yourself in the dynamic world of Runeterra through captivating stories, comics, games, and additional content. 
                    Then, become part of a vibrant community consisting of gamers, cosplayers, musicians, and content creators eagerly anticipating your collaboration.
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
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome