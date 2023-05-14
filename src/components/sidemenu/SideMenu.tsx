import { List } from "antd";
import { Link } from "react-router-dom";

type MenuItemData = {
  title: string;
  route: string;
}[];

const menuItems: MenuItemData = [
  {
    title: "Home",
    route: "/home",
  },
  {
    title: "Profile",
    route: "/profile",
  },
  {
    title: "Notifications",
    route: "/notifications",
  },
];

const SideMenu = () => {
  return (
    <div
      style={{
        width: 300,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={menuItems}
        renderItem={(item) => (
          <List.Item
            style={{
              paddingLeft: "1.25rem",
              border: "0.0625rem solid rgb(233, 236, 239)",
              borderTop: "none",
            }}
          >
            <List.Item.Meta title={<Link to={item.route}>{item.title}</Link>} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SideMenu;
