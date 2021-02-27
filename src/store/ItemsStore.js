import {autorun, makeObservable, runInAction, observable, action, computed} from "mobx";

class ItemsStore {
    index = 1;
    items = [];

    constructor() {
        makeObservable(this, {
            items: observable,
            addNewItem: action,
            removeItem: action,
            totalItems: computed
        });
        autorun(this.logStoreDetails);
        runInAction(this.prefetchData);
    }

    logStoreDetails = () => {
        console.log('Items updated.');
    };

    addNewItem = (item) => {
        item.id = this.index;
        this.items.push(item);
        this.index++;
        return item;
    }

    removeItem = (id) => {
        const itemIndex = this.items.findIndex(item => item.id === id);

        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
        }
    }

    get totalItems() {
        return this.items.length;
    }

    prefetchData = () => {
        const dummyData = [
            {name: 'Plate', description: 'Some plate...'},
            {name: 'Cup', description: 'Some cup...'}
        ];

        this.addNewItem(dummyData[0]);

        setTimeout(() => this.addNewItem(dummyData[1]), 5000);
    }
}

export default ItemsStore;
