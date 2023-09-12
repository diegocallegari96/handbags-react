import React from "react";
import './App.css'
import Button from "./components/button.jsx";
import Product from "./components/ProductCard.jsx";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Button disable={false} labelText="to the collection" />
              <Button disable={false} labelText="shop all bags" />
              <Button disable={true} labelText="pre-orders" />
          </nav>
          <main>
              <Product
                  productAlert="Best seller"
                  productImage={"src/assets/bag_1.png"}
                  nameBag="The handy bag"
                  priceBag="400"
              />
              <Product
                  productAlert="Best seller"
                  productImage={"src/assets/bag_2.png"}
                  nameBag="The stylish bag"
                  priceBag="250"
              />
              <Product
                  productAlert="New collection"
                  productImage={"src/assets/bag_3.png"}
                  nameBag="The simple bag"
                  priceBag="300"
              />
              <Product
                  productAlert="New collection"
                  productImage={"src/assets/bag_4.png"}
                  nameBag="The trendy bag"
                  priceBag="150"
              />

          </main>
      </>
  );
}

export default App
