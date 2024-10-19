import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="font-bold text-xl">Rise</h1>
      <div className="flex justify-center items-center w-full">
        <ul className="flex space-x-8 text-gray-400">
          <li className="text-black font-bold">Home</li>
          <li>Products</li>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
