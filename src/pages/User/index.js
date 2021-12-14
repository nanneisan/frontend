import React, { useState, useEffect } from "react";
import Label from "../../components/Label";
import Table from "../../components/Table";

//constant
import { user } from "../../constants/charts";

//services
import { getAll } from "../../services/chartService";

const tbl_header = ["ID", "Name", "Age", "Gender"];

function User() {
  const [lists, setLists] = useState(user);

  useEffect(() => {
    async function fetch() {
      const response = await getAll();
      if (response?.data) {
        setLists(response.data.data);
      }
    }
    fetch();
  }, []);
  return (
    <div>
      <Label variant="h5">User List</Label>
      <Table label="user" header={tbl_header} data={lists} />
    </div>
  );
}

export default User;
