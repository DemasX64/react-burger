import { useDispatch } from 'react-redux';
import { AppDispatch } from '../services/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
