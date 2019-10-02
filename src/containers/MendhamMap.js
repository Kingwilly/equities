import React from "react";
import MendhamMapLocation from "../assets/images/maps/mendham-tax-map.jpg";

import MapPage from "./MapPage";
class MendhamMap extends React.Component {
  townContent = (
    <div>
      <p>
        With its American Revolutionary War bona fides, welcoming commercial
        district, charming colonials and antique cottages dotting the hillside,
        Mendham has the allure of a small New England hamlet. This, along with
        its strong school system, reliable infrastructure and ample recreation
        space, helped earn it the #1 spot on NJ Monthly’s list of best places to
        live in 2013.
      </p>
      <br />
      <p>
        The town’s heritage has been preserved well over the years. Many old
        residences have been converted into public space and parks, and the
        town’s most recognizable landmark, The Black Horse Tavern and Pub, built
        in 1742, has welcomed customers since New Jersey was still a British
        Royal Colony. Like its Somerset County neighbors, the area experienced a
        burst of growth around the turn of the century when notable residences
        such as Pitney Farm and Hillandale were constructed. These historical
        homesteads remain a vibrant reminder of Mendham’s rich, storied past.
      </p>
    </div>
  );
  render() {
    return (
      <MapPage
        name="Mendham"
        image={MendhamMapLocation}
        imageAlt="Mendham Map"
        heading="Mendham"
        townContent={this.townContent}
        population={"5097"}
        distanceToNYC={"40 Miles"}
        publicSchool={
          "Mendham Borough Schools and West Morris Mendham High School"
        }
        area={"6 sq. mi."}
        publicTransportation={"n/a"}
        interstateAccess={"n/a"}
        homeOwnerOccupiedHousingUnits={"86.1%"}
        perCapitaIncome={"$48,629"}
        medianHouseholdIncome={"$110,348"}
      />
    );
  }
}

export default MendhamMap;
