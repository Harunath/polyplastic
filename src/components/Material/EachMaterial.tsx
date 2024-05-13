interface EachMaterialProps {
	name: string;
	content: string;
}
const EachMaterial: React.FC<EachMaterialProps> = ({ name, content }) => {
	return (
		<div>
			<div>
				<p>{name}</p>
			</div>
			<div>
				<p>
					{name} {content}
				</p>
			</div>
		</div>
	);
};

export default EachMaterial;
