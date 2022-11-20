/* eslint-disable camelcase */
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './constructor-element-container.module.css';
import { removeIngredientFromConstructor, swapItems } from '../../services/reducers/constructor';
import { IIngredientProp } from '../../utils/types';
import useAppDispatch from '../../hooks/useAppDispatch';

interface IConstructorElementContainerProps {
  ingredient: IIngredientProp,
  index: number,
}

const ConstructorElementContainer: FC<IConstructorElementContainerProps> = (props) => {
  const { ingredient, index } = props;
  const {
    name,
    price,
    image_mobile,
    uuid,
  } = ingredient;
  const ref = useRef<HTMLLIElement>(null);

  const dispatch = useAppDispatch();
  const [, refDrag] = useDrag({
    type: 'constructor',
    item: { ...ingredient, index },
  });

  const [, refDrop] = useDrop({
    accept: 'constructor',
    hover(item: {index: number}, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) { return; }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      let hoverClientY = 0;
      if (clientOffset) {
        hoverClientY = clientOffset.y - hoverBoundingRect.top;
      }
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
    <li ref={ref} className={`${styles.item}`}>
      {!ingredient.isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        isLocked={ingredient.isLocked}
        text={name}
        price={price}
        thumbnail={image_mobile}
        handleClose={removeIngredient}
      />
    </li>
  );
};

export default ConstructorElementContainer;
