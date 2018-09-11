import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


export default (props) => {

  console.log(props.color);

  return (
    <div className="card col-12 col-md-6 col-lg-4 display-graph">
      <Sparklines style={{background: "#f7f7f7"}} height={100} width={160} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesSpots />
      </Sparklines>

      <h4 className="display-graph__text">{props.text}</h4>
    </div>
  );
}