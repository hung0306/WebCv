import * as company from "../../services/companyService";
import { useNavigate } from "react-router-dom";
import "./login.scss"
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Form, Input, Row, Spin } from "antd";
import { setCookie } from "../../helpers/cookies";
import { checkLogin } from "../../actions/login";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [xoay, setXoay] = useState(false);
  const dispatch = useDispatch();
  const islogin = useSelector(state => state.loginReducer)

  const onFinish = async (values) => {
    setXoay(true)
    const data = await company.login(values.email, values.password)
    console.log(data);
    if (data.length > 0) {
      setXoay(false)
      const time = 1;
      setCookie("id", data[0].id, time);
      setCookie("companyName", data[0].companyName, time);
      setCookie("email", data[0].email, time);
      setCookie("token", data[0].token, time)
      dispatch(checkLogin(!islogin));
      navigate("/admin")
    } else {
      setXoay(false)
      alert("Sai tài khoản hoặc mật khẩu")
    }
  }


  return (
    <>
      <Row justify="center">
        <Col span={12}>
        <Spin spinning={xoay} tip="vui lòng chờ...">
        <Card title="Đăng nhập">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item label="Email" name="email">
                <Input />

              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password />

              </Form.Item>

              <Form.Item  >
                <Button htmlType="submit" type="primary">Đăng nhập</Button>

              </Form.Item>
            </Form>
          </Card>
        </Spin>
        
        </Col>
      </Row>
    </>
  )
}
export default Login;