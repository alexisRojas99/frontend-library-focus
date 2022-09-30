import { Box, Spinner } from '@chakra-ui/react'

const SpinnerAnimation = () => {
	return (
		<Box display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight="100vh">
			<Spinner
				thickness="5px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				css={'height: 65px; width: 65px;'}
				// size={'xl'}
			/>
		</Box>
	)
}

export default SpinnerAnimation
