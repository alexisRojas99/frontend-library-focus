import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import SpinnerAnimation from "../../../components/animations/SpinnerAnimation";
import SimpleTable from "../../../components/global/Tables/SimpleTable/SimpleTable";
import { getAllBooks, getHistoryBooks } from "../../../services/books";

const HistoryView = () => {
	const { data, isLoading, refetch } = useQuery("histoyBooks", getHistoryBooks);

	const DataArr = data?.data;

	useEffect(() => {
		refetch();
	}, []);

	return (
		<Box display={"flex"} justifyContent={"center"}>
			{isLoading ? <SpinnerAnimation /> : <SimpleTable DataArr={DataArr} />}
		</Box>
	);
};

export default HistoryView;
