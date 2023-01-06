const fakeDB = id => {
    let itemCart;
    const getItem = localStorage.getItem('items');
        if(getItem){
            itemCart = JSON.parse(getItem);
        }else{
            itemCart = {};
        }
    const quantity = itemCart[id];
        if(!quantity){
            itemCart[id] = 1;
        }
    localStorage.setItem('items', JSON.stringify(itemCart))
}

export {fakeDB}