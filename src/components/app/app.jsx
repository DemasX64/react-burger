import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from './app.module.css'

const App = () => {

    const [ingredients, setIngredients] = useState([])

    const getIngredientsReq = 'https://norma.nomoreparties.space/api/ingredients';

    useEffect(() => {
        const getIngredients = async () => {
            fetch(getIngredientsReq)
                .then((res) => res.json())
                .then((json) => setIngredients(json.data))
                .catch((err) => console.log(err))
        }
        getIngredients()
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