export default function HeroComponents() {
  return (
    <section className="w-full text-white bg-primary-blue pt-[83px] px-16 pb-16 overflow-hidden">
      <div className="layout relative">
        <img
          src={"/images/big-bin.svg"}
          alt=""
          width={787}
          height={1217}
          className="absolute -left-24"
        />
        <div className="grid gap-28 justify-end relative z-10">
          <div className="grid gap-14">
            <div className="grid gap-4">
              <h1 className="font-semibold text-5xl max-w-[551px] leading-none">
                Jinligogo 2Pack 3.5 Gallon, 2.2 Gallon Bathroom Small.
              </h1>
              <p className="max-w-[374px]">
                Available at a lower price from other sellers that may not offer
                free Prime shipping.
              </p>
            </div>
            <button className="bg-[#4A5465] px-[30px] py-[18px] rounded-full w-fit">
              Shop Now $89.00
            </button>
          </div>
          <div className="grid gap-10 max-w-[454px]">
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">About this item</h2>
              <p>
                We are confident you&apos;ll think we have the best Bathroom
                Trash Can on the market and that we make every order with a full
                money-back guarantee. Your 100%{" "}
              </p>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-3">
                <img
                  src={"/images/small-bin-1.svg"}
                  alt=""
                  width={70}
                  height={70}
                />
                <img
                  src={"/images/small-bin-2.svg"}
                  alt=""
                  width={70}
                  height={70}
                />
                <img
                  src={"/images/small-bin-3.svg"}
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <img
                    src={"/icons/star.svg"}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <img
                    src={"/icons/star.svg"}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <img
                    src={"/icons/star.svg"}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <img
                    src={"/icons/star.svg"}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <img
                    src={"/icons/star.svg"}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <p className="font-satoshi text-2xl">
                  <span className="font-bold">12.832</span>{" "}
                  <span className="font-gilroy">Review</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
