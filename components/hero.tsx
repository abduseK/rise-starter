import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/heroImage3.jpg";

export default function Hero() {
  return (
    <div className="flex">
      <div className="w-1/2 py-20">
        <h1 className="font-bold text-3xl">
          Bringing Innovation to HealthCare Your Trusted Partner In Medical
          Equipment{" "}
        </h1>
        <p className="pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam
          vero facilis quaerat aliquid dicta rem.
        </p>
        <div className="pt-10 space-x-3">
          <button className="bg-blue-900 text-white rounded-3xl py-3 px-10 font-medium inline-block hover:text-black hover:bg-transparent hover:border-blue-900 hover:border duration-300 border border-transparent">
            Discover
          </button>
          <button className="rounded-3xl py-3 px-10 font-medium inline-block hover:bg-transparent border-blue-900 hover:bg-blue-900 hover:text-white hover:border-white hover:border duration-300 border border-transparent">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          className="rounded-lg"
          src={heroImage}
          height={100}
          width={400}
          alt={""}
        />
      </div>
    </div>
  );
}
