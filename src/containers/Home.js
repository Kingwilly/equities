import React from 'react'
import { Row, Col } from 'antd'
import { Element } from 'react-scroll'
import { NavLink } from 'react-router-dom'

import PortfolioSection from '../components/PortfolioSection'
import HomeHeroImage from '../components/HomeHeroImage'
import HeroImage from '../components/HeroImage'
import FirmIntro from '../assets/images/our-firm.png'
import LeadershipIntro from '../assets/images/lion.jpg'
import StrategyBackground from '../assets/images/strategy.png'

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeHeroImage />
				<Row style={{ textAlign: 'center' }}>
					<NavLink to="/firm">
						<HeroImage
							smallCall={'OUR'}
							largeCall={'Firm'}
							height={45}
							background={FirmIntro}
							fadeOnHover={true}
							centerCenter={true}
							arrowDirection={'right'}
							textPosition={'center'}
							url={'/firm/firm-overview'}
						/>
					</NavLink>
				</Row>
				<Element name="portfolio">
					<PortfolioSection />
				</Element>
				<Row style={{ textAlign: 'center' }}>
					<NavLink to="/strategy">
						<HeroImage
							smallCall={'OUR'}
							largeCall={'Strategy'}
							height={45}
							fadeOnHover={true}
							background={StrategyBackground}
							arrowDirection={'right'}
							textPosition={'center'}
							url={'/strategy/strategy-overview'}
						/>
					</NavLink>
				</Row>

				
			</div>
		)
	}
}

export default Home
