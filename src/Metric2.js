import React from 'react';
import {Kpi, CatalogHelper} from '@gooddata/react-components';
import './Metric.css'
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);

class Metric2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      measureId: C.metric(this.props.metric)
    }
  }

  render() {
    const composeLabel = () => {
      return this.state.isLoading ? 'Loading...' :
        this.props.label ? this.props.label :
          this.props.metric
    };

    return (
      <div className="metric">
        <div className="metric-value">
          <Kpi
            projectId={this.props.project}
            measure={this.state.measureId}
            format="#.##a"
            onLoadingChanged={ (result) => {this.setState(result)} }
            onError={ (err) => console.error(err) } />
        </div>
        <div className="metric-label">{ composeLabel() }</div>
      </div>
    )
  }
}

export default Metric2