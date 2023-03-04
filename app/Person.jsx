import Link from "next/link"
import Image from "next/image"

export default function Person({ popularity, profile_path, id, name, known_for_department}) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Known for: {known_for_department}</h2>
      <h1>Popularity: {popularity}</h1>
      <Link href={`/person/${id}`}>
        <Image
          src={imagePath + profile_path}
          width={800}
          height={800}
          alt={name}
          priority
        />
      </Link>
    </div>
  )
}
