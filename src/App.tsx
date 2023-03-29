import CleanArchLogo from './assets/cleanArch.svg';
import PascalCamelCase from './components/component-name';

function App() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					height: '50px',
					alignItems: 'center',
					margin: '1rem',
				}}
			>
				{/*
			Replace inline styles, do not use it
			and enjoy using a clean start proyect, yeah
		*/}
				<img src={CleanArchLogo} alt="logo" style={{ height: '50px' }} />
				<h1>Clean Arch</h1>
			</div>
			<PascalCamelCase />
		</>
	);
}

export default App;
