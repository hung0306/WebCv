import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailJob } from "../../services/jobService";
import { Tag } from "antd";
import Goback from "../../Components/Goback";

function JobDetailAdmin() {
    const params = useParams();
    const [data, setData] = useState()
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getDetailJob(params.id);
            setData(response)
        }
        fetchApi()
    }, [])
    return (
        <>
            <Goback />
            {data && (
                <>
                    <h1>Tên job: {data.name}</h1>
                    <div className="mb-10">
                        <span className="mr-10">Trạng thái:</span>
                        {data.status ? (<Tag color="green">Đang bật</Tag>) : (<Tag color="red">Đang tắt</Tag>)}
                    </div>

                    <div className="mb-10">
                        <span className="mr-10">Tags:</span>
                        {data.tags.map(item => (
                            <Tag key={item.key} color="blue">{item}</Tag>
                        ))}

                    </div>
                    <div className="mb-10">
                        <span className="mr-10">Mức lương:</span>
                        <strong>{data.salary}$</strong>

                    </div>
                    <div className="mb-10">
                        <span className="mr-10">Ngày tạo:</span>
                        <strong>{data.createAt}</strong>

                    </div>

                    <div className="mb-10">
                        <span className="mr-10">Cập nhật:</span>
                        <strong>{data.updateAt}</strong>

                    </div>

                    <div className="mb-10">
                        <span className="mr-10">Thành phố:</span>
                        {data.city.map(item => (
                            <Tag key={item.key} color="blue">{item}</Tag>
                        ))}

                    </div>

                    <div>
                        <span>Mô tả:</span>
                        <div>{data.description}</div>

                    </div>

                </>
            )}
        </>
    )
}
export default JobDetailAdmin