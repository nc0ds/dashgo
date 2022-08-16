import React from 'react';

import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
	name: string;
	email: string;
	wide?: boolean;
}

export const Profile: React.FC<ProfileProps> = ({
	name,
	email,
	wide = true,
}) => {
	return (
		<Flex align='center'>
			<Box mr='4' textAlign='right' lineHeight='shorter'>
				{wide && <Text>{name}</Text>}
				{wide && (
					<Text color='gray.300' fontSize='sm'>
						{email}
					</Text>
				)}
			</Box>
			<Avatar size='md' name='Nathan Caio' src='https://github.com/nc0ds.png' />
		</Flex>
	);
};
