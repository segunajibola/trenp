"use client";

import { useState, useEffect } from "react";
import Person from "../components/Person";

export default function Home() {
  //  const data = await fetch(
  //    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.API_KEY}`
  //   );
  //  const res = await data.json();
  // put async in function name remove "use client"
  // console.log("api", process.env.API_KEY)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((img) => {
        setData(img.results);
      })
      .catch((err) => console.log("You have an error:", err));
  }, []);

  return (
    <main>
      <h2 className="text-3xl my-8 text-white text-center leading-[30.24px]">
        Trending Today In The Movie Industry!
      </h2>
      <p className="text-center text-sm mb-2">Click to see details.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 fluid gap-4 md:gap-8">
        {data.map((person) =>
          person.profile_path ? (
            <Person
              name={person.name}
              id={person.id}
              key={person.id}
              known_for_department={person.known_for_department}
              popularity={person.popularity}
              profile_path={person.profile_path}
            />
          ) : (
            ""
          )
        )}
      </div>
    </main>
  );
}
