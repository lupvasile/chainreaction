import React, {Component} from "react";
import model from "../model/model";
import IndividualDashboard from "../view/IndividualDashboard";
import RegionDashboard from "../view/RegionDashboard";

const mapModelStateToComponentState = (modelState, props) => ({
    regionUsage: modelState.regionUsage,
    regionAggregateState: modelState.regionAggregateState,
});

export default class SmartIndividualDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(model.state, this.props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <RegionDashboard
                usage={this.state.regionUsage}
                aggregateData={this.state.regionAggregateState}
            />
        );
    }
}
