import { useState } from 'react';

function Sidebar() {
	const [quickActions, showQuickActions] = useState(false);
	const [quickActionsIcon, setQuickActionsIcon] = useState('pi pi-angle-down');
	function setQuickActions() {
		setIcon();
		showQuickActions(!quickActions);
	}
	function setIcon() {
		if (quickActions === true) {
			setQuickActionsIcon('pi pi-angle-down');
		} else {
			setQuickActionsIcon('pi pi-angle-up');
		}
	}

	return (
		<div className="flex-column w-2 align-content-center justify-content-center">
			<div
				className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2"
				onClick={setQuickActions}>
				<i className="pi pi-bolt mr-1" />
				<h3 className="mr-1">Quick Actions</h3>
				<i className={quickActionsIcon}></i>
			</div>
			{quickActions && (
				<div className="flex flex-column align-content-center bg-primary text-color-white p-1 transition-duration-1000 transition-ease-in">
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2 ">
						<a href="/scanStockIn">Scan Received Stock</a>
					</div>
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2">
						<a href="/scanStockOut">Scan Sold Stock</a>
					</div>
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2">
						<a href="/addProduct">Add Product</a>
					</div>
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2">
						<a href="/addSupplier">Add Supplier</a>
					</div>
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2">
						<a href="/addManufacturer">Add Manufacturer</a>
					</div>
					<div className="h-3rem border-bottom-2 flex justify-content-center align-content-center p-2">
						<a href="/addOrder">Add Order</a>
					</div>
				</div>
			)}
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-tags mr-1" />
				<h3 className="mr-1">Products</h3>
			</div>
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-cart-plus mr-1" />
				<h3 className="mr-1">Orders</h3>
			</div>
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-truck mr-1" />
				<h3 className="mr-1">Suppliers</h3>
			</div>
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-cog mr-1" />
				<h3 className="mr-1">Manufacturers</h3>
			</div>
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-book mr-1" />
				<h3 className="mr-1">Notes</h3>
			</div>
			<div className="flex align-items-center justify-content-center bg-primary text-color-white p-1 text-center border-bottom-2">
				<i className="pi pi-chart-line mr-1" />
				<h3 className="mr-1">Reports</h3>
			</div>
		</div>
	);
}

export default Sidebar;
