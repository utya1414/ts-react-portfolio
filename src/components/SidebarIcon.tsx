import Icon from "../images/icon.png";

const SidebarIcon = () => {
  return (
    <div className="pt-5 pb-4 text-center">
        <img src={Icon} alt="" className="w-2/3 hover:cursor-pointer" />
        <p className="text-white text-xl font-medium">utya1414@gmail.com</p>
    </div>
  );
}

export default SidebarIcon;