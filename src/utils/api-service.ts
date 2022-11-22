export const handleError = (err: unknown) => {
  console.log(err);
  // alert('Ошибка получения данных');
};

export const checkResponse = async (res: Response, rejectWithValue: any) => {
  if (!res.ok) {
    handleError(res.statusText);
    return rejectWithValue(res.statusText);
  }
  return res.json();
};
