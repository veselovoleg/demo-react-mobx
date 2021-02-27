import React from "react";
import { observer } from "mobx-react-lite";

function ShopListComponent({ store }) {
    return (
        <ul>
            <h2>Shops:</h2>
            {store.shops.map((shop, index) => {
                return (
                    <li key={index}>
                        Name: {shop.name} <br/>
                        Description: {shop.description} <br/>
                        Type: {shop.type}
                    </li>
                )
            })}
            <h4>Count: {store.totalShops}</h4>
        </ul>
    );
}

export default observer(ShopListComponent);
