import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookies"
import { getDetailCompany } from "../../services/companyService";

function InfoCompany() {
    const idCompany = getCookie("id");
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getDetailCompany(idCompany);
            setData(response)
        }
        fetchApi()
    }, [])
    console.log(data);
    return (
        <>
            {data && (
                <>
                    <h3>Thông tin công ty</h3>
                    <p>Tên công ty :<strong>{data.companyName}</strong></p>
                    <p>Số điện thoạithoại :<strong>{data.phone}</strong></p>
                    <p>Email :<strong>{data.email}</strong></p>
                    <p>Số nhân viên :<strong>{data.quantityPeople}</strong></p>
                </>
            )}

        </>
    )
}
export default InfoCompany