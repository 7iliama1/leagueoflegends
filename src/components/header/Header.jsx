import './header.scss'

import { logo } from '../../assets/images'

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="https://universe.leagueoflegends.com/en_GB/explore/everything/newest/" target="_blank">overview</a></li>
                    <li><a href="https://www.leagueoflegends.com/en-gb/news/" target="_blank">news</a></li>
                    <li><a href="https://www.leagueoflegends.com/en-gb/champions/" target="_blank">champions</a></li>
                    <li><a href="https://support.riotgames.com/hc/en-us" target="_blank">support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header