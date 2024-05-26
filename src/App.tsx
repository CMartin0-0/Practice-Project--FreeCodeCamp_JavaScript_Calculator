import { useState } from 'react';
import './App.css';
import Wrapper from './components/wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
    ['C', '/'],
    ['X',7, 8, 9 ],
    ['-',4, 5, 6 ],
    ['+',1, 2, 3 ],
    ['.',0,  '='],
];

const App = () => {
    const [display, setDisplay] = useState('0');
    const [currNumber, setCurrNumber] = useState('');
    const [currSign, setCurrSign] = useState('');
    const [lastInputWasSign, setLastInputWasSign] = useState('false');
    const [wasEvaluated, setWasEvaluated] = useState('false');
    const [lastInput, setLastInput] = useState('');

    const numClickHandler = (e) => {
        const value = e.target.innerHTML.toString().replace('X', '*');

        if (value.includes('*') || value.includes('-') || value.includes('/') || value.includes('+')) {
            if (lastInputWasSign === 'true' && value === '-' && currSign.length < 2) {
                setCurrSign(currSign + value);
                setLastInput(currSign + value);
            } else {
                setCurrSign(value);
                setLastInput(value);
            }

            setLastInputWasSign('true');
            setWasEvaluated('false');
            setCurrNumber('');
        } else {
            if (wasEvaluated === 'true') {
                if (value === '.' && !display.includes('.')) {
                    setDisplay(display + value);
                    setWasEvaluated('false');
                    setLastInputWasSign('false');
                    setLastInput(value);
                    setCurrNumber(display + value);
                    return;
                } else {
                    setDisplay(value);
                    setWasEvaluated('false');
                    setLastInputWasSign('false');
                    setLastInput(value);
                    setCurrNumber(value);
                    return;
                }
            }

            if (currSign === '-' && currSign.length === 1 && display === '0' && value !== '0') {
                if (value === '.') {
                    setDisplay(currSign + '0.');
                    setLastInputWasSign('false');
                    setCurrSign('');
                    setLastInput(value);
                    setCurrNumber('0.');
                    return;
                } else {
                    setDisplay(currSign + value);
                    setLastInputWasSign('false');
                    setCurrSign('');
                    setLastInput(value);
                    setCurrNumber(value);
                    return;
                }
            } else if (display === '0' && value !== '0') {
                if (value === '.') {
                    setDisplay('0.');
                    setLastInputWasSign('false');
                    setLastInput(value);
                    setCurrNumber('0.');
                    setCurrSign('');
                    return;
                } else {
                    setDisplay(value);
                    setLastInputWasSign('false');
                    setLastInput(value);
                    setCurrNumber(value);
                    setCurrSign('');
                    return;
                }
            } else if (display === '0' && value === '0') {
                setDisplay(display);
                setLastInputWasSign('false');
                setCurrSign('');
                setLastInput(value);
                return;
            } else if (display === '0.') {
                if (value === '.') {
                    setDisplay(display);
                    setLastInputWasSign('false');
                    setCurrSign('');
                    setLastInput(value);
                    setCurrNumber('0.');
                    return;
                } else {
                    setDisplay(display + value);
                    setLastInputWasSign('false');
                    setCurrSign('');
                    setLastInput(value);
                    setCurrNumber('0.' + value);
                    return;
                }
            }

            if (value === '0' && currNumber === '0') {
                setDisplay(display);
                setLastInputWasSign('false');
                setCurrSign('');
                setLastInput(value);
                setCurrNumber(currNumber);
                return;
            }
            if (value === '.' && currNumber.includes('.')) {
                setDisplay(display);
                setLastInputWasSign('false');
                setCurrSign('');
                setLastInput(value);
                setCurrNumber(currNumber);
                return;
            }

            if (currSign === '') {
                setDisplay(display + value);
                setLastInput(value);

                if (currNumber !== '0') {
                    setCurrNumber(currNumber + value);
                } else {
                    if (value === '.') {
                        setCurrNumber('0.');
                    } else {
                        setCurrNumber(value);
                    }
                }
            } else {
                setDisplay(display + ' ' + currSign + ' ' + value);
                setLastInput(value);
                if (value === '.') {
                    setCurrNumber('0.');
                } else {
                    setCurrNumber(value);
                }
            }

            setLastInputWasSign('false');
            setCurrSign('');
        }
    };

    const equalsClickHandler = () => {
        const evalResult = eval(display);

        setDisplay(evalResult);
        setCurrNumber('');
        setCurrSign('');
        setLastInputWasSign('false');
        setWasEvaluated('true');
        setLastInput('');
    };


    const resetClickHandler = () => {
        setCurrSign('');
        setLastInputWasSign('false');
        setCurrNumber('');
        setDisplay('0');
        setWasEvaluated('false');
        setLastInput('');
    };

    return (
        <Wrapper>
            <Screen id="display" value={display} />
            <Screen id="display2" value={lastInput} />

            <ButtonBox>
                {btnValues.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={
                                btn === '='
                                    ? 'equals'
                                    : btn === '.'
                                      ? 'decimal'
                                      : btn === '/'
                                        ? 'divide'
                                        : btn === 'X'
                                          ? 'multiply'
                                          : btn === '+'
                                            ? 'add'
                                            : btn === '-'
                                              ? 'subtract'
                                              : btn === 'C'
                                                ? 'clear'
                                                : btn === 1
                                                  ? 'one'
                                                  : btn === 2
                                                    ? 'two'
                                                    : btn === 3
                                                      ? 'three'
                                                      : btn === 4
                                                        ? 'four'
                                                        : btn === 5
                                                          ? 'five'
                                                          : btn === 6
                                                            ? 'six'
                                                            : btn === 7
                                                              ? 'seven'
                                                              : btn === 8
                                                                ? 'eight'
                                                                : btn === 9
                                                                  ? 'nine'
                                                                  : btn === 0
                                                                    ? 'zero'
                                                                    : ''
                            }
                            id={
                                btn === '='
                                    ? 'equals'
                                    : btn === '.'
                                      ? 'decimal'
                                      : btn === '/'
                                        ? 'divide'
                                        : btn === 'X'
                                          ? 'multiply'
                                          : btn === '+'
                                            ? 'add'
                                            : btn === '-'
                                              ? 'subtract'
                                              : btn === 'C'
                                                ? 'clear'
                                                : btn === 1
                                                  ? 'one'
                                                  : btn === 2
                                                    ? 'two'
                                                    : btn === 3
                                                      ? 'three'
                                                      : btn === 4
                                                        ? 'four'
                                                        : btn === 5
                                                          ? 'five'
                                                          : btn === 6
                                                            ? 'six'
                                                            : btn === 7
                                                              ? 'seven'
                                                              : btn === 8
                                                                ? 'eight'
                                                                : btn === 9
                                                                  ? 'nine'
                                                                  : btn === 0
                                                                    ? 'zero'
                                                                    : ''
                            }
                            value={btn}
                            onClick={
                                btn === 'C'
                                    ? resetClickHandler
                                    : btn === '='
                                          ? equalsClickHandler
                                          : numClickHandler
                            }
                        />
                    );
                })}
            </ButtonBox>
        </Wrapper>
    );
};

export default App;
