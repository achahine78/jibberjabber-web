import { Input, Button, Form, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { addBearerToken, privateAxios } from "../../api";

type SignupFormValues = {
  username: string;
  password: string;
  email: string;
};

const SignupPage = () => {
  const navigate = useNavigate();
  const onFinish = (values: SignupFormValues) => {
    const { username, password, email } = values;

    privateAxios
      .post("/signup", {
        username,
        password,
        email,
      })
      .then(({ data }) => {
        if (data?.token) {
          localStorage.setItem("token", data?.token);
          addBearerToken(data?.token);
          navigate("/home");
        }
      })
      .catch(({ response }) => {
        const { data } = response;
        if (data.message) {
          message.error(data.message);
        } else {
          message.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <Card title="Signup" style={{ width: 300 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignupPage;
