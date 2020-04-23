import Axios from 'axios';
import { any } from 'prop-types';

export default class API{

    URL = "https://localhost:8000";

    getActivities(){
        return new Promise((resolve,reject) => {
            return Axios.get(this.URL + `/activity/getActivity`)
                .then(resp => resolve(resp.data))
                .catch(resp => reject(resp));

        })
    }


    importingCSV(){
        return new Promise((resolve,reject) => {
                return Axios.post(this.URL + `/csv`, {file:any})
                .then(resp => resolve(resp.data))
                .catch(resp => reject(resp));
        })
    }

    getChild(){
        return new Promise((resolve,reject) => {
            return Axios.get(this.URL + `/camper/find`)
            .then(resp => resolve(resp.data))
            .catch(resp => reject(resp));

        })
    }

    addChild(){
        return new Promise((resolve,reject) => {
            return Axios.post(this.URL + `/camper/addOne`, {data: any})
            .then(resp => resolve(resp.data))
            .catch(resp => reject(resp));

        })
    }

    Login(){
        return new Promise((resolve,reject) => {
            return Axios.post(this.URL + `/`)
            .then(resp => resolve(resp.data))
            .catch(resp => reject(resp));

        })
    }


 

}