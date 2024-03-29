import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-lg">Born: {res.birthday}</h2>
          <h1 className="text-lg ">{res.deathday ? `Died: ${res.deathday}` : ""}</h1>
        </div>
        <div className="md:flex justify-between gap-3">
          <Image
            src={imagePath + res.profile_path}
            className="rounded-md"
            width={400}
            height={400}
            alt={res.name}
            priority
          />
          <div className="my-5 md:my-0">
            <h1 className="text-2xl">Biography</h1>
            <h1 className="text-lg my-2">{res.biography}</h1>
          </div>
        </div>
        <Link href="/" className="flex justify-center mt-10 underline">Go back</Link>
      </div>
    </div>
  );
}
