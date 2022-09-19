import "./Datatable.scss";

import React from "react";
import { userColumns, userRows } from "../../../src/datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Datatable = () => {
	const handleDelete = (id) => {
		// setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellAction">
						<div className="viewButton">View</div>
						<div className="deleteButton">Delete</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
