import SearcchForm from "../../Components/SearchForm";



import SkillList from "../../Components/SkillList";
import CompanyList from "../../Components/CompanyList";
import Goback from "../../Components/Goback";
function Home() {
  return (
    <>
      <Goback />

      <SearcchForm />
      <SkillList />
      <CompanyList />
    </>
  )
}
export default Home;