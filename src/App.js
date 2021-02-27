import './App.css';
import Store from "./store/Store";
import ShopComponent from "./components/ShopComponent";

function App() {
  const store = new Store();
  const addNewItemToShop = () => {
      const itemName = prompt('Set item name');
      const itemDescription = prompt('Set item description');
      // eslint-disable-next-line no-restricted-globals
      const confirmDetails = confirm(`Name: "${itemName}". Description: "${itemDescription}".\nCreate new item?`);

      if (confirmDetails) {
          store.addNewItem({name: itemName, description: itemDescription});
      }
  }

  return (
    <div className="App">
      <ShopComponent store={store} />
      <button onClick={addNewItemToShop}>Add new item to shop</button>
    </div>
  );
}

export default App;
