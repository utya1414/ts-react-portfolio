import EmailContent from "../components/Email/EmailContent"
import Sidebar from "../components/Sidebar/Sidebar"
const Email: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <EmailContent />
    </div>
  )
}

export default Email