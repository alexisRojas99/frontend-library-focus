import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFoundView = () => {
	return (
		<Box minHeight={{ base: "60vh", md: "80vh" }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
			<Box textAlign={"center"}>
				<Box textAlign={"center"}>
					<Heading mt={10}>404</Heading>
					<Heading mt={4}>Page Not Found</Heading>
					<NavLink to={"/"}>
						<Button mt={4} colorScheme={"blue"}>
							Back to Home
						</Button>
					</NavLink>
				</Box>
			</Box>
		</Box>
	);
};

export default NotFoundView;
