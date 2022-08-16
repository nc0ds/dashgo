import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface SidebarDrawerContextType {
	isSidebarDrawerOpen: boolean;
	openSidebarDrawer: () => void;
	closeSidebarDrawer: () => void;
}

const SidebarDrawerContext: React.Context<SidebarDrawerContextType> =
	createContext({} as SidebarDrawerContextType);

interface SidebarDrawerContextProviderProps {
	children: React.ReactNode;
}

export const SidebarDrawerContextProvider: React.FC<
	SidebarDrawerContextProviderProps
> = ({ children }) => {
	const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] =
		useState<boolean>(false);

	const router = useRouter();

	const openSidebarDrawer = () => {
		setIsSidebarDrawerOpen(true);
	};

	const closeSidebarDrawer = () => {
		setIsSidebarDrawerOpen(false);
	};

	useEffect(() => {
		closeSidebarDrawer();
	}, [router.asPath]);

	return (
		<SidebarDrawerContext.Provider
			value={{
				isSidebarDrawerOpen,
				openSidebarDrawer,
				closeSidebarDrawer,
			}}
		>
			{children}
		</SidebarDrawerContext.Provider>
	);
};

export const useSidebarDrawerContext: () => SidebarDrawerContextType = () => {
	const context = useContext(SidebarDrawerContext);

	return context;
};
