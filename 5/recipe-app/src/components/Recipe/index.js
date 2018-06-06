import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import Summary from './Summary';
import './style.less';

const Recipe = ({name, ingredients, steps}) =>
    <section className="recipe" id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients}/>
        <Instructions steps={steps} title="Cooking instructions"/>
        <Summary title="Summary:" ingredients={ingredients.length} steps={steps.length}/>
    </section>;

export default Recipe;
