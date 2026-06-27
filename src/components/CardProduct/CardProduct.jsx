import imageCard from "@/assets/img/hot-deal-img-apples.webp";
import '../../index.css'

export function CardProduct({ data }) {
  const { title, text } = data
  return (
    <div className='card'>
      <h1 className="text-5xl">{title}</h1>
      <img className="w-100" src={imageCard} alt="" />
      <p>{text}</p>
    </div>
  )
}

