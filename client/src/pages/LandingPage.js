import box from '../images/box.png';
import scanner from '../images/scanner.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Auth0Redirect from '../Components/Auth0Redirect';
function LandingPage() {
	return (
		<div className="flex flex-column m-0 w-screen ">
			<Auth0Redirect>
				<div className="landing h-screen bg-no-repeat bg-cover max-w-full">
					<Header />
					<div className="flex w-full justify-content-between align-items-center p-1rem m-0">
						<div className="blob2 bg-cover bg-no-repeat m-1 w-15rem">
							<img
								src={box}
								className="w-10rem"></img>
						</div>
						<h1 className="text-primary">
							Master Your Inventory with{' '}
							<span className="underline hover: ">StockWise</span>
						</h1>
						<div className="blob bg-cover bg-no-repeat m-1 w-15rem ">
							<img
								src={scanner}
								className="w-8rem"></img>
						</div>
					</div>
					<div className="bg-primary w-full p-2 flex justify-content-evenly align-items-center mt-4">
						<div className="flex flex-column w-10rem justify-content-center align-items-center text-center p-1rem mt-3">
							<i
								className="pi pi-box"
								style={{ fontSize: '2rem' }}></i>
							<h3>Track Your Inventory</h3>
						</div>
						<div className="flex flex-column w-10rem justify-content-center align-items-center text-center p-1rem mt-3">
							<i
								className="pi pi-chart-line"
								style={{ fontSize: '2rem' }}></i>
							<h3>Get Inventory Reports</h3>
						</div>
						<div className="flex flex-column w-10rem justify-content-center align-items-center text-center p-1rem mt-3">
							<i
								className="pi pi-money-bill"
								style={{ fontSize: '2rem' }}></i>
							<h3>Calculate Your Profit</h3>
						</div>
						<div className="flex flex-column w-10rem justify-content-center align-items-center text-center p-1rem mt-3">
							<i
								className="pi pi-qrcode"
								style={{ fontSize: '2rem' }}></i>
							<h3>Barcode Scanner Compatible</h3>
						</div>
						<div className="flex flex-column w-10rem justify-content-center align-items-center text-center p-1rem mt-3">
							<i
								className="pi pi-truck"
								style={{ fontSize: '2rem' }}></i>
							<h3>Never Run Out of Stock Again</h3>
						</div>
					</div>
					<div>
						<form></form>
					</div>
				</div>
				<Footer />
			</Auth0Redirect>
		</div>
	);
}

export default LandingPage;
