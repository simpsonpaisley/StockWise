import logo from '../images/logo.svg';

function Header() {
	return (
		<div className="min-w-screen flex justify-content-start align-items-center h-6rem p-2">
			<img
				src={logo}
				className="w-3rem h-3rem m-2"></img>
			<h1 className="text-primary flex align-items-start">StockWise</h1>
		</div>
	);
}

export default Header;
