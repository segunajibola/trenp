import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  
  const res = await data.json();

  return res.results.map((person) => ({
    id: toString(person.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await data.json();

  return (
    <div>
      <div className="">
        <div className="flex justify-between my-5">
          <h2 className="text-4xl">{res.birthday}</h2>
          <h1 className="text-lg ">{res.deathday}</h1>
        </div>
        <Image
          src={imagePath + res.profile_path}
          className="rounded-md"
          width={400}
          height={400}
          alt={res.name}
          priority
        />
        <h1 className="text-lg my-2">{res.biography}</h1>
      </div>
    </div>
  );
}
