import React from "react";
import { Row } from "antd";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import PortfolioSection from "../components/PortfolioSection";
import HomeHeroImage from "../components/HomeHeroImage";
import HeroImage from "../components/HeroImage";
import FirmIntro from "../assets/images/our-firm.png";
import StrategyBackground from "../assets/images/strategy.png";

export default function Home() {
  return (
    <div>
      <HomeHeroImage />
      <Row style={{ textAlign: "center" }}>
        <NavLink to="/firm">
          <HeroImage
            smallCall={"OUR"}
            largeCall={"Firm"}
            height={45}
            background={FirmIntro}
            fadeOnHover={true}
            centerCenter={true}
            arrowDirection={"right"}
            textPosition={"center"}
            url={"/firm/firm-overview"}
          />
        </NavLink>
      </Row>
      <Element name="portfolio">
        <PortfolioSection />
      </Element>
      <Row class="ml-auto mr-auto">
        <NavLink to="/strategy">
          <HeroImage
            smallCall={"OUR"}
            largeCall={"Strategy"}
            height={45}
            fadeOnHover={true}
            background={StrategyBackground}
            arrowDirection={"right"}
            textPosition={"center"}
            url={"/strategy/strategy-overview"}
          />
        </NavLink>
      </Row>
    </div>
  );
}
