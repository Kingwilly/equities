import React from "react";
import BernardsvilleMapLocation from "../assets/maps/bernadsville/Bernardsville-map-new-KW-v3.jpg";
import {ReactComponent as BernardsvilleMapLocationAreas} from '../assets/maps/bernadsville/Bernardsville-map-new-KW-v3.svg';
import MapPage from "./MapPage";

export default class BernardsvilleMap extends React.PureComponent {
  townContent = (
    <div>
      <p>
        The many layered history of Bernardsville can be seen in the dramatic
        variety of its architecture. The city’s municipal offices are housed in
        Borough Hall, which was built over 200 years ago and prior to being the
        seat of local government served as a grist mill, sawmill, cider mill and
        distillery. Luxurious estates such as Upton Pyne, Boulderwood and
        Claremont dot the hillside, testament to the extravagant wealth New
        York’s elite brought to the area when the railroad first connected
        Manhattan with the idyllic Somerset hills. In the center of town the
        Olcott Avenue Historic District, recognized by the National Register of
        Historical Places, features diverse and well-preserved examples of late
        19th and early 20th century architecture.{" "}
      </p>
      <br />
      <p>
        A history of altruism has also shaped the backroads of the borough; New
        Jersey Audubon calls Bernardsville home, and the Scherman Hoffman
        Wildlife Sanctuary, bequeathed by private citizens over the course of
        two decades, fosters environmental awareness and a conservation ethic
        among New Jersey's citizens.
      </p>
      <br />
      <p>
        All this, along with its enviable location along the I-78 and I-287
        corridors, contributes to making Bernardsville one of New Jersey’s
        uniquely appealing suburban communities.
      </p>
    </div>
  );
  render() {
    return (
      <MapPage
        name="Bernardsville"
        image={BernardsvilleMapLocation}
        areas={BernardsvilleMapLocationAreas}
        imageAlt="Bernardsville Map"
        heading="Bernardsville"
        townContent={this.townContent}
        population={"7805"}
        distanceToNYC={"39 Miles"}
        publicSchool={"Somerset Hills Regional School District"}
        area={"12.98 sq. mi."}
        publicTransportation={"NJ Transit’s Bernardsville Station"}
        interstateAccess={"I-287 and I-78"}
        homeOwnerOccupiedHousingUnits={" 83.7%"}
        perCapitaIncome={"$70,141"}
        medianHouseholdIncome={"$128,333"}
      />
    );
  }
}
