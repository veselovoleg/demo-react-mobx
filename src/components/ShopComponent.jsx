import React from "react";
import { observer } from "mobx-react-lite";

function ShopComponent({ store }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {store.items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick={() => store.removeItem(item.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h4>Items count: {store.totalItems}</h4>
        </div>
    );
}

export default observer(ShopComponent);
