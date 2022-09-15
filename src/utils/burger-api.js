const getIngredientsReq = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

const handleError = (err) => {
    console.log(err);
    alert('Ошибка получения данных')
}

const getIngredients = async (setIngredients) => {
    fetch(getIngredientsReq)
        .then((res) => checkResponse(res))
        .then((json) => setIngredients(json.data))
        .catch((err) => handleError(err))
}

export { getIngredients }