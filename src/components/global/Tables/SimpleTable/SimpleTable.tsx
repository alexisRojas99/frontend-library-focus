import React, { FC } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button } from "@chakra-ui/react";

interface Props {
	DataArr: Array<{
		id: number;
		id_user: number;
		isbn: string;
		quantity: number;
		movement_type: string;
		movement_date: string;
		User: {
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
}

const SimpleTable: FC<Props> = ({ DataArr }) => {
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
									<Td>{items.movement_date}</Td>
									<Td>
										<Button size={"sm"} colorScheme={"blue"}>
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
		</TableContainer>
	);
};

export default SimpleTable;
