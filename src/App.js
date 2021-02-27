import './App.css';
import ItemsStore from "./store/ItemsStore";
import ShopComponent from "./components/ShopComponent";
import ShopsStore from "./store/ShopsStore";
import ShopListComponent from "./components/ShopsListComponent";

function App() {
  const itemsStore = new ItemsStore();
  const shopsStore = new ShopsStore();

  const addNewItemToShop = () => {
      const itemName = prompt('Set item name');
      const itemDescription = prompt('Set item description');
      // eslint-disable-next-line no-restricted-globals
      const confirmDetails = confirm(`Name: "${itemName}". Description: "${itemDescription}".\nCreate new item?`);

      if (confirmDetails) {
          itemsStore.addNewItem({name: itemName, description: itemDescription});
      }
  }

  return (
    <div className="App">
      <ShopComponent store={itemsStore} />
      <button onClick={addNewItemToShop}>Add new item to shop</button>

      <hr/>

      <ShopListComponent store={shopsStore}/>
    </div>
  );
}

export default App;
