import React from "react";
import FurnitureImage from "../assets/furniture-image.png";

const FurnitureComponent: React.FC = (): JSX.Element => {
   return (
      <div className="px-5 lg:px-32 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-8 lg:mt-40 justify-evenly items-center lg:items-start">
         <div className="flex flex-col gap-4 lg:gap-9">
            <h4 className="text-2xl lg:text-[40px] font-semibold text-[#23262F] max-w-xl leading-normal">The Best Furniture Manufacturer of your choice</h4>

            <p className="text-sm lg:text-xl text-[#23262F] max-w-xl">Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services \</p>
         </div>

         <div>
            <img src={FurnitureImage} alt="furniture-image" className="w-[650px]" />
         </div>
      </div>
   )
}

export default FurnitureComponent;