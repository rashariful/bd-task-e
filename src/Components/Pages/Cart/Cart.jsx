import React, { useState } from 'react';

function ShoppingCart() {
const [items, setItems] = useState([]);
const [totalCost, setTotalCost] = useState(0);

function addItem(item) {
setItems([...items, item]);
setTotalCost(totalCost + item.price);
}

function removeItem(item) {
setItems(items.filter(i => i.id !== item.id));
setTotalCost(totalCost - item.price);
}
return (
<div>
{items.map(item => (
<div key={item.id}>
{item.name} - ${item.price}
<button onClick={() => removeItem(item)}>Remove</button>
</div>
))}
<div>Total: ${totalCost}</div>
</div>
);
}
export default ShoppingCart;