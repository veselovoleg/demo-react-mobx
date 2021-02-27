import {makeObservable, runInAction, observable, computed, action} from "mobx";

class ShopsStore {
    shops = [];

    constructor() {
        makeObservable(this, {
            shops: observable,
            totalShops: computed,
            getShopsData: action
        });
        runInAction(this.getShopsData)
            .then(() => console.log('data fetched'));
    }

    get totalShops() {
        return this.shops.length;
    }

    getShopsData = async () => {
        fetch('http://localhost:9000/shops')
            .then(data => data.json())
            .then(result => result.data.forEach(item => {
                // Add runInAction if add something async
                runInAction(() => {
                    this.shops.push(item);
                })
            }))
            .catch(error => console.error(error));
    }
}

export default ShopsStore;
