import React, { useState } from 'react';
import styled from 'styled-components';
import { Row,Col} from 'styled-bootstrap-grid';

const Calculator = () => {
    const [value, setValue] = useState('');
    console.log(value);
    return (
       <Row>
        <Col lg="12" md="12" sm="12" xs="12">
        <Wrapper1>
            <Wrapper>

                <Screen type="text" value={value} />

                <StyleBtn>
                    <InputT type="button" value="+" onClick={(e) => setValue(value + e.target.value)}></InputT>
                    <InputT type="button" value="*" onClick={(e) => setValue(value + e.target.value)}></InputT>
                    <InputT type="button" value="/" onClick={(e) => setValue(value + e.target.value)}></InputT>
                    <InputT type="button" value="-" onClick={(e) => setValue(value + e.target.value)}></InputT>
                </StyleBtn>

                <StyleBtn>
                    <InputT type="button" value="7" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="8" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="9" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="0" onClick={(e) => setValue(value + e.target.value)} />

                </StyleBtn>

                <StyleBtn>
                    <InputT type="button" value="4" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="5" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="6" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="C" onClick={(e) => setValue("")} />

                </StyleBtn>
                <StyleBtn>
                    <InputT type="button" value="1" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="2" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="3" onClick={(e) => setValue(value + e.target.value)} />
                    <InputT type="button" value="D" onClick={(e) => setValue(value.slice(0,-1))} />

                </StyleBtn>
                <StyleBtn>
                    <InputT style={{ width: "100%" }} type="button" value="=" onClick={(e) => setValue(eval(value))} />
                </StyleBtn>
            </Wrapper>
        </Wrapper1>
        </Col>
       </Row>
    );
}

const Wrapper1 = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
border:1px solid green;
background-image:url('./pic4.jpg');
background-repeat:no-repeat;
background-size:cover;

`
const Wrapper = styled.form`
height:auto;
width:30%;
`

const Screen = styled.input`
     width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.075);
    color: black;
    font-size: 25px;
     border:1px solid white;
     border-right-width: thick;
     border-left-width: thick;
`
const StyleBtn = styled.div`
display: flex;
justify-content: space-around;
`
const InputT = styled.input`
height: 50px;
width: 25%;
color: white;
background-color: #006680;
`

export default Calculator;
















