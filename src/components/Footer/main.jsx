export const footerData = [
  {
    title: "Company",
    children: [
      {
        name: "Home",
        url: "",
      },
      {
        name: "About Platform",
        url: "",
      },
      {
        name: "Technology",
        url: "",
      },
      {
        name: "Solution",
        url: "",
      },
    ],
  },
  {
    title: "Features",
    children: [
      {
        name: "Sensor Open Lid",
        url: "",
      },
      {
        name: "IPX5 Water Proof",
        url: "",
      },
      {
        name: "Modern Slim Design",
        url: "",
      },
      {
        name: "High Quality ABS",
        url: "",
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        name: "Career",
        url: "",
      },
      {
        name: "Customer Stories",
        url: "",
      },
      {
        name: "Blog",
        url: "",
      },
      {
        name: "Contact Us",
        url: "",
      },
    ],
  },
];

export default function FooterComponents() {
  return (
    <section className="w-full bg-[#101010] py-10 lg:py-14 px-10 lg:px-[100px] text-[#C2C2C2]">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-[#606060] pb-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 max-w-[467px]">
              <div className="font-bold text-[40px] text-white">Jinligogo</div>
              <p className="font-switzer lg:w-3/5">
                Making health datamore accessible for better care at lower
                costs.
              </p>
            </div>
            <div className="rounded-full bg-white/5 border border-[#EDEDED]/30 p-2 flex justify-between items-center w-full max-w-[493px] h-fit">
              <input
                type="text"
                className="font-general-sans bg-transparent h-fit focus:outline-none pl-6"
                placeholder="youremail@gmail.com"
              />
              <button className="flex gap-1 sm:gap-[10px] py-2 sm:py-4 px-4 sm:px-8 bg-[#4A5465] rounded-full">
                <p className="max-sm:hidden">Submit</p>
                <img
                  src={"/icons/arrow.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="flex gap-[clamp(1rem,-7.615rem+13.462vw,4.5rem)]">
            {footerData.map((data) => (
              <div key={data.title} className="flex flex-col gap-6">
                <h3 className="font-semibold text-lg text-white">
                  {data.title}
                </h3>
                <div className="text-[17px] flex flex-col gap-4">
                  {data.children.map((child) => (
                    <a key={child.name} href={child.url}>
                      {child.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="uppercase font-satoshi font-bold text-[clamp(3rem,-0.961rem+16.901vw,14.25rem)] leading-none text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/0 via-white/50 to-white/0">
            JINLIGOGO
          </span>
        </div>
        <div className="flex justify-between items-center mt-5 text">
          <p>2024 &#169; Jinligogo Copyrights</p>
          <div className="flex gap-6">
            <img
              src={"/icons/facebook.svg"}
              alt=""
              width={24}
              height={24}
            />
            <img
              src={"/icons/instagram.svg"}
              alt=""
              width={24}
              height={24}
            />
            <img
              src={"/icons/youtube.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
