import Sidebar from "../components/Sidebar"
const Home: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <button className="bg-red-500 text-white font-bold py-2 px-4 ">
        Hello Tailwind
      </button>
    </div>
  )
}

export default Home