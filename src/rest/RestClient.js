const BASE_URL = "http://localhost:8080";
const STATUS_OK = "200";

export default class RestClient {
    loadLastTransactions() {
        return fetch(this.BASE_URL + "/lastTransactions", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK) return [];
            else return response.json();
        })
    }

    loadLastUsage() {
        return fetch(this.BASE_URL + "/lastUsage", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK) return [];
            else return response.json();
        })
    }

    loadAggregateState() {
        return fetch(this.BASE_URL + "/info", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK) return null;
            else return response.json();
        })
    }

    loadRegionUsage() {
        return fetch(this.BASE_URL + "/region/usage", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK) return [];
            else return response.json();
        })
    }

    loadRegionAggregateState() {
        return fetch(this.BASE_URL + "/region/info", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK) return null;
            else return response.json();
        })
    }
}