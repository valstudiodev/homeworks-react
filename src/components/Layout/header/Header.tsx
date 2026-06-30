
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>; // Тип для функції оновлення стану
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  return (
    <header className="app-header pt-5 pb-5 text-center flex flex-col gap-8">
      <h1 className="
       font-extrabold text-primary tracking-tight text-[clamp(2rem,2.5vw,6rem)]">
        My React Learning Dashboard
      </h1>

      {/* Якщо ми НЕ в меню, показуємо кнопку для повернення назад */}
      {activePage !== 'menu' && (
        <button
          className="back-btn bg-primary text-bg-dark px-4 py-2
          rounded font-bold hover:bg-lightgrey transition duration-300
          cursor-pointer self-center"
          onClick={() => setActivePage('menu')}
        >
          ⬅️ Back to list
        </button>
      )}
    </header>
  );
}