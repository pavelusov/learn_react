const Ingredient = ({amount, measurement, name}) =>
    <li>
        <span className="amount">{amount}</span>
        <span className="measurement"><b>{measurement}</b></span>
        <span className="name">{name}</span>
    </li>;

export default Ingredient;
