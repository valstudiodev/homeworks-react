import imageCard from "@/assets/img/hot-deal-img-apples.webp";
import '../../index.css'
import style from "./test.module.css";
import { useState } from "react";

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

// ========================================================


// ====== task 3
// const skills: string[] = ['HTML', 'SCSS', 'JavaScript']

// interface SkillsProps {
//   skills: string[];
// }
// function GetSkillsList({ skills }: SkillsProps) {
//   return (
//     <ul>
//       {
//         skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))
//       }
//     </ul>
//   )
// }

// ========== Task 4
// interface UserProps {
//   name: string;
//   job: string;
// }
// function GetUserInfo({ name, job }: UserProps) {
//   return (
//     <h1>My name is {name}. I am a {job}</h1>
//   )
// }

// ======= Task 5
// interface IsAdminProps {
//   isAdmin: boolean
// }
// const isAdmin = true
// function IsAdmin({ isAdmin }: IsAdminProps) {
//   return (
//     <div>
//       {
//         isAdmin ? (<p>Welcome Admin</p>)
//           :
//           (<p>Not admin</p>)
//       }
//     </div>
//   )
// }


// ================================================================
// ============================ Hooks =============================
// ================================================================
// ============= Use State ===========
// ===== Задача 1 — Counter =====
export function Counter() {
  const [count, setCount] = useState<number>(0)

  const incrementCounter = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <button type="button"
        className="bg-zinc-700 p-2 rounded-2xl mr-2
        cursor-pointer"
        onClick={incrementCounter}>Click</button>
      <span>{count}</span>
    </div>
  )
}

export function CounterProf() {
  const [count, setCount] = useState<number>(0)

  const incrementCounter = () => {
    setCount(prev => prev + 1)
  }

  const decrementCounter = () => {
    setCount(prev => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div className="flex items-center gap-4 bg-zinc-800 p-2 justify-center">
      <CreateButton label='-' onClick={decrementCounter} />
      <RenderInput value={count} />
      <CreateButton label='+' onClick={incrementCounter} />
    </div>
  )
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function CreateButton({ label, onClick }: ButtonProps): React.JSX.Element {
  return (
    <button
      className="bg-blue-900 rounded-full 
      p-3 w-10 aspect-square text-amber-50
      cursor-pointer hover:bg-blue-500 transition
      duration-300"
      onClick={onClick}>{label}</button>
  )
}
type InputType = {
  value: number;
}
function RenderInput({ value }: InputType): React.JSX.Element {
  return (
    <input className="w-6 text-center" type="text" value={value} />
  )
}


// =================
export function SimpleInput(): React.JSX.Element {
  const [value, setValue] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p>{value}</p>
    </div>
  )
}