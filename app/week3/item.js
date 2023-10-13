export default function Item( { name, quantity, category} ) {
    return (
        <div>

            <h3> Name: {name}</h3>

            <p>Buy {quantity} in {category}</p>
            
        </div>
    );
}