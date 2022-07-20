import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer hover:text-white"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
