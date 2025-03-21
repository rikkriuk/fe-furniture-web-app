import React from "react";
import { Helmet } from "react-helmet-async";
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
         <Helmet>
            <title>Creative Home - FurniShop</title>
            <meta name="description" content="Simplify your furniture with creative designs and quality services." />
            <meta name="keywords" content="Furniture, Home Decor, Creative Furniture, FurniShop" />
            <meta name="author" content="FurniShop Team" />
            <meta property="og:title" content="Creative Home - FurniShop" />
            <meta property="og:description" content="Explore a wide range of furniture options for your home." />
            <meta property="og:url" content="https://furnishop.com" />
            <link rel="canonical" href="https://furnishop.com" />
         </Helmet>
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