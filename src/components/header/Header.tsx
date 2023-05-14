import { FireOutlined } from "@ant-design/icons";
import './Header.css';
import { Typography } from "antd";

const Header = () => {
  return (
    <div className="jj-header">
        <FireOutlined />
        <Typography.Text className="jj-header-text">JibberJabber</Typography.Text>
    </div>
  );
};

export default Header;