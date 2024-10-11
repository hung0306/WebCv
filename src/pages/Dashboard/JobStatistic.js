import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookies"
import { getListJob } from "../../services/jobService";
function JobStatistic() {
    const idCompany = getCookie("id");
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListJob(idCompany);
            if (response) {
                let obj = {
                    total: 0,
                    statusTrue: 0,
                    statusFalse: 0,
                };
                obj.total = response.length;
                response.forEach((item) => {
                    item.status ? obj.statusTrue++ : obj.statusFalse++;
                })
                setData(obj)
            }
        }
        fetchApi()
    }, [])
    console.log(data);
    return (
        <>
            {data && (
                <>
                    <h3>Danh sách job đang tuyển</h3>
                    <p>Số lượng job :<strong>{data.total}</strong></p>
                    <p>Job đang bật :<strong>{data.statusTrue}</strong></p>
                    <p>Job đang tắt :<strong>{data.statusFalse}</strong></p>
                </>
            )}

        </>
    )
}
export default JobStatistic