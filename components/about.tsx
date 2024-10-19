export default function AboutUS() {
  return (
    <div className="mt-5 px-5">
      <h1 className="text-red-600 text-2xl">ABOUT US</h1>
      <div className="flex justify-between items-start">
        <p className="font-bold text-3xl w-1/3 py-3 text-blue-950">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          repellendus, illo saepe incidunt.
        </p>
        <div className="flex flex-col items-end justify-end w-1/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo,
            dolorum, rerum in amet eum debitis placeat quam dicta dolor veniam
            necessitatibus reiciendis, similique fugit repellendus distinctio
            hic. Reprehenderit, qui?
          </p>
          <button className="w-1/3 flex items-center border border-blue-950 mt-3 px-5 py-2 rounded-3xl text-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition duration-300">
            About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l9-9M7 7h9v9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
