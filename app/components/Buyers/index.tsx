import Image from "next/image";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/assets/buyers/ourbuyers.svg",
    percent: "80k",
    heading: "Industrial Cooling Fans",
    subheading:
      "Owing to our vast experience in this domain, we are engaged in offering a wide range of Industrial Cooling Fans.",
  },
  {
    imgSrc: "/assets/buyers/projectcompleted.svg",
    percent: "90k",
    heading: "Cooling Tower Fan Blades",
    subheading:
      "We are a well  known manufacturer, supplier and exporter of a wide range of Cooling Fan Blades. ",
  },
  {
    imgSrc: "/assets/buyers/happybuyers.svg",
    percent: "80%",
    heading: "Fan Hub Assembley",
    subheading:
      "We offer effective range of Hub Assemblies along with central Seal Disc made of FRP.",
  },
  {
    imgSrc: "/assets/buyers/teammembers.svg",
    percent: "50+",
    heading: "Cooling Tower Gear Boxes",
    subheading:
      "We provide a broad range of Cooling Tower Gear Boxes. Manufactured under the guidance and supervision.",
  },
];

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 bg-bluebg">
      <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
        Our Products
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5">
        {cardData.map((items, i) => (
          <div
            className="bg-white flex flex-col items-center justify-center p-6 rounded-3xl shadow-sm shadow-xl"
            key={i}
          >
            <div className="flex justify-center border border-border  p-2 w-full rounded-lg">
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={100}
                height={100}
              />
            </div>
            {/* <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2> */}
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
