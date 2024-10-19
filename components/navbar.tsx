import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="font-bold text-xl">Rise</h1>
      <div className="flex justify-center items-center w-full">
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Order</li>
        </ul>
      </div>
    </div>
  );
}
