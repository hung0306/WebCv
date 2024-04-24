import { Button, Card, Col, Form, Input, InputNumber, Row, message } from 'antd';
import { generateToken } from '../../helpers/generateToken';
import * as company from "../../services/companyService";
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (values) => {
    // console.log(values);
    values.token = generateToken();
    const checkExistEmail = await company.checkExist("email", values.email);
    const checkExistPhone = await company.checkExist("phone", values.phone)
    if (checkExistEmail.length > 0) {
      messageApi.open({
        type: 'error',
        content: 'Email đã tồn tại',
      });

    } else if (checkExistPhone.length > 0) {
      messageApi.open({
        type: 'error',
        content: 'Số điện thoại đã tồn tại',
      });
    } else {
      const result = await company.creatCompany(values);
      if (result) {
        alert("Đăng ký thành công!")
        navigate("/login")
      }
    }

  }

  return (
    <>
      {contextHolder}
      <Row justify="center">
        <Col span={12}>
          <Card title="Đăng ký tài khoản">
            <Form onFinish={onFinish} layout='vertical'>
              <Form.Item label="Tên công ty" name="companyName" rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên công ty!',
                },
              ]}>
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập đúng email!',
                  type: 'email',
                },
              ]}>
                <Input />
              </Form.Item>

              <Form.Item label="Số điện thoại" name="phone">
                <InputNumber style={{
                  width: '100%',
                }} />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập password!',
                },
              ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType='submit'>Đăng ký</Button>
              </Form.Item>

            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Register;