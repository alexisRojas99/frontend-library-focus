import { useMutation } from "react-query";
import React, { FC, useEffect, useContext } from "react";
import { Box, Grid, GridItem, Heading, Img, VStack, Text, Flex, Tag, Button, IconButton } from "@chakra-ui/react";
import { createHistoryBook, getHistoryBooks } from "../../../services/books";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

interface Props {
	isbn: string;
	title: string;
	author: string;
	genre: string;
	image: string;
	stock: number;
	published_year: number;
}

const BookDetails: FC<Props> = ({ isbn, title, image, published_year, genre, stock }) => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const [message, setMessage] = React.useState<string>("");

	const { user } = useContext(AuthContext) as any;

	const navigate = useNavigate();

	const { mutate } = useMutation(
		(data: object) => {
			return createHistoryBook(data);
		},
		{
			onSuccess: (data) => {
				if (data.status === 201) {
					navigate("/history", { replace: true });
					return;
				}
			},
		},
	);
	const handleReserve = async () => {
		mutate({ isbn, id_user: user.id });
	};

	return (
		<VStack m={4}>
			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
				templateRows={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
				gap={6}
			>
				<GridItem rowSpan={{ base: 1, sm: 6, md: 4 }} colSpan={{ base: 1, sm: 6, md: 4 }}>
					<Flex justifyContent={"center"}>
						<Img src={image} aria-label="Book Image" maxHeight={{ base: "400px" }} loading={"lazy"} />
					</Flex>
				</GridItem>
				<GridItem rowSpan={{ base: 1, sm: 6, md: 6 }} colSpan={{ base: 1, sm: 6, md: 6 }}>
					<Flex flexDirection={{ base: "column", lg: "initial" }} alignItems={"center"}>
						<Heading>{title}</Heading>
					</Flex>
					<Text fontSize={"xl"} mt={"2"} fontWeight={"bold"}>
						Published Year
					</Text>
					<Text fontSize={"xl"} mt={"2"}>
						{published_year}
					</Text>
					<Box mt={4}>
						<>
							<Text fontSize={"xl"} fontWeight={"bold"}>
								Genre
							</Text>
							{genre}
						</>
					</Box>
					<Box mb={5}>
						<Text fontSize={"xl"} fontWeight={"bold"} mt={2}>
							Stock
						</Text>
						<Tag my={1} mr={2} colorScheme={"green"}>
							{stock}
						</Tag>
					</Box>
					<Box>
						<Button id="asd" colorScheme={"green"} onClick={() => handleReserve()}>
							Reserve
						</Button>
					</Box>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default BookDetails;
