import './index.css';

export const App = () => {
	return (
		<div className='h-screen'>
			<header aria-label="Global" className="p-6 h-16 bg-gray-900" style={{ fontWeight: '700' }}>
				<span className='text-gray-300'>
					SEOTORAGE
				</span>
			</header>
			<div className='grid grid-cols-4 h-full'>
				<nav className='bg-gray-900 p-18 pr-6'>
					<ul className='text-gray-100' style={{ fontWeight: '600' }}>
						<li>NAVBAR</li>
					</ul>
				</nav>
				<section className='col-span-3 p-6 pt-18'>
					CONTENT
				</section>
			</div>
		</div>
	);
}