import React, { Fragment, Key, useState, ChangeEvent, useEffect } from "react";
import { Box, Button, Flex, Heading, Input, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import BookCard from "../../../components/home/BookCard/BookCard";
import { useQuery } from "react-query";
import { getAllBooks } from "../../../services/books";
import SpinnerAnimation from "../../../components/animations/SpinnerAnimation";

const HomeUser = () => {
	const [search, setSearch] = useState<string>("");
	const [filter, setFilter] = useState<string>("title");

	const [valueSearch, setValueSearch] = useState<string>("");
	const [valueFilter, setValueFilter] = useState<string>("title");

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		return setSearch(event.currentTarget.value);
	};

	const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
		return setFilter(event.currentTarget.value);
	};

	const { data, isLoading, refetch } = useQuery(["books", String(valueSearch), String(valueFilter)], ({ queryKey }) =>
		getAllBooks(queryKey[1], queryKey[2]),
	);

	const executeSearch = () => {
		setValueSearch(search);
		setValueFilter(filter);

		refetch();
	};

	const arrayBooks = data?.data;

	useEffect(() => {
		refetch();
	})

	return (
		<VStack mx={4} mb={8} mt={10}>
			<Flex gap={4} mb={10}>
				<Input type={"text"} htmlSize={10} placeholder={"Search a Book"} onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)} />
				<Select defaultValue={"title"} width={"200px"} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilter(e)}>
					<option value="title">title</option>
					<option value="author">author</option>
					<option value="genre">genre</option>
				</Select>
				<Button minWidth={"100px"} colorScheme={"blue"} onClick={() => executeSearch()}>
					Search Book
				</Button>
			</Flex>
			<>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} justifyContent={"center"}>
					{isLoading ? (
						<SpinnerAnimation />
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
