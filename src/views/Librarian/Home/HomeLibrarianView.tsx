import React, { useState } from "react";
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { createNewUser } from "../../../services/users";

const HomeLibrarianView = () => {
	const { register, handleSubmit, reset } = useForm();
	const [isError, setIsError] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [message, setMessage] = useState("");

	const { isLoading, mutate } = useMutation(
		(data: object) => {
			return createNewUser(data);
		},
		{
			onSuccess: (data) => {
				if (data.status !== 201) {
					setIsError(true);
					return;
				}
				setMessage("User Created");
				reset();
			},
		},
	);

	const onSubmit = async (data: any) => {
		data.id_role = Number(data.id_role);

		mutate(data);

		setIsError(false);

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
						<Heading fontSize={"4xl"}>Create New User</Heading>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="firstname"></FormLabel>
							<Input id="firstname" placeholder="firstname" type={"text"} {...register("firstname", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="lastname"></FormLabel>
							<Input id="lastname" placeholder="lastname" type={"text"} {...register("lastname", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<Select id="id_role" defaultValue={"student"} {...register("id_role", { required: true })}>
								<option value="1">Student</option>
								<option value="2">Librarian</option>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={isError}>
							<FormLabel htmlFor="email"></FormLabel>
							<Input id="username" placeholder="example@gmail.com" type={"email"} {...register("username", { required: true })} />
						</FormControl>
					</Box>
					<Box>
						<FormControl isInvalid={false}>
							<FormLabel htmlFor="password"></FormLabel>
							<Input id="password" placeholder="password" type={"password"} {...register("password", { required: true })} />
						</FormControl>
					</Box>
					<Center>{isError && <Text color={"red"}>User already exists</Text>}</Center>
					<Center>{message && <Text color={"green"}>{message}</Text>}</Center>

					<Box>
						<Button colorScheme={"facebook"} minWidth={"full"} type="submit" disabled={disabled}>
							Create User
						</Button>
					</Box>
				</SimpleGrid>
			</form>
		</Box>
	);
};

export default HomeLibrarianView;
