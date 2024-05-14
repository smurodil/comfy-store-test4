import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="pt-10 align-content">
        <Outlet/>
      </main>
    </>
  )
}

export default Home