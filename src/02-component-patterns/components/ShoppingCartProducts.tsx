import React from 'react';
import ProductCard, { ProductButtons, ProductImage } from '.';
import { onChangeArgs, ProductInCart } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

interface shoppingCartProps {
    shoppingCart:{[key: string]: ProductInCart;}
    onProductCountChange: ({ count, product }: onChangeArgs) => void;
}

export const ShoppingCartProducts = ({ shoppingCart, onProductCountChange }:shoppingCartProps) => {
    return (
        <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map( ([key, product]) => (
                        <ProductCard 
                            key={product.id}
                            product={product} 
                            className="bg-dark text-white"
                            onChange={ onProductCountChange }
                            style={{width: '100px'}}
                            value={product.count}>
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.1)' }}/>
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}/>
                        </ProductCard>
                    ))
                }
            </div>
    );
};
