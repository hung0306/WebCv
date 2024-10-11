import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailCompany } from "../../services/companyService";
import { getListJob } from "../../services/jobService";
import { Col, Row } from "antd";
import Jobitem from "../../Components/Jobitem";
import Goback from "../../Components/Goback";
import "./CompanyDetail.scss"

function CompanyDetail() {
    const params = useParams();
    const [infoCompany, setInfoCompany] = useState([])
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getDetailCompany(params.id);
            setInfoCompany(response)
        }
        fetchAPI()
    }, [])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getListJob(params.id);
            setJobs(response)
        }
        fetchAPI()

    }, [])
    // console.log(jobs);
    console.log(infoCompany);
    return (
        <>
            <div className="company-detail">
                <Goback />
                {infoCompany && (
                    <>
                        <h1>{infoCompany.companyName}</h1>
                        <div className="company-detail__info">
                            <div className="info-item mb-10 fs-20">Địa chỉ: <strong>{infoCompany.address}</strong></div>
                            <div className="info-item mb-10 fs-20">Số lượng nhân sự: <strong>{infoCompany.quantityPeople}</strong></div>
                            <div className="info-item mb-10 fs-20">Thời gian làm việc: <strong>{infoCompany.workingTime}</strong></div>
                            <div className="info-item mb-10 fs-20">Link website: <strong>{infoCompany.website}</strong></div>
                            <div className="info-item mb-10 fs-20">Mô tả ngắn: <strong>{infoCompany.description}</strong></div>
                            <div className="info-item mb-10 fs-20">Mô tả chi tiết: <strong>{infoCompany.detail}</strong></div>
                        </div>

                        <div className="company-detail__jobs">
                            <strong className="job-title">Danh sách các job:</strong>
                            <div className="job-list mt-20">
                                <Row gutter={[20, 20]}>
                                    {jobs.map(item => (
                                        <Col span={8} key={item.id} className="job-item">
                                            <Jobitem item={item} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default CompanyDetail