import { useEffect, useState } from "react";
import { getListCv } from "../../services/cvService";
import { getCookie } from "../../helpers/cookies";


function CvStatistic() {
    const idCompany = getCookie("id");
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListCv(idCompany);
            console.log(response);
            if (response) {
                let obj = {
                    total: 0,
                    statusTrue: 0,
                    statusFalse: 0,
                };
                obj.total = response.length;
                response.forEach((item) => {
                    item.statusRead ? obj.statusTrue++ : obj.statusFalse++;
                    //    if (item.statusRead == false || undefined) {
                    //     obj.statusFalse++
                    //    } else if(item.statusRead == true) {
                    //     obj.statusTrue++
                    //    }
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
                    <h3>Cv</h3>
                    <p>Số lượng CV :<strong>{data.total}</strong></p>
                    <p>CV chưa đọc :<strong>{data.statusFalse}</strong></p>
                    <p>CV đã đọc :<strong>{data.statusTrue}</strong></p>
                </>
            )}

        </>
    )
}
export default CvStatistic