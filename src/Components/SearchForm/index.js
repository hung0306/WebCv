import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import { getListCity } from '../../services/cityService';
import { useNavigate } from 'react-router-dom';
import "./searchform.scss";
import { SearchOutlined} from "@ant-design/icons"

function SearchForm() {
    const navigate = useNavigate()
    const [city, setCity] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getListCity();
            // console.log(response);
            if (response) {
                const objAll = {
                    key: 0,
                    value: "All"
                };
                setCity([objAll, ...response])
            }
        }
        fetchAPI()

    }, [])

    // console.log(city);


    const handleFinish = (values) => {
        console.log(values);
        let city = values.city || "";
        city = values.city === "All" ? "" : city;
        navigate(
            `/Search?city=${city}&keyword=${values.keyword || ""}`
        )
    }
    return (
        <>
            <h1 className="title">1000+ Việc làm cho IT</h1>

            {city && (

                <Form

                    onFinish={handleFinish}

                >
                    <Row gutter={50} align="center">
                        <Col xxl={6}>
                            <Form.Item name="city"

                            >
                                <Select options={city} placeholder="Chọn thành phố" />

                            </Form.Item>
                        </Col>



                        <Col xxl={6}>
                            <Form.Item name="keyword"

                            >
                                <Input placeholder='nhập ngôn ngữ cần tìm' />

                            </Form.Item>
                        </Col>
                        <Col xxl={3}>

                            <Form.Item

                            >
                                <Button type="primary" htmlType="submit">
                                  <SearchOutlined/> Tìm kiếm
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            )}


        </>
    )
}
export default SearchForm