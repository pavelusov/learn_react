import IngredientsList from './IngredientsList/index';
import Instructions from './Instructions/index';
import './style.less';
import './index.css';

const Recipe = ({name, ingredients, steps}) =>
    <section className="recipe" id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients}/>
        <Instructions steps={steps} title="Cooking instructions"/>
    </section>;

export default Recipe;
