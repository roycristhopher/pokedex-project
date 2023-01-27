import { FormEvent, ChangeEvent } from "react";

interface Props {
	pokemon: any;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	setPokemon: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PokemonForm({
	handleSubmit,
	pokemon,
	setPokemon,
}: Props) {
	return (
		<form className="pokemon-form" onSubmit={handleSubmit}>
			<input
				className="pokemon-input"
				type="text"
				name="pokemon"
				value={pokemon}
				placeholder="Busca tu pokemon"
			//Actualizas el valor del input cuando el usuario ingresa un text
			// onChange={(e: ChangeEvent<HTMLInputElement> ) => setPokemon(e.target.value)}
			// autoComplete="off"
			/>
			<input type="submit" className="pokemon-btn" value="" />
		</form>
	);
} 