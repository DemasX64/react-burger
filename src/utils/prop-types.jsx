import PropTypes from 'prop-types'

const ingredientProp = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_desktop: PropTypes.string,
    image_large: PropTypes.string,
    _v: PropTypes.number,
}).isRequired

const modalProp = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children:PropTypes.element.isRequired,
}

const ingredientsProp = PropTypes.arrayOf(ingredientProp).isRequired

export {ingredientProp, modalProp, ingredientsProp}