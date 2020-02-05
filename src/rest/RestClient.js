const BASE_URL = "http://192.168.1.91:5000";
const STATUS_OK = 200;

export default class RestClient {
    loadLastTransactions() {
        return fetch(BASE_URL + "/lastTransactions", {
            method: "GET",
        }).then(response => {
            console.log(response.status);
            if (response.status !== STATUS_OK || !response.ok) return [];
            else return response.json();
        })
    }

    loadLastUsage() {
        return fetch(BASE_URL + "/lastUsage", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK || !response.ok) return [];
            else return response.json();
        })
    }

    loadAggregateState() {
        return fetch(BASE_URL + "/info", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK || !response.ok) return null;
            else return response.json();
        })
    }

    loadRegionUsage() {
        return fetch(BASE_URL + "/region/usage", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK || !response.ok) return [];
            else return response.json();
        })
    }

    loadRegionAggregateState() {
        return fetch(BASE_URL + "/region/info", {
            method: "GET",
        }).then(response => {
            if (response.status !== STATUS_OK || !response.ok) return null;
            else return response.json();
        })
    }
}