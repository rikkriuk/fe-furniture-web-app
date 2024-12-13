import { ShareSocial } from "react-share-social";

export default function Footer() {
  const style = {
    root: {
      background: "transparent",
      padding: "0",
      display: "flex",
      justifyContent: "space between",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      display: "none",
      padding: "0",
    },
  };

  const footerSections = [
    {
      title: "Our Products",
      items: ["The Support Suite", "The Sales Suite", "Support", "Guide"],
    },
    {
      title: "Top Features",
      items: [
        "Ticketing System",
        "Knowledge Base",
        "Community Forums",
        "Help Desk Software",
      ],
    },
    {
      title: "Resources",
      items: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"],
    },
    {
      title: "Company",
      items: ["About Us", "Press", "Investors", "Events"],
    },
    {
      title: "Favourite Things",
      items: [
        "For Enterprise",
        "For Startups",
        "For Benchmark",
        "For Small Business",
      ],
    },
  ];

  return (
    <footer className="bg-[#23262F] px-5 lg:px-32 pt-20 pb-5 flex flex-col gap-10">
      <div className="lg:border-b-2 flex flex-col lg:flex-row justify-between items-start lg:items-center pb-5">
        <h6 className="text-white text-2xl font-bold">FurniShop</h6>
        <ShareSocial
          url="https://fe-furniture-web-app.vercel.app/"
          socialTypes={["facebook", "telegram", "whatsapp", "linkedin"]}
          style={style}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h6 className="text-lg text-white">{section.title}</h6>
            <ul className="flex flex-col gap-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="text-sm text-white">© FurniShop 2022 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
