import React, {Component} from "react";
import model from "../model/model";
import IndividualDashboard from "../view/IndividualDashboard";

const mapModelStateToComponentState = (modelState, props) => ({
    lastTransactions: modelState.lastTransactions,
    lastUsage: modelState.lastUsage,
    aggregateData: modelState.aggregateState,
    tips: modelState.tips,
});

export default class SmartIndividualDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(model.state, this.props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        model.addListener("change", this.listener);
    }

    componentDidMount() {
        model.loadBackend();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <IndividualDashboard
                lastTransactions={this.state.lastTransactions}
                lastUsage = {this.state.lastUsage}
                aggregateData={this.state.aggregateData}
                tips = {this.state.tips}/>
        );
    }
}
