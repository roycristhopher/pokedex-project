interface Props {
	Pokemon: any;
	loading: boolean;
	error: boolean;
}

export default function PokedexScreen() {
	return (
		<div className="pokedex-screen">
			<div className="pokemon-info">
				<h2 className="pokemon-name">{pokemon?.name}</h2>
				<img
					className="pokemon-img"
					src={pokemon?.sprites.front_default}
					alt={pokemon?.name}
				/>
				<ul className="pokemon-stats">
					{ /* Aquí iteraremos sobre la lista de estadísticas */}
				</ul>
			</div>
		</div>
	);
}