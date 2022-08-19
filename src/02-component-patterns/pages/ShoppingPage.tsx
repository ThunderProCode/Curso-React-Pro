import React from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import { ProductsDashboard } from '../components/ProductsDashboard';
import { ShoppingCartProducts } from '../components/ShoppingCartProducts';

const ShoppingPage = () => {

    const { shoppingCart,onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />            
            <ProductsDashboard 
                products={products} 
                onProductCountChange={onProductCountChange} 
                shoppingCart={shoppingCart} />
            <ShoppingCartProducts
                shoppingCart={shoppingCart} 
                onProductCountChange={onProductCountChange} />
        </div>
    );
};

export default ShoppingPage;