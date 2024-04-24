import { useSelector } from "react-redux"
import { getCookie } from "../../helpers/cookies"
import "../layout.scss"

import { Button, Col, Layout, Row } from 'antd';
import { Link, Outlet } from "react-router-dom";
// import logoTimviec from "../../image/logotimviec.png"


const { Header, Footer, Content } = Layout;
function LayoutDefault() {
    const token = getCookie("token")
    const user = getCookie("fullname")
    const islogin = useSelector(state => state.loginReducer)
    console.log(islogin);
    // console.log(token);
    // const islogin = useSelector(state => state.loginReducer)
    // console.log(islogin);
    // cái islogin này mục đích duy nhất là khi login hoặc logout thì set lại giá trị để nó load trang





    return (
        <>
            <Layout >
                <Header className="header">
                    <Row justify="space-between">
                        <Col className="header__logo" span={20}><Link className="logo" to="/">Tìm việc làm online</Link></Col>
                        <Col span={4}>
                            <Row gutter={[20]}>
                                {token ? (<>
                                    <Col >
                                        <Link to="admin" ><Button type="primary">Quản lý </Button></Link>
                                    </Col>
                                    <Col >
                                        <Link to="/logout">
                                            <Button>Đăng xuất</Button>
                                        </Link>
                                    </Col>

                                </>) : (<>
                                    <Col span={10}>
                                        <Link to="/login">
                                            <Button>Đăng nhập</Button></Link>
                                    </Col>
                                    <Col span={10}>
                                        <Link to="/Register">
                                            <Button>Đăng ký</Button>
                                        </Link>
                                    </Col>
                                </>)}

                            </Row>


                        </Col>
                    </Row>

                </Header>

                <Content className="content" ><div className="container"><Outlet /> </div></Content>



            </Layout>
        </>
    )
}
export default LayoutDefault