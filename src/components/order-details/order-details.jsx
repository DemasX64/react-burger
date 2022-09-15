import done from '../../images/done.png'
import '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return ( 
        <>
            <p className="mt-4 mb-8 text text_type_digits-large">034536</p>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <img src={done} alt='ok' className='mt-15 mb-15'/>
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="mt-2 mb-15 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </> 
    );
}
 
export default OrderDetails;