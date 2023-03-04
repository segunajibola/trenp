import Person from "./Person";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log("res", res);
  return (
    <main>
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
