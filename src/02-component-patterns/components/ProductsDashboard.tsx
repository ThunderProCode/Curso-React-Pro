import React from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '.';
import { onChangeArgs, Product, ProductInCart } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

interface ProductsDashboardProps {
    products:Product[];
    onProductCountChange: ({ count, product }: onChangeArgs) => void;
    shoppingCart: {[key: string]: ProductInCart;}
}

export const ProductsDashboard = ({ products, onProductCountChange, shoppingCart }:ProductsDashboardProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }} >
            {
                products.map( product =>(
                    <ProductCard
                        key={product.id}
                        product={ product }
                        className='bg-dark text-white'
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id] ? shoppingCart[product.id].count : 0 }>
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-bold'/>
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))
            }

        </div>
    );
};
