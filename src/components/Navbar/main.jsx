export default function NavbarComponents() {
  return (
    <section className="w-full text-white bg-primary-blue px-20 py-5">
      <div className="layout grid grid-cols-2 items-center">
        <div className="font-satoshi font-bold text-[40px]">Jinligogo</div>
        <div className="font-satoshi flex gap-10 min-w-max justify-end">
          <p className="font-semibold">Home</p>
          <p>Reviews</p>
          <p>Features</p>
        </div>
      </div>
    </section>
  );
}
