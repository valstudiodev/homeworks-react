import React from "react";
import { Header, Footer, Home } from '@/components/Layout'
import { Homework1, Homework2, Homework3 } from "@/homeworks";

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
    return null
  }

  return (
    <div className="app-container flex flex-col 
    gap-10 items-center justify-between min-h-screen
     bg-bg-dark text-primary ">

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


