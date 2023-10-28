import Sidebar from "../components/Sidebar"
import MainContent from "../components/MainContent"
const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Home