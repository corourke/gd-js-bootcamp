import React from 'react';
import {Kpi, CatalogHelper} from '@gooddata/react-components';
import './Metric.css'
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);

class Metric2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      format: "#.##a",
      measureId: C.metric(this.props.metric)
    }
    if(this.state.measureId === undefined) this.setState({error: true});
  }

  render() {
    const composeLabel = () => {
      return this.state.error ? this.state.error.status :
        this.state.isLoading ? 'Loading...' :
          this.props.label ? this.props.label :
            this.props.metric
    };

    return (
      <div className={"metric" + (this.state.error ? " metric--state-error" : "") }>
        <div className="metric-value">
          <Kpi
            projectId={this.props.project}
            measure={this.state.measureId}
            format="#.##a"
            onLoadingChanged={ (result) => {this.setState(result)} }
            onError={ (err) => { this.setState({error: err})} } />
        </div>
        <div className="metric-label">{ composeLabel() }</div>
      </div>
    )
  }
}

export default Metric2
