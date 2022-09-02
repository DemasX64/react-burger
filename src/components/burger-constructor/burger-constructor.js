import { Button, ConstructorElement,CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import styles from './burger-constructor.module.css'
 
class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients:[
                {type:'top',isLocked:true,text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
                {type:'bottom',isLocked:true,text:'Краторная булка N-200i (верх)',price:50,thumbnail:'https://code.s3.yandex.net/react/code/meat-03-mobile.png'},
            ]
        };
    }

    render() { 
        return ( 
            <section>
                <ul className={`mt-25 pl-4 pr-2 ${styles.container}`}>
                    {this.state.ingredients.map((ingredient) => {
                        return (
                            <li className={`${styles.item} ${ingredient.isLocked?'pl-8':''}`}>
                                {!ingredient.isLocked? <DragIcon type="primary"/>:''}
                                <ConstructorElement isLocked={ingredient.isLocked} type={ingredient.type} className='ml-2' text={ingredient.text} price={ingredient.price} thumbnail={ingredient.thumbnail}/>
                            </li>
                        )
                    })}
                </ul>
                <div className={`mt-10 pl-4 pr-4 ${styles.total}`}>
                    <div className={`mt-1 mr-10 ${styles.price}`}>
                        <p className="text text_type_digits-medium mr-2">1290</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large">Оформить заказ</Button>
                </div>   
            </section> 
        );
    }
}
 
export default BurgerConstructor;