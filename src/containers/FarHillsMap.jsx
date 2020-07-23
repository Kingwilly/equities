import React from "react";
import FarHillsMapLocation from "../assets/maps/farhills/Farhills-map-3B-Final.jpg";
import {ReactComponent as FarHillsMapLocationAreas} from '../assets/maps/farhills/Far_Hills_Map-svg-3B-Final.svg';
import MapPage from "./MapPage";

export default class FarHillsMap extends React.PureComponent {
  townContent = (
    <div>
      <p>
        Much has changed since the day in 1887 that wealthy New Yorkers Grant
        and Elizabeth Schley visited what was then virgin wilderness on the
        outskirts of Bernardsville, where Elizabeth purportedly extolled the
        beauty of these “far hills”. That beauty, however, has endured, as
        attested to by the many notable historic residences in Far Hills
        including the Overleigh, Cragwood, and Mayfield estates.
      </p>
      <br />
      <p>
        Along with the stunning vistas and pristine waterways, residents of Far
        Hills enjoy cultural and scenic attractions known the world over. Far
        Hills is home to the United States Golf Association Museum and Arnold
        Palmer Center for Golf History, as well as Moorland Farms, host to the
        Grand National Steeplechase, the most prestigious race in American
        steeplechasing, and the Music at Moorland outdoor concert series.
      </p>
    </div>
  );
  render() {
    return (
      <MapPage
        name="FarHills"
        image={FarHillsMapLocation}
        areas={FarHillsMapLocationAreas}
        areasCss="far-hills-svg"
        imageAlt="Far Hills Map"
        heading="Far Hills"
        townContent={this.townContent}
        population={"927"}
        distanceToNYC={"42 Miles"}
        publicSchool={"Somerset Hills Regional School District"}
        area={"4.88 sq. mi."}
        publicTransportation={"Nj Transit's Far Hills Station"}
        interstateAccess={"n/a"}
        homeOwnerOccupiedHousingUnits={"77.1%"}
        perCapitaIncome={"$68,841"}
        medianHouseholdIncome={"$125,833"}
      />
    );
  }
}
