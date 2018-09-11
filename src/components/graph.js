import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


export default (props) => {

  return (
    <div className="card col-12 col-md-6 col-lg-4 display-graph">
      <Sparklines height={100} width={160} data={props.data}>
        <SparklinesLine color={"blue"} />
        <SparklinesSpots />
      </Sparklines>

      <h4 className="display-graph__text">{props.text}</h4>
    </div>
  );
}