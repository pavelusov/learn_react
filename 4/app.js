window.onload = () => {
    // React
    const { render } = ReactDOM;

    class IngredientsList extends React.Component {
        renderListItem(item, key) {
            return React.createElement('li', {key}, item);
        }
        render() {
            return React.createElement('ul', {className: "ingredients"},
                this.props.items.map(this.renderListItem)
            );
        }
    }
    const items = ["мука", "яйцо", "сахар", "ванилин"];

    render(
        React.createElement(IngredientsList, {items}, null),
        document.getElementById('react-container'));
};
