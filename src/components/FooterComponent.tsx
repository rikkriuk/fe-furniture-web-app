import {ShareSocial} from "react-share-social" 

export default function Footer() {

  const style = {
    root: {
      background: "transparent",
  
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      display: "none",
    },
  };
  return (
    <footer className="bg-[#23262F] px-5 lg:px-32 pt-20 pb-5 flex flex-col gap-10">
      <div className="border-b-2 flex justify-between items-center">
        <h6 className="text-white text-2xl font-bold">FurniShop</h6>

         <ShareSocial
            url="https://fe-furniture-web-app.vercel.app/"
            socialTypes={["facebook", "telegram", "whatsapp", "linkedin"]}
            style={style}
          />
      </div>

      <div className="flex justify-center items-center">
        <p className="text-sm text-white">© FurniShop 2022 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
