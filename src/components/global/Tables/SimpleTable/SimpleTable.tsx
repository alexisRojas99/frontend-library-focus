import React, { FC } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button } from "@chakra-ui/react";

interface Props {
	DataArr: Array<{
		id: number;
		title: string;
		stock: number;
		published_year: number;
		username: string;
	}>;
}

const SimpleTable: FC<Props> = ({ DataArr }) => {
	return (
		<TableContainer boxSize={"70%"}>
			<Table variant="striped" colorScheme="facebook">
				<TableCaption>Books History</TableCaption>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>Student</Th>
						<Th>Book</Th>
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
									<Td>{items.username}</Td>
									<Td width="50">{items.title}</Td>
									<Td>
										<Button size={"sm"} colorScheme={"blue"}>Return book</Button>
									</Td>
									{/* <Td width="40">{items.precio}</Td>
									<Td>{items.descripcion}</Td>
									<Td>{items.activo ? "Activo" : "Inactivo"}</Td>
									<Td>{items.created_at}</Td> */}
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
