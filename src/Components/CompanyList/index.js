import { useEffect, useState } from "react"
import { getCompany } from "../../services/companyService"
import { Button, Card, Col, Row } from "antd"
import { Link } from "react-router-dom";
import "./companyList.scss"

function CompanyList() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getCompany();
            setData(response)

        }
        fetchAPI()
    }, [])
    // console.log(data);
    return (
        <>
            <h2 className="listcompany">Danh sách một số công ty</h2>
            <Row className="mb-30 mt-30" gutter={[20, 20]}>
                {data.map(item => (
                    <Col span={6} key={item.id}>
                        <Link to={`/company/${item.id}`}>
                            <Card>
                                <div className="listcompany__company">Công ty: <strong>{item.companyName}</strong></div>
                                <div>Số nhân sự: <strong>{item.quantityPeople}</strong></div>
                                <div>Địa chỉ: <strong>{item.address}</strong> </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            <Link to="/company">
                <Button type="primary">Xem thêm</Button>
            </Link>
        </>
    )
}
export default CompanyList