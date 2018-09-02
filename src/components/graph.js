import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


export default (props) => {

  return (
    <div className="card col-12 col-md-6 col-lg-4">
      <Sparklines style={{background: "#f7f7f7"}} height={100} width={160} data={[5, 10, 5, 20, 8, 5]}>
        <SparklinesLine color={"blue"} />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
}