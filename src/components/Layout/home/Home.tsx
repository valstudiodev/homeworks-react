import { Dispatch, SetStateAction, ReactNode } from "react";

interface HomeProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
  renderContent: ReactNode; // ReactNode охоплює компоненти, рядки, числа або null
}

export default function Home({ activePage, setActivePage, renderContent }: HomeProps) {
  return (
    <main className="app-main grow max-w-full container  mx-auto px-4 flex flex-col items-center">

      {/* ЯКЩО стан рівний 'menu' — ПОКАЗУЄМО ГОЛОВНЕ МЕНЮ */}
      {activePage === 'menu' && (
        <div className="main-menu flex flex-col items-center gap-5">
          <h2 className="main-menu__title text-3xl font-bold text-center">Catalog of my homework with React</h2>
          <p className="main-menu__text text-1xl text-grey text-center">
            Select a task from the list below to check its performance:
          </p>

          <ul className="main-menu__list flex flex-col gap-3 text-xl">
            <li className="main-menu__item cursor-pointer hover:text-white transition" onClick={() => setActivePage('hw1')}>
              📂 <span className="main-menu__span hover:text-grey transition duration-300">Homework 1</span>
            </li>
            <li className="main-menu__item cursor-pointer hover:text-white transition" onClick={() => setActivePage('hw2')}>
              📂 <span className="main-menu__span hover:text-grey transition duration-300">Homework 2</span>
            </li>
            <li className="main-menu__item cursor-pointer hover:text-white transition" onClick={() => setActivePage('hw3')}>
              📂 <span className="main-menu__span hover:text-grey transition duration-300">Homework 3</span>
            </li>
          </ul>
        </div>
      )}

      {renderContent}

    </main>
  )
}