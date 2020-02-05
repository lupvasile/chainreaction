import {EventEmitter} from "events";
import RestClient from "../rest/RestClient";

const makeTransaction =(date, destination, amount) => ({
    date, destination, amount
});

const makeConsumption =(date, produced, consumed) => ({
    date, produced, consumed
});

const makeCurrentState = (coins, totalProduced, totalConsumed) => ({
    coins, totalProduced, totalConsumed
});

const initialState = {
    lastTransactions: [
      makeTransaction("12-02-02", "asdfq09u23ua0sdhf", 20),
      makeTransaction("12-02-02", "asdfq09u23ua0sdhf", 20),
      makeTransaction("12-02-02", "asdfq09u23ua0sdhf", 20),
    ],
    lastUsage: [
        makeConsumption("13-02-02", 10,30),
        makeConsumption("13-02-02", 20,10),
        makeConsumption("13-02-02", 40,35),
    ],
    aggregateState: makeCurrentState(300, 90, 400),
    tips: [
        "Try to use less energy during 14:00 and 16:00\n",
        "Your energy consumption between 08:00 and 10:30 could be increased\n",
    ],

    regionUsage: [
        makeConsumption("15-02-02", 10,30),
        makeConsumption("13-02-02", 20,10),
        makeConsumption("13-02-02", 40,35),
    ],
    regionAggregateState: makeCurrentState(300, 90, 400),
};

const backendState = (client) => {
    return client.loadLastTransactions().then(lastTransactions=>
    client.loadLastUsage().then(lastUsage=>
    client.loadAggregateState().then(aggregateState=>
    client.loadRegionUsage().then(regionUsage=>
    client.loadRegionAggregateState().then(regionAggregateState=>
    {
        return {
            lastTransactions,
            lastUsage,
            aggregateState,
            tips: [
                "Try to use less energy during 14:00 and 16:00\n",
                "Your energy consumption between 08:00 and 10:30 could be increased\n",
            ],
            regionUsage,
            regionAggregateState,
        }
    })))));
};

class Model extends EventEmitter {
    constructor() {
        super();

        this.state = {
            lastTransactions: [],
            lastUsage: [],
            aggregateState: null,
            tips: [],

            regionUsage: [],
            regionAggregateState: null,
        };

        this.client = new RestClient();
        //this.state = initialState;
    }

    loadBackend() {
        backendState(this.client).then(state=>{
            this.state = state;
            this.emit("change", this.state);
        })
    }

    changeModelProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
}

const model = new Model();

export default model;