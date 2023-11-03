import Sidebar from "../components/Sidebar/Sidebar"
import MainContent from "../components/Home/MainContent"
const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Home