import Icon from "../../images/icon.png";

const SidebarIcon = () => {
  return (
    <div className="pt-5 pb-4 text-center w-60" >
        <img src={Icon} alt="" className="w-1/2 block m-auto" />
        <p className="text-white text-xl font-medium">Takuya Yamada</p>
    </div>
  );
}

export default SidebarIcon;