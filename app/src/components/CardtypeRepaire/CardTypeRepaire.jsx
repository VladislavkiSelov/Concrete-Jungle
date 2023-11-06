import React from "react";
import { Button } from "../Button/Button";

export default function CardTypeRepaire({ objJob }) {
  console.log(objJob.Демонтаж);
  return (
    <div className="card_type_repaire">
      <div className="card_header_repaire">
        <div className="box_img">
          <img src="/img/section1(2).jpg" alt="#" />
        </div>
        <h2>Косметический</h2>
        <h4>от 5 дней</h4>
      </div>
      <div>
        <p>
          Такой тип ремонта подойдёт для того чтобы «освежить» ремонт в
          квартире: заменить покрытие стен, пола и потолка без предварительной
          подготовки
        </p>
      </div>
      <div>
        <h3>Демонтаж</h3>
        <ul>
          {objJob["Демонтаж"].map(el =>
            <li>
              {el}
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3>Черновые работы</h3>
        <ul>
          {objJob["Черновые работы"].map(el =>
            <li>
              {el}
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3>Чистовые работы</h3>
        <ul>
          {objJob["Чистовые работы"].map(el =>
            <li>
              {el}
            </li>
          )}
        </ul>
      </div>
      <button>Список работ</button>
      <h4>
        от 3 245 руб/м2 <span>от 2 450 руб/м2</span>
      </h4>
      <Button text="Получить смету" />
    </div>
  );
}
