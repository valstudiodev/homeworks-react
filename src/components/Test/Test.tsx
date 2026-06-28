import imageCard from "@/assets/img/hot-deal-img-apples.webp";
import '../../index.css'
import style from "./test.module.css";

type CardData = {
  title: string,
  text: string,
}
interface CardProductProps {
  data: CardData;
}

export function CardProduct({ data }: CardProductProps) {
  const { title, text } = data
  return (
    <div className='card'>
      <h1 className="text-5xl">{title}</h1>
      <img className="w-100" src={imageCard} alt="" />
      <p>{text}</p>
    </div>
  )
}

type CardProductLaptop = {
  title: string,
  price: number,
  brand: string,
}
export function CardProductLaptop({ title, price, brand }: CardProductLaptop) {
  // const { title, price, brand } = MACBOOK_PRODUCT
  return (
    <div className={style.div}>
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{brand}</p>
    </div>
  )
}




// =============================
// ======== Задача 1
type TypeGreeting = {
  name: string
}
export function Greeting({ name }: TypeGreeting) {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  )
}

// ========= Задача 2
type TypePerson = {
  name: string,
  age: number,
}
export const person = {
  name: 'Val',
  age: 35
}
export function Person({ data }: { data: TypePerson }) {
  const { name, age } = data
  return (
    <div>
      <h2>Name: {name}</h2>
      <span>Age: {age}</span>
    </div>
  )
}

// ======== Задача 3
type UserStatusProps = {
  isOnline: boolean;
};
export function UserStatus({ isOnline }: UserStatusProps) {
  return (

    <div>
      {isOnline ? (
        <p className="bg-amber-400">Online 🟢</p>
      ) : (
        <p className="bg-amber-900">Offline 🔴</p>
      )}
    </div>
  )
}


//  =========== Задача 5.
type HobbiesProps = {
  hobbies: string[]
}
export const hobbiesList: string[] = ['Gym', 'Basketball', 'Programming']

export function RenderList({ hobbies }: HobbiesProps) {
  return (
    <ul>
      {
        hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))
      }
    </ul >
  )
}