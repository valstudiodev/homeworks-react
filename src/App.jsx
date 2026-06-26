import React from "react";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import Home from "./components/Layout/home/Home";
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

  function getActiveHomework() {
    if (activePage === 'hw1') return <Homework1 />;
    if (activePage === 'hw2') return <Homework2 />;
    if (activePage === 'hw3') return <Homework3 />;
    return null; // Якщо сторінка 'menu', функція нічого додатково не повертає
  }

  return (
    <div className="app-container flex flex-col gap-10 items-center justify-between min-h-screen bg-bg-dark text-primary ">

      <Header activePage={activePage} setActivePage={setActivePage} />

      <Home
        activePage={activePage}
        setActivePage={setActivePage}
        renderContent={getActiveHomework()}
      />

      <Footer />

    </div>
  );
}


