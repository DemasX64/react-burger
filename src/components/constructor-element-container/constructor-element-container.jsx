/* eslint-disable camelcase */
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styles from './constructor-element-container.module.css';
import { removeIngredientFromConstructor, swapItems } from '../../services/reducers/constructor';
import { ingredientProp } from '../../utils/prop-types';

function ConstructorElementContainer({ ingredient, index }) {
  const {
    type,
    name,
    price,
    image_mobile,
    uuid,
  } = ingredient;
  const ref = useRef(null);

  const dispatch = useDispatch();
  const [, refDrag] = useDrag({
    type: 'constructor',
    item: { ...ingredient, index },
  });

  const [, refDrop] = useDrop({
    accept: 'constructor',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) { return; }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(swapItems({ dragIndex, hoverIndex }));
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  refDrag(refDrop(ref));

  const removeIngredient = () => {
    dispatch(removeIngredientFromConstructor(uuid));
  };

  return (
    <li ref={ref} className={styles.item}>
      {!ingredient.isLocked && <DragIcon type="primary" />}
      <ConstructorElement isLocked={ingredient.isLocked} type={type} className="ml-2" text={name} price={price} thumbnail={image_mobile} handleClose={removeIngredient} />
    </li>
  );
}

ConstructorElementContainer.propTypes = {
  ingredient: ingredientProp.isRequired,
  index: PropTypes.number.isRequired,
};

export default ConstructorElementContainer;
