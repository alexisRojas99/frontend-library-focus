import React, { Fragment, Key } from "react";
import { Box, Button, Flex, Heading, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import BookCard from "../../../components/home/BookCard/BookCard";
import { useQuery } from "react-query";
import { getAllBooks } from "../../../services/books";

const HomeUser = () => {
	const { data, isLoading } = useQuery("books", getAllBooks);

	const arrayBooks = data?.data;

	return (
		<VStack mx={4} mb={8} mt={10}>
			<Flex gap={4} mb={10}>
				<Input type={"text"} placeholder={"Search a Book"} />
				<Button minWidth={"100px"} colorScheme={"blue"}>
					Search Book
				</Button>
			</Flex>
			<>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} justifyContent={"center"}>
					{isLoading ? (
						<Heading>Loading...</Heading>
					) : (
						arrayBooks.map((values: any, index: Key | null | undefined) => (
							<Fragment key={index}>
								<BookCard {...values} />
							</Fragment>
						))
					)}
				</SimpleGrid>
			</>
		</VStack>
	);
};

export default HomeUser;
