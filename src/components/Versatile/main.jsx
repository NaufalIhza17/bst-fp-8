export default function VersatileComponents() {
  return (
    <section className="w-full bg-white bg-review bg-center py-14 lg:py-20 px-10 lg:px-20">
      <div className="max-w-[1440px] w-full mx-auto grid gap-9 lg:gap-[72px]">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
          <h1 className="font-semibold text-[#101010] text-2xl min-w-max">
            <span className="text-[#FF8A00]">/ </span>Versatile Opening Options
          </h1>
          <p className="font-medium text-xl lg:text-[28px] text-[#101010] lg:max-w-[685px]">
            Indulge in the convenience of a myriad of versatile opening options,{" "}
            <span className="text-[#667085]">
              providing you with a customizable and adaptable experience
              tailored to your specific preferences and requirements.
            </span>
          </p>
        </div>
        <div
          className="text-[#101010] flex max-sm:flex-wrap gap-8 justify-between text-base lg:text-lg uppercase"
        >
          <div className="flex flex-col gap-4 max-w-[348px]">
            <img src={"/images/step-1.jpg"} alt="" width={348} height={461} />
            <p>01 ⎯⎯ Gesture-Activated Sensor</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[309.41px]">
            <img src={"/images/step-2.jpg"} alt="" width={309.41} height={408} />
            <p>02 ⎯⎯ Foot-Activated Sensor</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[244.62px]">
            <img src={"/images/step-3.jpg"} alt="" width={244.62} height={310} />
            <p>03 ⎯⎯ Single Button Operation</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[364.97px]">
            <img src={"/images/step-4.jpg"} alt="" width={364.97} height={483} />
            <p>04 ⎯⎯ Knee-Triggered Sensor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
