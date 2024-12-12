import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ServicesContainer from "../containers/ServicesContainer";
import StoreContainer from "../containers/StoreContainer";
import FurnitureContainer from "../containers/FurnitureContainer";
import ProductContainer from "../containers/ProductContainer";
import TestimonialContainer from "../containers/TestimonialContainer";
import BannerContainer from "../containers/BannerContainer";

const HomePage: React.FC = (): JSX.Element => {
   return (
      <main>
         <HeaderContainer />
         <ServicesContainer />
         <StoreContainer />
         <FurnitureContainer />
         <ProductContainer />
         <TestimonialContainer />
         <BannerContainer />
      </main>
   )
}

export default HomePage;