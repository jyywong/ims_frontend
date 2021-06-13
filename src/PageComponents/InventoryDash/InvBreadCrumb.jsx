import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
const InvBreadCrumb = ({ inventory }) => {
	const lab = useSelector((state) => state.labs.byID[inventory.labID]);
	return (
		<Breadcrumb color="gray.400">
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} to={`/lab/${lab.id}`}>
					{lab.name}
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink as={Link} to={`/inventory/${inventory.id}`}>
					{inventory.name}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default InvBreadCrumb;
