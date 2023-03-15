import { Store } from '@/utilities/Store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <Image
          src={product.img}
          alt={product.name}
          className="rounded shadow"
          width="1000"
          height="1000"
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`product/${product.slug}`} legacyBehavior>
          <a>
            {' '}
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button "
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
