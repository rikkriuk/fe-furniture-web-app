import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ServicesContainer from "../containers/ServicesContainer";

const HomePage: React.FC = (): JSX.Element => {
   return (
      <main>
         <HeaderContainer />
         <ServicesContainer />
      </main>
   )
}

export default HomePage;