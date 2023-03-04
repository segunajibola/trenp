import Image from "next/image"

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`
//   )
//   const res = await data.json()

//   return res.results.map((person) => ({
//     id: toString(person.id),
//   }))
// }

export default async function MovieDetail({ params }) {
  const { id } = params
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  return (
    <div>
      <div className="">
        <h2 className="text-4xl">{res.birthday}</h2>
        <h1 className="text-lg ">{res.deathday}</h1>
        <h1 className="text-lg ">{res.biography}</h1>
      </div>
    </div>
  )
}
