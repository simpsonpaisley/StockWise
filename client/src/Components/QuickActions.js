import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

function QuickActions() {
	const QuickActionButtons = [
		{
			label: 'Scan Stock',
		},
		{
			label: 'Add Product Order',
		},
		{
			label: 'Add Product',
		},
		{
			label: 'Add Supplier',
		},
		{
			label: 'Add Manufacturer',
		},
	];

	const show = () => {
		Toast.current.show({
			severity: 'error',
			summary: 'Error',
			detail: 'Please Choose an Option from the Dropdown',
		});
	};
	return (
		<div className="flex  m-3 z-0">
			<Toast ref={Toast} />
			<SplitButton
				label="Quick Actions"
				onClick={show}
				model={QuickActionButtons}
				raised
			/>
		</div>
	);
}

export default QuickActions;
