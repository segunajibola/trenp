import Link from "next/link";
import Image from "next/image";

export default function Person({
  popularity,
  profile_path,
  id,
  name,
  known_for_department,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link href={`/person/${id}`} className="bg-gray-600 rounded-lg">
        <Image
          src={imagePath + profile_path}
          className="rounded-lg"
          width={800}
          height={800}
          alt={name}
          priority
        />
        <div className="flex flex-col gap-2">
        <h2 className="text-xl">Name: {name}</h2>
        <h2 className="text-lg">Known for: {known_for_department}</h2>
        <h1 className="text-md">Popularity: {popularity}</h1>
        </div>
      </Link>
    </div>
  );
}
