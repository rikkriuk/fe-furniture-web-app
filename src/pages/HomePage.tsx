import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ServicesContainer from "../containers/ServicesContainer";
import StoreContainer from "../containers/StoreContainer";
import FurnitureContainer from "../containers/FurnitureContainer";
import ProductContainer from "../containers/ProductContainer";

const HomePage: React.FC = (): JSX.Element => {
   return (
      <main>
         <HeaderContainer />
         <ServicesContainer />
         <StoreContainer />
         <FurnitureContainer />
         <ProductContainer />
      </main>
   )
}

export default HomePage;