import { useEffect, useState } from "react";
import { getIngredients } from "../../utils/burger-api";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from './app.module.css'

const App = () => {

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getIngredients(setIngredients)
    },[])

    return ( 
        <>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients ingredients={ingredients}/>
                <BurgerConstructor/>
            </main>
        </>
    );
}
 
export default App;