import React, { useState } from "react";
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createNewBook } from "../../../services/books";

const BooksLibrarianView = () => {
	const { register, handleSubmit, reset } = useForm();
	const [disabled, setDisabled] = useState(false);
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const { isLoading, mutate } = useMutation(
		(data: object) => {
			return createNewBook(data);
		},
		{
			onSuccess: (data) => {
				if (data.status !== 201) {
                    console.log(data);
                    
					setErrorMessage(data.data[0].message || data.data.message);
					return;
				}
				setMessage("Book Added");
				reset();
			},
		},
	);

	const onSubmit = async (data: any) => {
		data.published_year = Number(data.published_year);
		data.stock = Number(data.stock);

		mutate(data);

		setErrorMessage("");

		if (isLoading) {
			setDisabled(true);
		}
		setDisabled(false);
	};
	return (
		<Box minHeight={{ base: "60vh", md: "80vh" }} display={"flex"} justifyContent={"center"} mt="20">
			<form onSubmit={handleSubmit(onSubmit)}>
				<SimpleGrid columns={1} spacing={4} minWidth={{ base: "300px", sm: "300px", md: "310px" }}>
					<Box>
						<Heading fontSize={"4xl"}>Add New Book</Heading>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="isbn"></FormLabel>
							<Input id="isbn" placeholder="isbn" type={"text"} {...register("isbn", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<Select id="genre" defaultValue={"Fantasy"} {...register("genre", { required: true })}>
								<option value="Fantasy">Fantasy</option>
								<option value="Mystery">Mystery</option>
								<option value="Adventure">Adventure</option>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="title"></FormLabel>
							<Input id="title" placeholder="title" type={"text"} {...register("title", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="image"></FormLabel>
							<Input id="image" placeholder="https://example/image.jpg" type={"text"} {...register("image", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="author"></FormLabel>
							<Input id="author" placeholder="author" type={"text"} {...register("author", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="published_year"></FormLabel>
							<Input id="published_year" placeholder="published year" type={"number"} {...register("published_year", { required: true })} />
						</FormControl>
					</Box>

					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="stock"></FormLabel>
							<Input id="stock" placeholder="stock" type={"number"} {...register("stock", { required: true })} />
						</FormControl>
					</Box>

					<Center>{errorMessage && <Text color={"red"}>{errorMessage}</Text>}</Center>
					<Center>{message && <Text color={"green"}>{message}</Text>}</Center>

					<Box>
						<Button colorScheme={"facebook"} minWidth={"full"} type="submit" disabled={disabled}>
							Add Book
						</Button>
					</Box>
				</SimpleGrid>
			</form>
		</Box>
	);
};

export default BooksLibrarianView;
