import React from 'react'

import Background from '../assets/images/home-hero-town-color.jpg'
import { Layout } from 'antd'
import { Link } from 'react-scroll'

const { Content } = Layout

export const HeroImage = props => {
	return (
		<Layout
			className="barn-background"
			style={{
				minHeight: '100vh',
				backgroundPosition: 'bottom',
				backgroundSize: 'cover',
				backgroundImage: `url(${Background})`
			}}>
			<Content
				style={{
					margin: '0 0px',
					height: 70 + 'vh'
				}}>
				<div className="home-hero-block">
					<div className="shadow-box">
						<h3 className="home-hero-intro">URBANISM</h3>
						<h1 className="home-hero-title">Redefined</h1>
						<div className="home-hero-arrow home-hero-arrow-center arrow-down">
							<Link to="portfolio" spy={true} smooth={true} duration={700}>
								<span className="arrow">
									<span
										className="arrow-before"
										style={{ backgroundColor: 'white' }}
									/>
									<span
										className="arrow-after"
										style={{ borderColor: 'white' }}
									/>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</Content>
		</Layout>
	)
}

export default HeroImage
