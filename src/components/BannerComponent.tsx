import React, { useEffect, useState } from "react";
import BannerImage from "../assets/banner-image.png";
import { useSelector } from "react-redux";
import { BannerState } from "../types/Banner";
import { useAppDispatch } from "../redux/store";
import { postEmail, resetSuccess } from "../redux/slice/BannerSlice";
import DOMPurify from "dompurify";

const BannerComponent: React.FC = (): JSX.Element => {
  const data = useSelector((state: { banner: BannerState }) => state.banner);
  const [email, setEmail] = useState<string>("");
  const { succces, loading, error } = data;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (succces) {
      setEmail("");
      const timer = setTimeout(() => {
        dispatch(resetSuccess());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [succces, dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const sanitizedEmail = DOMPurify.sanitize(email);

    if (!isValidEmail(sanitizedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    dispatch(postEmail(sanitizedEmail));
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (error) {
    alert(error);
  }

  return (
    <div className="relative mt-14">
      <img
        src={BannerImage}
        alt="banner-image"
        className="w-full lg:h-full h-[350px] object-cover"
      />

      <div className="absolute text-center lg:text-start lg:left-2/4 top-1/4 w-full lg:w-1/2 p-5 text-white">
        <h6 className="text-2xl leading-snug lg:text-[40px] font-semibold">
          Get more discount <br />
          Off your order
        </h6>
        <p className="text-sm lg:text-xl my-4">Join our mailing list</p>

        <form onSubmit={handleSubmit} className="flex mt-6 flex-row gap-4 w-full">
          <input
            type="email"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="text-black rounded-md px-4 py-2 w-3/5"
          />
          <button
            disabled={loading}
            type="submit"
            className="whitespace-nowrap bg-[#23262F] text-xs lg:text-xl text-white p-4 px-8 lg:px-5 rounded-md"
          >
            Shop Now
          </button>
        </form>
        {succces && (
          <p className="text-white text-center mt-4">
            Email added successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default BannerComponent;
