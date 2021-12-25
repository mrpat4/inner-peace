import { useEffect, useState } from "react";
import style from "./Style";
export default function Loading() {
  //   for (let i = 0; i < 100; i++) {
  //     let element = `W / ${i}`;
  //     return element;
  //   }
  const [num, setNum] = useState(0);
  useEffect(() => {
    let i = 0;
    setInterval(function () {
      setNum(Math.floor(Math.random() * 90 + 10));
    }, 100);
  }, []);

  return <style.Div_loading_container>{`W / 0${num}`}</style.Div_loading_container>;
}
