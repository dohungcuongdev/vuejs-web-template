import axios from 'axios';

export class APIService {

    apiUrl = process.env.API_URL;
    config = { headers: { } };

    constructor(apiUrl, endpoint, config) {
        if(apiUrl != null) {
            this.apiUrl = apiUrl
        }
        if(endpoint != null) {
            this.apiUrl = `${this.apiUrl}/${endpoint}`;
        }
        if(config != null) {
            this.config = config
        }
        console.log(this.apiUrl);
        console.log(this.config);
    }

    // if URL is not provided from const SERVICE_URL
    changeApiUrlTo(apiUrl) {
        this.apiUrl = apiUrl;
    }

    getDataFromUrl(url) {
        console.log(url);
        return axios.get(url,this.config).then(response => response.data);
    }

    getData() {
        const url = `${this.apiUrl}`;
        console.log(url);
        return axios.get(url,this.config).then(response => response.data);
    }

    getDataBy(param) {
        const url = `${this.apiUrl}/${param}`;
        console.log(url);
        return axios.get(url,this.config).then(response => response.data);
    }

    insertData(data) {
        const url = `${this.apiUrl}`;
        console.log(url);
        return axios.post(url,data,this.config);
    }

    updateDataBy(data, param) {
        const url = `${this.apiUrl}/${param}`;
        console.log(url);
        return axios.put(url,data,this.config);
    }

    updateDataByID(data) {
        const url = `${this.apiUrl}/${data.id}`;
        console.log(url);
        return axios.put(url,data,this.config);
    }

    deleteDataBy(data, param){
        const url = `${this.apiUrl}/${param}`;
        console.log(url);
        return axios.delete(url,data,this.config);
    }

    deleteDataByID(data) {
        const url = `${this.apiUrl}/${data.id}`;
        console.log(url);
        return axios.delete(url,data,this.config);
    }

}