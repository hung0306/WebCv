import { Col, Row } from "antd"
import JobStatistic from "./JobStatistic"
import CvStatistic from "./CvStatistic"
import InfoCompany from "./InfoCompany"



function Dashboard() {
    return (
        <>
            <h1>Tổng quan</h1>
            <Row gutter={[20, 20]}>
                <Col span={8}>
                    <JobStatistic />
                </Col>
                <Col span={8}>
                    <CvStatistic />
                </Col>

                <Col span={8}>
                    <InfoCompany />
                </Col>
            </Row>

        </>
    )
}
export default Dashboard