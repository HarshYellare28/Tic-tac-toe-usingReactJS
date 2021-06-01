import React,{useState} from "react"
import Icon from "./Components/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

var NotDrawn = false;
const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    NotDrawn = true;
    itemArray.fill("empty",0,9);
  }

  const checkIsWinner = () => {
    if(itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2])
    {
      setWinMessage(`${itemArray[0]} won !`)
    }
    else if(itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5])
    {
      setWinMessage(`${itemArray[3]} won !`)
    }
    else if(itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8])
    {
      setWinMessage(`${itemArray[6]} won !`)
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6])
    {
      setWinMessage(`${itemArray[0]} won !`)
    }
    else if(itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7])
    {
      setWinMessage(`${itemArray[1]} won !`)
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8])
    {
      setWinMessage(`${itemArray[2]} won !`)
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8])
    {
      setWinMessage(`${itemArray[0]} won !`)
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6])
    {
      setWinMessage(`${itemArray[2]} won !`)
    }
  }
  
  const checkIsDrawn = () => {
    itemArray.forEach((icon) => {
      if(icon==="empty")
      {
        NotDrawn = true;
      }
    })
    if(NotDrawn === false)
    {
      setWinMessage(`Game Drawn !`)
    }
    NotDrawn = false;
  }

  const changeItem = itemNumber => {
    if(winMessage)
    {
      return toast(winMessage)
    }
    if(itemArray[itemNumber] === "empty")
    {
      itemArray[itemNumber] = isCross?"cross":"circle"
      setIsCross(!isCross);//setting isCross state back to false once changed the item
    }
    else
    {
      return toast("Already filled")
    }
    checkIsWinner();
    checkIsDrawn();
  }

  return (
    <div className="Container">
      <Container  className="text-center display-4 mt-5">
          <h1 className="heading">Tic-Tac-Toe</h1>       
      </Container>    
      <Container className = "p-4">
        <ToastContainer toastStyle={{ color:"#CAD5E2", backgroundColor: "#03203C",}} autoClose={1000} position="bottom-center"/>
        <Row>
          <Col md ={6} className = "offset-md-3"> 
            <div className="grid"> 
              {itemArray.map((item,index)=> (
                <Card onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="text-below-grid">
              {winMessage ? (
                <div className="mb-2 mt-1">
                  <h1 className="winMessageClass text-uppercase text-center">
                    {winMessage}
                  </h1>
                  <div className="text-center">
                    <Button className="buttonClass" onClick={reloadGame}>
                      Reload Game
                    </Button>
                  </div>
                </div>
              ) : (
                <h1 className = "text-center turnTeller">
                  {isCross? "Cross's" : "Circle's"} turn
                </h1>
              )}
            </div>            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
