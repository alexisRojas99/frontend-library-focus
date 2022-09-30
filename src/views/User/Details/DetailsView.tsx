import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import BookDetails from "../../../components/home/BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailBook } from "../../../services/books";

const BookDetailsView: FC = () => {
	const [error, isError] = useState(false);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { data, isLoading } = useQuery(["details", String(id)], ({ queryKey }) => getDetailBook(queryKey[1]));

	const details = data?.data;

	useEffect(() => {
		isError(false);
		console.log(details);
		
		if (details?.message === "Book not found") {
			isError(true);
		}
	}, [details]);

	return (
		<Box>
			<Box m={6}>
				{isLoading ? (
					<p>Loading...</p>
				) : error ? (
					<Flex justifyContent={"center"} alignItems={"center"} height={"30vh"}>
						<Text fontSize={30} fontWeight={"bold"}>Not Found</Text>
					</Flex>
				) : (
					<Box>
						<BookDetails {...details} />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default BookDetailsView;
