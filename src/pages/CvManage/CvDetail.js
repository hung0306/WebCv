import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { changeSttCv, getDetailCv } from "../../services/cvService";
import { getDetailJob } from "../../services/jobService";
import { Card, Tag } from "antd";
import Goback from "../../Components/Goback";

function CvDetail() {
    const params = useParams();
    const [cv, setCv] = useState([]);
    const [job, setJob] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getDetailCv(params.id)
            if (response) {
                const responseJob = await getDetailJob(response.idJob);
                if (responseJob) {
                    setCv(response);
                    setJob(responseJob)
                }
            }
            changeSttCv(params.id, { statusRead: true })

        }
        fetchApi()
    }, [])
    console.log(job);
    return (
        <>
            <Goback />
            <Card className="mt-20" title={`Ứng Viên:   ${cv.name}`}>



                <div>
                    <span>Ngày gửi: </span>
                    <strong>{cv.createAt}</strong>
                </div>
                <div>
                    <span>Số điện thoại: </span>
                    <strong>{cv.phone}</strong>
                </div>

                <div>
                    <span>Email: </span>
                    <strong>{cv.email}</strong>
                </div>
                <div>
                    <span>Thành phố ứng tuyển: </span>
                    <strong>{cv.city}</strong>

                </div>

                <div>
                    <span>Giới thiệu bản thân: </span>
                    <strong>{cv.description}</strong>

                </div>
                <div>
                    <span>Link project: </span>
                    <strong>{cv.linkProject}</strong>
                </div>

            </Card>



            <Card title={`Thông tin job:   ${job.name}`}>
                <div>

                    <span className="mr-10">Tags:</span>
                    {job.tags && job.tags.map(item => (
                        <Tag color="blue" key={item}>{item}</Tag>
                    ))}



                </div>

                <div>
                    <span className="mr-10">Mức lương:</span>
                    <strong>{job.salary}$</strong>
                </div>

                <div>
                    <div >Mô tả:</div>
                    <div>{job.description}</div>
                </div>

            </Card>


        </>
    )
}
export default CvDetail