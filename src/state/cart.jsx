'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import content from '@/content';

const compactItems = items => {
    return items.map(item => ({
        id: item.id,
        quantity: item.quantity,
    }));
};

const expandItems = items => {
    return items.map(item => {
        const productDetails = content.products.items.find(product => product.id === item.id);
        return {
            ...productDetails,
            quantity: item.quantity,
        };
    });
};

const Context = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = React.useState([]);
    const [isInitialised, setIsInitialised] = React.useState(false);

    const loadFromLocalStorage = React.useCallback(() => {
        let cartItemsFromLocalStorage = JSON.parse(window.localStorage.getItem('cartItems') || '[]');
        if (!Array.isArray(cartItemsFromLocalStorage)) {
            cartItemsFromLocalStorage = [];
        }
        cartItemsFromLocalStorage = cartItemsFromLocalStorage.filter(item => item.id && item.quantity);
        const newCartItems = expandItems(cartItemsFromLocalStorage);
        setCartItems(newCartItems);
        setIsInitialised(true);
    }, []);

    React.useEffect(loadFromLocalStorage, [loadFromLocalStorage]);

    return (
        <Context.Provider value={[cartItems, setCartItems, isInitialised]}>
            <React.Suspense fallback={null}>
                {children}
            </React.Suspense>
        </Context.Provider>
    );
};

export const useCart = () => {
    const searchParamsBase = useSearchParams();
    const context = React.useContext(Context);
    const [cartItems, setCartItems, isInitialised] = context;

    const updateItems = newCartItems => {
        setCartItems(newCartItems);
        const compactedNewCarItems = compactItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(compactedNewCarItems));
    };

    const toSearchParams = () => {
        const searchParams = new URLSearchParams();
        cartItems.forEach(item => {
            searchParams.append(item.id, item.quantity);
        });
        return searchParams.toString();
    };

    const fromSearchParams = (searchParams = searchParamsBase) => {
        return content.products.items
            .filter(productItem => searchParams.get(productItem.id))
            .map(productItem => ({
                ...productItem,
                quantity: parseInt(searchParams.get(productItem.id), 10),
            }));
    };

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return {
        items: cartItems,
        updateItems,
        toSearchParams,
        fromSearchParams,
        isInitialised,
    };
};
