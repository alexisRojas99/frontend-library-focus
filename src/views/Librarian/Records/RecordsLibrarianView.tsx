import { Box } from '@chakra-ui/react';
import React from 'react'
import { useQuery } from 'react-query';
import SpinnerAnimation from '../../../components/animations/SpinnerAnimation';
import SimpleTable from '../../../components/global/Tables/SimpleTable/SimpleTable';
import { getHistoryBooks } from '../../../services/books';

const RecordsLibrarianView = () => {
  const { data, isLoading } = useQuery("historyBooks", getHistoryBooks);

	const DataArr = data?.data;

	return (
		<Box display={"flex"} justifyContent={"center"}>
			{isLoading ? <SpinnerAnimation /> : <SimpleTable DataArr={DataArr} />}
		</Box>
	);
}

export default RecordsLibrarianView