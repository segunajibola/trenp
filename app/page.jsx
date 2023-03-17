import Person from "./Person";
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from "../utils/motion"

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log("res", res);
  return (
    <main>
      <h2 className="text-2xl mb-5 text-white text-center">Trending Today</h2>
      <div className="grid grid-cols-3 fluid gap-16">
        {res.results.map((person) => (
          <Person
            name={person.name}
            id={person.id}
            key={person.id}
            known_for_department={person.known_for_department}
            popularity={person.popularity}
            profile_path={person.profile_path}
          />
        ))}
      </div>
    </main>
  );
}
