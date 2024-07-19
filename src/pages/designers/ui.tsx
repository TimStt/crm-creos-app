import { useScrollIntoView } from "@/shared/hooks/use-scroll-into-view";
import { TableDesigners } from "@/widgets/table-designers";

const Designers = () => {
  useScrollIntoView();
  return (
    <>
      {" "}
      <TableDesigners />
    </>
  );
};

export default Designers;
