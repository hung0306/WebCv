import { Card, Tag } from "antd"
import { Link } from "react-router-dom"


function Jobitem(props) {
    const { item } = props;
    console.log(item);
    return (

        <>
            {item.status && (
                <Link to={`/job/${item.id}`}>
                    <Card title={item.name}>
                        <div className="mb-10" >
                            <span className="mr-10">Ngôn ngữ:</span>
                            {item.tags.map((item, index) => (
                                <Tag color="blue" key={index}>{item}</Tag>
                            ))}
                        </div>

                        <div div className="mb-10">
                            <span className="mr-10">Thành phố:</span>
                            {item.city.map((item, index) => (
                                <Tag color="red" key={index}>{item}</Tag>
                            ))}
                        </div>

                        <div div className="mb-10">
                            <span className="mr-10">Lương:</span>

                            <Tag color="blue">{item.salary}$</Tag>

                        </div>
                        <div div className="mb-10">
                            <span className="mr-10">Công ty:</span>

                            <strong >{item?.infoCompany?.companyName}</strong>

                        </div>



                        <div >
                            <span className="mr-10">Ngày tạo:</span>

                            <strong >{item.createAt}</strong>

                        </div>

                    </Card></Link>
            )}


        </>
    )
}
export default Jobitem