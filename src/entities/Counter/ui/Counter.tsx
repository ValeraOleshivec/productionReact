import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="countValue">{counterValue}</h1>
            <Button
                data-testid="incrementBtn"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid="decrementBtn"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
