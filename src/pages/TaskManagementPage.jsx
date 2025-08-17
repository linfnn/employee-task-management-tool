import { useLayoutEffect, useState } from "react";
import TaskTable from "../components/table/TaskTable";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import "../css/dashboardPage.css";

const TaskManagementPage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setInnerWidth(window.innerWidth)
    );
  }, [innerWidth]);
  return (
    <>
      {innerWidth > 655 ? (
        <AdminSidebar contentProp={<TaskTable />} activeFlag="tasks" />
      ) : (
        <MobileSidebar contentProp={<TaskTable />} activeFlag="tasks" />
      )}
    </>
  );

};

export default TaskManagementPage;
