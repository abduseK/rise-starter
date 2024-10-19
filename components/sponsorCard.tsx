import Image from "next/image";
import brandImage1 from "../assets/brand3.png";

export default function SponsorCard() {
  return (
    <div className="bg-[rgb(237,237,237)] w-full pt-10 px-5 text-red-600 text-2xl pb-20 justify-start items-start">
      <h1>OUR BRANDS</h1>
      <div className="mt-10 px-10 flex space-x-10 item-center justify-between">
        <Image src={brandImage1} height={75} width={100} alt={""} />
        <Image src={brandImage1} height={75} width={100} alt={""} />
        <Image src={brandImage1} height={75} width={100} alt={""} />
        <Image src={brandImage1} height={75} width={100} alt={""} />
        <Image src={brandImage1} height={75} width={100} alt={""} />
      </div>
    </div>
  );
}
