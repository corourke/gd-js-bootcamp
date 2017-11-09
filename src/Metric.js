import React from 'react';
import {Kpi, CatalogHelper} from '@gooddata/react-components';
import './Metric.css'
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);

export default (props) => {
  const measureId = C.metric(props.metric);

  return (
    <div className="metric">
      <div className="metric-value">
        <Kpi
          projectId={props.project}
          measure={measureId}
          format="#.##a" />
      </div>
      <div className="metric-label">{props.label}</div>
    </div>
  )
}
