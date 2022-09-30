import { Box, Flex, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { BsPersonCircle } from "react-icons/bs";

const ProfileView = () => {
	const { user } = useContext(AuthContext) as any;

	return (
		<>
			<Flex justifyContent={"center"} mt={"10"}>
				<Icon as={BsPersonCircle} w={20} h={20} />
			</Flex>
			<Flex justifyContent={"center"}>
				<GridItem rowSpan={{ base: 1, sm: 6, md: 6 }} colSpan={{ base: 1, sm: 6, md: 6 }} mt={5}>
					<Flex justifyContent={"flex-start"} gap={5} mt={4}>
						<Text fontWeight={"bold"}>User:</Text>
						<Text fontWeight={"medium"}>{user.username}</Text>
					</Flex>
					<Flex justifyContent={"flex-start"} gap={5} mt={3}>
						<Text fontWeight={"bold"}>Role:</Text>
						<Text fontWeight={"medium"}>{user.roles[0]}</Text>
					</Flex>
				</GridItem>
			</Flex>
		</>
	);
};

export default ProfileView;
