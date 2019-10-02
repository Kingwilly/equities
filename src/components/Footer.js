import React from 'react'
import { Row, Col } from 'antd'
import MellioEquitiesLargeLogo from '../assets/images/footer-logo.svg'
import { Link } from 'react-router-dom'

const INVESTOR_LOGIN_URL = "https://investors.melilloequities.com/login";

class CallOut extends React.Component {
	render() {
		return (
			<div>
				<br />
				<br />
				<Row>
					<Col
						className="portfolio-block portfolio-text-block portfolio-block-left"
						xs={24}
						md={8}>
						<div className="portfolio-block-outer">
							<div className="footer-left">
								<br />
								<a href={INVESTOR_LOGIN_URL} target='_blank'>
									<h3 className="portfolio-callout left">Login</h3>
								</a>
							</div>
						</div>
					</Col>
					<Col className="portfolio-block portfolio-text-block" xs={24} md={8}>
						<div className="portfolio-block-outer">
							<Link to="/">
								<img
									src={MellioEquitiesLargeLogo}
									className="footer-logo"
									alt="Mellio Equities Footer Logo"
								/>
							</Link>
							<p className="footer-text">
								350 MAIN STREET, SUITE 8,<br className="visible-mobile" />{' '}
								BEDMINSTER, NJ <br className="visible-mobile" />
								1+908 234 9561
							</p>
						</div>
					</Col>
					<Col className="portfolio-block portfolio-text-block" xs={24} md={8}>
						<div className="portfolio-block-outer">
							<div className="footer-right">
							<br />							
								<Link to={'/contact'}>
									<h3 className="portfolio-callout right">Contact</h3>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
				<br />
			</div>
		)
	}
}

export default CallOut
