import { Commits } from "@/widgets/commits";
import { TopDesigner } from "@/widgets/top-designer";

const Home = () => {
  return (
    <>
      <h1 className="visually-hidden">CRM Creos</h1>
      <Commits /> <TopDesigner />
    </>
  );
};

export default Home;
