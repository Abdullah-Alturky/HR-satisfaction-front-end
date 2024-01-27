import Table from "../layouts/Users/Table/Table";
import BasePage from "./BasePage";

const Users = () => {
  return (
    <BasePage title={"Existing Users"}>
      <Table />
    </BasePage>
  );
};

export default Users;
