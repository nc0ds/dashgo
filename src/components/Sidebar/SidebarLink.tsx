import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
	Text,
	Icon,
} from '@chakra-ui/react';

interface SidebarLinkProps extends ChakraLinkProps {
	children: string;
	href: string;
	icon: React.ElementType;
	shouldMatchExactHref?: boolean;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
	children,
	href,
	icon,
	shouldMatchExactHref = false,
	...props
}) => {
	const router = useRouter();

	const isActive = shouldMatchExactHref
		? router.asPath === href
		: router.asPath.startsWith(href);

	return (
		<Link href={href} passHref>
			<ChakraLink display='flex' alignItems='center' {...props}>
				<Icon
					as={icon}
					fontSize='20'
					color={isActive ? 'pink.500' : 'gray.50'}
				/>
				<Text
					ml='2'
					fontWeight='medium'
					color={isActive ? 'pink.500' : 'gray.50'}
				>
					{children}
				</Text>
			</ChakraLink>
		</Link>
	);
};
