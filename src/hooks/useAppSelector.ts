import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../services/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
