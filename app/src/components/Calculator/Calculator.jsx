import React from "react";
import {Button} from "../Button/Button";
import { Radio, Slider } from "antd";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Calculator() {
  const [valueTypeRepair, setValueTypeRepair] = useState("Косметичний");
  const [valueBuilding, setValueBuilding] = useState("Новобудова");
  const [valueNumberRoom, setValueNumberRoom] = useState(1);
    const [valueSlider, setValueSlider] = useState(30);
    const validatePhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmitForm = data => {
    console.log(data);
    reset();
  };

  const typeRepairOnChange = e => {
    setValueTypeRepair(e.target.value);
  };

  const typeBuildingOnChange = e => {
    setValueBuilding(e.target.value);
  };

  const numberRoomOnChange = e => {
    setValueNumberRoom(e.target.value);
  };

  return <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="typeRepair">
        <h2>Вид ремонту:</h2>
        <Radio.Group onChange={typeRepairOnChange} value={valueTypeRepair}>
          <Radio value={"Косметичний"}>Косметичний</Radio>
          <Radio value={"Капітальний"}>Капітальний</Radio>
          <Radio value={"Під ключ"}>Під ключ</Radio>
          <Radio value={"Дизайнерський"}>Дизайнерський</Radio>
        </Radio.Group>
      </div>
      <div className="typeBuilding">
        <h2>Тип вашої нерухомості:</h2>
        <Radio.Group onChange={typeBuildingOnChange} value={valueBuilding}>
          <Radio value={"Новобудова"}>Новобудова</Radio>
          <Radio value={"Вторинне житло"}>Вторинне житло</Radio>
        </Radio.Group>
      </div>
      <div className="numberRoom">
        <h2>Кількість кімнат:</h2>
        <Radio.Group onChange={numberRoomOnChange} value={valueNumberRoom}>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
          <Radio value={5}>5</Radio>
        </Radio.Group>
      </div>
      <div>
        <h2>Площа, м2:</h2>
        <Slider defaultValue={30} onChange={setValueSlider} tooltip={{ open: true }} value={valueSlider} />
      </div>
      <div className="call">
          <h2>Введите номер телефона</h2>
          <input className={errors?.phone && 'error'} {...register("phone", { required: true, pattern: validatePhone })} placeholder='+(380)' />
          <Button text='Замовити' buttonClass='order_btn'/>
      </div>
    </form>;
}
