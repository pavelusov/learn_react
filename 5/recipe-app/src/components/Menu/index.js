import Recipe from '../Recipe/index';
import {AddColorForm} from '../AddColorForm'

const Menu = ({title, recipes}) =>
    <article>
        <header>
            <h1>{title}</h1>
            <div className="recipes">
                {recipes.map((recipe, key) =>
                    <Recipe key={key} {...recipe} />
                )}
            </div>
        </header>
    </article>;

export default Menu;
