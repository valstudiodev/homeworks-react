import React from "react";
import Homework1 from "./homeworks/Homework1/Homework1";
import Homework2 from "./homeworks/Homework2/Homework2";
// Не забудь також створити або заглушити інші ДЗ, щоб не було помилок:
// const Homework2 = () => <div><h3>Домашнє завдання №2</h3><p>Тут буде лічильник</p></div>;
const Homework3 = () => <div><h3>Домашнє завдання №3</h3><p>Тут буде робота з API</p></div>;

export default function App() {
  const [activePage, setActivePage] = React.useState(() => {
    return localStorage.getItem('currentHomeworkPage') || 'menu'
  })

  React.useEffect(() => {
    localStorage.setItem('currentHomeworkPage', activePage)
  }, [activePage])

  function renderContent() {
    if (activePage === 'hw1') return <Homework1 />;
    if (activePage === 'hw2') return <Homework2 />;
    if (activePage === 'hw3') return <Homework3 />;
    return null; // Якщо сторінка 'menu', функція нічого додатково не повертає
  }

  return (
    <div className="app-container flex flex-col gap-5 items-center justify-between min-h-screen bg-bg-dark text-primary ">
      {/* Спільна шапка для всього сайту */}
      <header className="app-header mt-5 mb-5">
        <h1 className="text-5xl md-text-5xl font-extrabold text-primary tracking-tight mb-5">My React Learning Dashboard</h1>
        {/* Якщо ми НЕ в меню, показуємо кнопку для повернення назад */}
        {activePage !== 'menu' && (
          <button className="back-btn bg-grey hover:bg-lightgrey 
          rounded-xl transition duration-300 text-bg-dark font-bold 
          px-[20px] py-1 border-2 cursor-pointer" onClick={() => setActivePage('menu')}>
            ⬅️ Назад до списку
          </button>
        )}
      </header>

      {/* Динамічний контент додатка */}
      <main className="app-main grow">

        {/* ЯКЩО стан рівний 'menu' — ПОКАЗУЄМО ГОЛОВНЕ МЕНЮ */}
        {activePage === 'menu' && (
          <div className="main-menu flex flex-col items-center gap-5">
            <h2 className="main-menu__title text-3xl">Catalog of my homework with React</h2>
            <p className="main-menu__text text-1xl text-grey ">Select a task from the list below to check its performance:</p>

            <ul className="main-menu__list flex flex-col gap-3">
              <li className="main-menu__item" onClick={() => setActivePage('hw1')}>
                📂 <span className="main-menu__span cursor-pointer hover:text-grey transition duration-300">Homework 1</span>
              </li>
              <li className="main-menu__item" onClick={() => setActivePage('hw2')}>
                📂 <span className="main-menu__span cursor-pointer hover:text-grey transition duration-300">Homework 2</span>
              </li>
              <li className="main-menu__item" onClick={() => setActivePage('hw3')}>
                📂 <span className="main-menu__span cursor-pointer hover:text-grey transition duration-300">Homework 3</span>
              </li>
            </ul>
          </div>
        )}

        {/* ЯКЩО обрано якесь ДЗ — тут відрендериться результат функції renderContent */}
        {renderContent()}

      </main>

      <footer className="app-footer mt-5 mb-5">
        <p>Created while studying React • 2026</p>
      </footer>
    </div>
  );
}


