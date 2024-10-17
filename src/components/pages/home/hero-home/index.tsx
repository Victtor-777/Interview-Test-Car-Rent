import Image from "next/image";

export function HeroHome() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-normal justify-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Looking for Modern Cars to Rent ?
          </h1>
          <p className="text-muted-foreground max-w-[500px]">
            Discover a seamless car rental experience that suits your lifestyle.
            Choose from a wide range of well-maintained vehicles, perfect for
            any journey whether it is a quick city trip, a weekend getaway, or a
            long road adventure.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/i4.png"}
            width={1200}
            height={1000}
            alt="BMW car"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
