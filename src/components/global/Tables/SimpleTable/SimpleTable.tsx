import React, { FC, useEffect } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button, Center, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { returnBook } from "../../../../services/books";

interface Props {
	DataArr: Array<{
		id: number;
		id_user: number;
		isbn: string;
		quantity: number;
		movement_type: string;
		movement_date: string;
		User: {
			id: number;
			firstname: string;
			lastname: string;
			username: string;
		};
		Book: {
			isbn: string;
			title: string;
			author: string;
			published_year: number;
			genre: string;
			stock: number;
			image: string;
		};
	}>;
	refresh: () => void;
}

const SimpleTable: FC<Props> = ({ DataArr, refresh }) => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const { mutate } = useMutation(
		(data: object) => {
			return returnBook(data);
		},
		{
			onSuccess: (data) => {
				if (data.status !== 200) {
					setErrorMessage(data?.data[0]?.message || data?.data?.message);
				} else {
					setErrorMessage("");
				}
			},
		},
	);
	const handleReturnBook = async (data: object) => {
		mutate(data);
	};

	// useEffect(() => {
	// 	refresh();
	// }, []);

	return (
		<TableContainer boxSize={"80%"}>
			<Table variant="striped" colorScheme="facebook">
				<TableCaption>Books History</TableCaption>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>Student</Th>
						<Th>Email</Th>
						<Th>Book</Th>
						<Th>Quantity</Th>
						<Th>Movement</Th>
						<Th>Movement Date</Th>
						<Th>Options</Th>
					</Tr>
				</Thead>
				<Tbody>
					{DataArr?.length > 0
						? DataArr.map((items, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<Tr
									key={index.toString()}
									// cursor="pointer"
									_hover={{ bg: "#ecf0f3" }}
									// onClick={() => {
									// 	getData(index);
									// }}
								>
									<Td>{items.id}</Td>
									<Td>{`${items.User.firstname} ${items.User.lastname}`}</Td>
									<Td>{items.User.username}</Td>
									<Td width="50">{items.Book.title}</Td>
									<Td width="50">{items.quantity}</Td>
									<Td width="50">{items.movement_type}</Td>
									<Td>{dayjs(items.movement_date).format("YYYY-MM-DD: HH:mm:ss")}</Td>
									<Td>
										<Button size={"sm"} colorScheme={"blue"} onClick={() => handleReturnBook({ id: items.id })}>
											Return book
										</Button>
									</Td>
								</Tr>
						  ))
						: null}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Id</Th>
						<Th>Student</Th>
					</Tr>
				</Tfoot>
			</Table>
			<Center>{errorMessage && <Text color={"red"}>{errorMessage}</Text>}</Center>
		</TableContainer>
	);
};

export default SimpleTable;
