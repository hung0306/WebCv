import { useEffect, useState } from "react"
import { getListTag } from "../../services/tagService"
import { Link } from "react-router-dom";
import { Tag } from "antd";

function SkillList() {

    const [tags, setTags] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await getListTag();
            if (response) {
                setTags(response)
            }
        }
        fetchAPI()
    }, []);
    console.log(tags);
    return (
        <>
            <div >
                {tags.map(item => (
                    <Link to={`Search?keyword=${item.value || ""}`} key={item.key}>
                        <Tag color="blue">
                            {item.value}
                        </Tag>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default SkillList