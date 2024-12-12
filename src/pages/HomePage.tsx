import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ServicesContainer from "../containers/ServicesContainer";
import StoreContainer from "../containers/StoreContainer";

const HomePage: React.FC = (): JSX.Element => {
   return (
      <main>
         <HeaderContainer />
         <ServicesContainer />
         <StoreContainer />
      </main>
   )
}

export default HomePage;