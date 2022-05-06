import { RootStateOrAny, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {  AppDispatch, RootState} from '../stores/slices/'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;