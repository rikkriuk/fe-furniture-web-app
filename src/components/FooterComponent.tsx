import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#23262F] px-5 lg:px-32 pt-20 pb-5 flex flex-col gap-10">
      <div className="border-b-2 py-10 flex justify-between items-center">
        <h6 className="text-white text-2xl font-bold">FurniShop</h6>

         <div className="flex justify-center gap-4">
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white w-8 h-8 bg-[#3b5998] p-2 rounded-full" />
         </a>
         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white w-8 h-8 bg-[#1da1f2] p-2 rounded-full" />
         </a>
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white w-8 h-8 bg-[#e4405f] p-2 rounded-full" />
         </a>
         <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white w-8 h-8 bg-[#333333] p-2 rounded-full" />
         </a>
         </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-sm text-white">© FurniShop 2022 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
