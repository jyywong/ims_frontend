import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
const ItemBreadCrumb = ({ item }) => {
	const inventory = useSelector((state) => state.inventories.byID[item.invID]);
	const lab = useSelector((state) => state.labs.byID[item.labID]);
	return (
		<Breadcrumb color="gray.400">
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} to={`/lab/${lab.id}`}>
					{lab.name}
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink as={Link} to={`/inventory/${inventory.id}`}>
					{inventory.name}
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink as={Link} to={`/${inventory.id}/item/${item.id}`}>
					{item.name}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default ItemBreadCrumb;
