import React, { FC, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import BookDetails from "../../../components/home/BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';

const BookDetailsView: FC = () => {
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const { data } = useQuery('details', )

	const details = {
		isbn: "1",
		title: "Harry Potter and the Philosopher's Stone",
		author: "J. K. Rowling",
		genre: "Fantasy",
		image: "https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp",
		published_year: 1954,
		stock: 10,
	};

	return (
		<Box>
			<Box m={6}>
				{
					<Box>
						<Box>
							<BookDetails {...details} />
						</Box>
						<Box>{/* <ActingDetails casting={casting.cast} /> */}</Box>
						<Box>{/* <RelatedMovies movies={relatedMovies.results} /> */}</Box>
					</Box>
				}
			</Box>
		</Box>
	);
};

export default BookDetailsView;
