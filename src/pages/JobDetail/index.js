import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Col, Form, Input, InputNumber, Row, Select, Spin, Tag, message } from 'antd';
import { getDetailJob } from "../../services/jobService";
import { getDetailCompany } from "../../services/companyService";
import { getTimeCurrent } from "../../helpers/getTime";
import { createCv } from "../../services/cvService";
import Goback from "../../Components/Goback";

const { Option } = Select;
// const [messageApi, contextHolder] = message.useMessage();


function JobDetail() {
    const [xoay, setXoay] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const params = useParams()
    const [job, setJob] = useState()
    const [form] = Form.useForm();
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getDetailJob(params.id);
            const infoCompany = await getDetailCompany(response.idCompany)
            const dataFinal = {
                ...response,
                infoCompany: infoCompany,
            };
            setJob(dataFinal)
        }
        fetchAPI()
    }, [])
    console.log(job);
    const onFinish = async (values) => {
        setXoay(true)
        // console.log(values);
        // thêm key vào objec//
        values.idJob = job.id;
        values.idCompany = job.infoCompany.id;
        values.createAt = getTimeCurrent();
        const response = await createCv(values);

        setTimeout(() => {
            if (response) {
                messageApi.open({
                    type: 'success',
                    content: 'Gửi CV thành công',
                    duration: 3
                });
                setXoay(false)




            } else {
                messageApi.open({
                    type: 'error',
                    content: 'Gửi CV thất bại',
                    duration: 3
                });

            }
        }, 1000)
        form.resetFields()
        // alert("ok")
        console.log(values);

    }


    return (


        <>
            <Goback />
            {contextHolder}
            {job && (
                <>
                    <h1>{job.name}</h1>
                    <Button className="mb-20" type="primary" href="#formApply" size="large">Ứng tuyển ngay</Button>
                    <div>
                        <span className="mr-20">Tags:</span>
                        {(job.tags || []).map((item, index) => (
                            <Tag color="blue" key={index}>{item}</Tag>
                        ))}
                    </div>

                    <div className="mt-10">
                        <span className="mr-20 ">Thành phố:</span>
                        {(job.city || []).map((item, index) => (
                            <Tag color="orange" key={index}>{item}</Tag>
                        ))}
                    </div>
                    <div className="mt-10">
                        Lương: <strong>{job.salary}$</strong>

                    </div>

                    <div className="mt-10">
                        Địa chỉ: <strong>{job.infoCompany.address}</strong>

                    </div>

                    <div className="mt-10">
                        Ngày tạo: <strong>{job.createAt}</strong>

                    </div>

                    <div className="mt-10">
                        <div>Mô tả công việc:</div>
                        <strong>{job.description}</strong>
                    </div>

                    <div className="mt-10">
                        <div>Giới thiệu công ty:</div>
                        <strong>{job.infoCompany.description}</strong>
                    </div>
                    <Spin spinning={xoay} tip="vui lòng chờ...">
                        <Card className="mt-20" title="Ứng Tuyển Ngay" id="formApply"  >
                            <Form layout="vertical" name="form_apply" form={form} onFinish={onFinish}>
                                <Row gutter={[20, 50]}>
                                    <Col xxl={6} xl={6}>
                                        <Form.Item label="Họ tên" name="name" rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập tên!',
                                            },
                                        ]}>
                                            <Input />

                                        </Form.Item>
                                    </Col>


                                    <Col xxl={6} xl={6}>
                                        <Form.Item label="Số điện thoại" name="phone">
                                            <InputNumber style={{
                                                width: '100%',
                                            }} />

                                        </Form.Item>



                                    </Col>

                                    <Col>
                                        <Form.Item label="Email" name="email" rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập email!',
                                                type:'email'
                                            },
                                        ]}>
                                            <Input />

                                        </Form.Item>
                                    </Col>



                                    <Col xxl={6} xl={6}>
                                        <Form.Item label="Thành phố" name="city">
                                            <Select>
                                                {job.city.map((item, index) => (
                                                    <Option value={item} label={item} key={index}>

                                                    </Option>
                                                ))}

                                            </Select>

                                        </Form.Item>
                                    </Col>
                                    <Col xxl={12} xl={12}>
                                        <Form.Item label="Giới thiệu bản thân" name="description">
                                            <Input.TextArea rows={6}>

                                            </Input.TextArea>
                                        </Form.Item>
                                    </Col>








                                    <Col xxl={12} xl={12}>
                                        <Form.Item label="Project đã làm" name="linkProject">
                                            <Input.TextArea rows={6}>

                                            </Input.TextArea>
                                        </Form.Item>
                                    </Col>

                                    <Col offset={12}>
                                        <Form.Item >
                                            <Button type="primary" htmlType="submit">Gửi yêu cầu</Button>
                                        </Form.Item>
                                    </Col>


                                </Row>
                            </Form>

                        </Card>

                    </Spin>

                </>
            )}
        </>
    )
}
export default JobDetail