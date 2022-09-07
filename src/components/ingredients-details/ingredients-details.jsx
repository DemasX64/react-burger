import styles from './ingredients-details.module.css'
import { ingredientProp } from '../../utils/prop-types';

const IngredientsDetails = (props) => {

    const {image_large, name, proteins, fat, carbohydrates, calories} = props.ingredient;
    
    return ( 
        <>
            <img src={image_large} alt={name} className='ml-5 mr-5'/>
            <p className="mt-4 mb-8 text text_type_main-medium">{name}</p>
            <ul className={styles.nutritionalValue}>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{calories}</p>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{fat}</p>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </li>
            </ul>
        </> 
    );
}

IngredientsDetails.propTypes = {
    ingredient: ingredientProp
}
 
export default IngredientsDetails;