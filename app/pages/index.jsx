import React, { useState } from 'react'

export const getServerSideProps = async (fetch) => {
  const data = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => json);


  return {
    props: {
      title: 'All Products',
      products: data
    }
  }
}

export const HomePage = ({ title, products }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello</h2>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            border: '1px solid black'
          }}>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <p>{product.description}</p>

          <button onClick={() => console.log(product.title)}>Console</button>
        </div>
      ))}

    </div>
  )
}