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
    <div className="bg-gray-800 rounded-lg pb-3">
      <Link href={`/person/${id}`}>
        <Image
          src={imagePath + profile_path}
          className="rounded-b-[30px]"
          width={800}
          height={800}
          alt={name}
          priority
        />
        <h2 className="text-xl my-3 text-center">Name: {name}</h2>
        <div className="px-2 text-lg">
          <h2 className="">Known for: {known_for_department}</h2>
          <h1 className="">Popularity: {popularity}</h1>
        </div>
      </Link>
    </div>
  );
}
