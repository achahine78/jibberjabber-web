import { Col, Row } from "antd";
import Header from "../header/Header";
import SideMenu from "../sidemenu/SideMenu";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const AppShell = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Row>
        <Col>
          <SideMenu />
        </Col>
        <Col>{children}</Col>
      </Row>
    </div>
  );
};

export default AppShell;
