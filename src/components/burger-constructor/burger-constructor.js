import { Button, ConstructorElement,CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import styles from './burger-constructor.module.css'
 
const BurgerConstructor = () => {

    const [ingredients, setIngredients] = useState([
        {_id:'2',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'1',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'0',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'3',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'4',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'5',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'6',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'7',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
        {_id:'8',text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
    ])
    const [isOrderDetailsOpen,setIsOrderDetailsOpen] = useState(false)

    const toggleOrderDetails = (e) => {
        setIsOrderDetailsOpen(!isOrderDetailsOpen)
    }

    return ( 
        <section>
            <ul className='mt-25 pl-4'>
                <li className='ml-8'>
                    <ConstructorElement isLocked type='top'  text='Краторная булка N-200i (верх)' price={50} thumbnail='https://code.s3.yandex.net/react/code/meat-03-mobile.png'/>
                </li>
                <li>
                    <ul className={`pr-2 mt-4 mb-4 ${styles.container}`}>
                        {ingredients.map((ingredient) => {
                            const {type, text, price, thumbnail} = ingredient
                            return (
                                <li key={ingredient._id} className={`${styles.item}`}>
                                    {!ingredient.isLocked && <DragIcon type="primary"/>}
                                    <ConstructorElement isLocked={ingredient.isLocked} type={type} className='ml-2' text={text} price={price} thumbnail={thumbnail}/>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li className='ml-8'>
                    <ConstructorElement isLocked type='bottom' text='Краторная булка N-200i (низ)' price={50} thumbnail='https://code.s3.yandex.net/react/code/meat-03-mobile.png'/>
                </li>
            </ul>
            <div className={`mb-13 mt-10 pl-4 pr-4  ${styles.total}`}>
                <div className={`mt-1 mr-10 ${styles.price}`}>
                    <p className="text text_type_digits-medium mr-2">1290</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={toggleOrderDetails}>Оформить заказ</Button>
                {isOrderDetailsOpen && <ModalOverlay onClick={toggleOrderDetails}><OrderDetails/></ModalOverlay>}
            </div>   
        </section> 
    );
}

export default BurgerConstructor;
