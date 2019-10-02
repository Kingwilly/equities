import React from 'react';
import {Icon} from 'antd';

export const LocationBox = (props) => {
  if (!props.middle) {
    return(
        <div className="location-box">
            <h3>{props.mainHeader}</h3>
            <h2>{props.subHeader}</h2>
            <p><i><span>{props.start} <Icon type="right" style={{fontSize: 10 + 'px'}}/></span> {props.end}</i></p>
        </div>
    )
  }
  else {
    return(
        <div className="location-box">
            <h3>{props.mainHeader}</h3>
            <h2>{props.subHeader}</h2>
            <p><i>
              <span>
                {props.start} <Icon type="right" style={{fontSize: 10 + 'px'}}/> {props.middle} <Icon type="right" style={{fontSize: 10 + 'px'}}/>
              </span> {props.end}
            </i></p>
        </div>
    )
  }
}

export default LocationBox
