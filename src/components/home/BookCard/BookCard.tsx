import React, { FC, useEffect } from "react";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { capitalizeWords } from "../../../utils/CapitalizeWords";

type Props = {
	isbn: string;
	title: string;
	author: string;
	genre: string;
	image: string;
	stock: number;
};

const BookCard: FC<Props> = ({ isbn, title, author, genre, image }) => {
	const navigate = useNavigate();

	const handleBookClick = () => {
		navigate(`/book/${isbn}`);
	};

	return (
		<Box borderWidth={"2px"} p={""} maxWidth={{ lg: "30vh" }}>
			<Box>
				<Image src={image} aria-label="Book Image" height={{ lg: "430px" }} width={"100%"} loading={"lazy"} objectFit={"cover"} />
			</Box>
			<Divider />
			<Flex gap={3} flexDirection="column" p={3} flexWrap="wrap">
				<Box textAlign="center">
					<Text fontWeight={"bold"} fontSize={"2xl"} maxHeight="10rem">
						{capitalizeWords(title)}
					</Text>
					<Text fontStyle={"revert"} fontWeight={"light"}>
						{capitalizeWords(author)}
					</Text>
					<Text fontStyle={"revert"} fontWeight={"normal"} fontSize={"14px"}>
						{capitalizeWords(genre)}
					</Text>
				</Box>
				<Divider />
				<Box minWidth={"full"}>
					<Button
						minWidth={"full"}
						colorScheme={"blue"}
						onClick={() => {
							handleBookClick();
						}}
					>
						Get it
					</Button>
				</Box>
			</Flex>
		</Box>
	);
};

export default BookCard;
