import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleTable from "../../../components/global/Tables/SimpleTable/SimpleTable";

const HistoryView = () => {
	const DataArr = [
		{
			id: 1,
			title: "El principito",
			stock: 10,
			published_year: 2019,
			username: "Juan Perez",
		},
	];

	return (
		<Box display={"flex"} justifyContent={"center"}>
			<SimpleTable DataArr={DataArr} />
		</Box>
	);
};

export default HistoryView;
