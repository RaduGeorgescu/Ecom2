import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  // console.log({ cat, filters, sort }); //we import them from ProductList.jsx
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/products'); //we get all the products
        // const res = await axios.get('http://localhost:5000/api/products?category=coat'); //we do a query to get only the coats see backend/routes/product.js for details
        const res = await axios.get(cat !== 'all' ? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products');
        // console.log(res);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]); //when category changes 

  useEffect(() => {
    cat && setFilteredProducts( // IF there is a category then for each item we are gonna look to see if the keys (Size, Color, Category) and values (M, S, Yellow, Red, Man, Coat) are matching with our products keys and values
      products.filter( //we are filtering products
        item => Object.entries(filters).every(//for every item look into the every key and value of filters
          ([key, value]) => item[key].includes(value) //and we return the items that contain the same key and same value IF there are any
        )
      )
    );
  }, [products, cat, filters])


  useEffect(() => {
    //SEE IF YOU CAN MAKE SO THAT IT TURNS BACK TO NEWEST, MAYBE YOU NEED TO CHANGE THE FIRST OPTION FROM THAT TO START AND MAKE IT UNSELECTABLE
    //it takes all the products that were already in filteredProducts and it's sorting them by timeStamp(AKA createdAt). a
    //sort((a,b)=> a.createdAt -b.createdAt) literally is just pure math and then it sorts in a way that the ones with the highest number will be the first followed by the second highest and so on    } else if(sort='asc'){
    if ((sort === 'newest')) {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => {
            // console.log(a, b)
            // console.log(new Date(a.createdAt) - new Date(b.createdAt));
            return (new Date(a.updatedAt) - new Date(b.updatedAt))
          }))
    } else if ((sort === 'asc')) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {  //sort === 'desc'
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  let product;
  if (cat === 'all') {
    product =
      products.map((item) => {
        return (
          <Product item={item} key={item.id} />
        )
      }
      )
  }
  else if (!cat) {
    product =
      products.slice(0, 8).map((item) => {
        return (
          <Product item={item} key={item.id} />
        )
      }
      )
  }
  else if (cat) {
    product =
      filteredProducts.map((item) => {
        return (
          <Product item={item} key={item.id} />
        )
      })
  }
  return (
    <Container>
      {product}
    </Container>
  );
};

export default Products;