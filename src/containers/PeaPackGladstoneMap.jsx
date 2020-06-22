import React from "react";
// import PeapackGladstoneMapLocation from "../assets/images/maps/gladstone-tax-map.jpg";
import PeapackGladstoneMapLocation from "../assets/images/maps/peapack-gladstone-7-19-19.jpg";
import MapPage from "./MapPage";

export default class PeaPackGladstoneMap extends React.PureComponent {
  townContent = (
    <div>
      <p>
        For more than a hundred years since petitioning the state for a charter,
        Peapack & Gladstone has retained the bucolic charm that enticed New
        York’s noblesse since the turn of the century. That history is woven
        into modern day life in the borough, a place that boasts not only
        historic estates such as Blairsden and Vernon Manor but also Pfizer
        headquarters, dynamic cultural opportunities and first-rate public
        schools.
      </p>
      <br />
      <p>
        Peapack Gladstone is also Home to the US Equestrian Team’s headquarters
        at Hamilton Farms, the historic Essex Hunt Club and Fox Hounds, and the
        stunning Natirar. Once a 500 acre estate built by the co-founder of
        Macy’s, Natirar was acquired by Somerset County from the King of Morocco
        in 2003. The vast majority of the estate was then opened up to the
        public, who can access the cultivated lawns, woodlands, historic
        buildings, hiking trails, and designated fishing areas all year long.
        The remaining 90 acres were leased to a luxury spa developer, who
        recently opened the renovated mansion as a fully modern event space,
        restaurant and spa.
      </p>
    </div>
  );
  render() {
    return (
      <MapPage
        name="Peapack"
        image={PeapackGladstoneMapLocation}
        imageAlt="Peapack Gladstone Map"
        heading="Peapack & Gladstone"
        townContent={this.townContent}
        population={"2599"}
        distanceToNYC={"45 Miles"}
        publicSchool={"Somerset Hills Regional School District"}
        area={"5.85 sq. mi."}
        publicTransportation={
          "NJ Transit’s Gladstone Station, NJ Transit’s Peapack Station"
        }
        interstateAccess={"n/a"}
        homeOwnerOccupiedHousingUnits={"76.9%"}
        perCapitaIncome={"$79,031"}
        medianHouseholdIncome={"$123,875"}
      />
    );
  }
}
