import imageCard from "../../assets/img/hot-deal-img-apples.webp";
import '../../index.css'

export function CardProduct() {
  return (
    <div className='card'>
      <h1 className="text-5xl">Card Product</h1>
      <img className="w-[200px]" src={imageCard} alt="" />
      <p>Card Content</p>
    </div>
  )
}

