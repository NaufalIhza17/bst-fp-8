export const upgradeData = [
  "Bedroom",
  "Living Room",
  "Bathroom",
  "Kitchen",
  "Office",
];

export default function UpgradeSections() {
  return (
    <section className="w-full bg-white bg-review bg-center px-3 sm:px-5 py-10">
      <div className="max-w-[1440px] w-full mx-auto bg-upgrade flex flex-col sm:flex-row items-start md:items-center justify-around rounded-2xl px-5 gap-10 py-20 lg:py-[140px]">
        <h2 className="text-white font-semibold text-4xl sm:text-5xl max-w-[544px]">
          Upgrade your bathroom for a fresh, stylish vibe.
        </h2>
        <div className="grid max-sm:grid-cols-2 gap-4 md:gap-6 max-sm:w-full">
          {upgradeData.map((data) => (
            <div
              key={data}
              className="w-[309px] max-sm:w-full max-md:w-[260px] py-4 bg-white/80 rounded-full text-center hover:scale-110 group hover:bg-[#8A95A6] transition-all"
            >
              <p className="font-medium text-[#8E8E8E] group-hover:text-white">
                {data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
