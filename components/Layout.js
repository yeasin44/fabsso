import { Store } from '@/utilities/Store';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + ' -Fabsso' : 'Fabsso'}</title>
        <meta name="description" content="Ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="h-12 flex justify-between items-center px-4 shadow-md">
            <Link href="/">
              <h2 className="text-3xl font-bold">Fabsso</h2>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a href="" className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a href="" className="p-2">
                  Login
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center shadow-inner h-10">
          <p>Copyright 2023 Fabsso</p>
        </footer>
      </div>
    </>
  );
}
