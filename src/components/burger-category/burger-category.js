import React from "react";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from './burger-category.module.css'

class BurgerCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <>
                <p id={this.props.id} className={`text text_type_main-medium pt-10`}>{this.props.title}</p>
                <ul className={styles.list}>
                    { this.props.ingredients.map((ingredient) => {
                        return( <BurgerIngredient name={ingredient.name} price={ingredient.price} image={ingredient.image}/> )
                    }
                )}
                </ul>
            </>       
        );
    }
}
 
export default BurgerCategory;