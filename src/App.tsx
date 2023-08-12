import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandAble from "./components/ExpandAble";
import RefForm from "./components/RefForm";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";
import Axios from "./components/Axios";

export default function App() {
  const cities = ["Lahore", "Islamabad", "Karachi", "Jaranwala", "Test"];
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [items, setItems] = useState(["Product 1", "Product 2"]);
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div className="container">
        <Axios />
        {/* <ReactHookForm /> */}
        {/* <RefForm /> */}
        {/* <Form /> */}
      </div>
      {/* <ExpandAble maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        reiciendis? Modi harum repellendus voluptatem quam obcaecati ex hic nisi
        porro impedit delectus! Voluptas provident quo deleniti dolor quos
        reprehenderit minus.
      </ExpandAble>
      <Navbar itemsCount={items.length} />
      <Cart items={items} onClear={() => setItems([])} />
      <br />
      <br />
      {isShowAlert && (
        <Alert onClose={() => setIsShowAlert(false)}>
          <b>Primary! </b> This is content of alert.
        </Alert>
      )}
      <Button onClick={() => setIsShowAlert(true)}>Primary</Button>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      /> */}
    </div>
  );
}
