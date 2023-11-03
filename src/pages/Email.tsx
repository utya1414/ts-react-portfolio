import EmailContent from "../components/EmailContent"
import Sidebar from "../components/Sidebar"
const Email: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <EmailContent />
    </div>
  )
}

export default Email