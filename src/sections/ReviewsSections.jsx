export default function ReviewsSections() {
  return (
    <section className="w-full bg-[#F7F7F7] bg-review bg-center py-14 lg:py-20 px-10 lg:px-20">
      <div className="max-w-[1440px] w-full mx-auto grid gap-9 lg:gap-[72px]">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
          <h1 className="font-semibold text-[#101010] text-2xl min-w-max">
            <span className="text-[#FF8A00]">/ </span>Reviews
          </h1>
          <p className="font-medium text-xl lg:text-[28px] text-[#101010] lg:max-w-[722px]">
            Unveiling Highly-Rated Reviews and Commendations from Discerning
            Audiences Across{" "}
            <span className="text-[#667085]">
              the United States, Reflecting Exceptional Satisfaction and
              Unmatched Quality.
            </span>
          </p>
        </div>
        <div className="text-white flex flex-col md:flex-row gap-6 justify-between">
          <div className="bg-review-one bg-cover relative w-full md:w-[clamp(13.688rem,-1.954rem+32.588vw,27.375rem)] h-[clamp(11.938rem,-1.704rem+28.421vw,23.875rem)] rounded-xl">
            <div className="absolute top-2 left-[clamp(1rem,-2.077rem+4.808vw,2.25rem)]">
              <h3 className="font-bold text-[clamp(2.25rem,-1.179rem+7.143vw,5.25rem)]">
                920<span className="text-[#7C8C6C]">+</span>
              </h3>
              <p className="text-[#878C91] text-[clamp(0.938rem,0.652rem+0.595vw,1.188rem)] font-medium">
                Top reviews from the United States
              </p>
            </div>
            <div className="absolute bottom-8 left-[clamp(1rem,-2.077rem+4.808vw,2.25rem)]">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <img
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <img
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <img
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="bg-review-two bg-cover relative w-full md:w-[clamp(25.563rem,-3.651rem+60.862vw,51.125rem)] h-[clamp(11.938rem,-1.704rem+28.421vw,23.875rem)] rounded-xl">
            <p className="lg:max-w-[315px] absolute bottom-[clamp(0.5rem,-0.028rem+2.254vw,2rem)] left-[clamp(1rem,-1.462rem+3.846vw,2rem)] font-medium text-[clamp(1rem,0.143rem+1.786vw,1.75rem)]">
              Highly-rated reviews from the United States
            </p>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={"/icons/play-circle.svg"}
                alt=""
                width={56}
                height={56}
                className="w-[clamp(2.25rem,1.81rem+1.878vw,3.5rem)]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
