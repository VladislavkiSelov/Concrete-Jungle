import React from "react";
import { Button } from "../Button/Button";
import { Radio, Slider, ConfigProvider } from "antd";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useIMask } from "react-imask";
import { IMaskInput } from 'react-imask';
import './Calculator.scss'

export default function Calculator() {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [isInputValid, setInputValid] = useState(false);
  const [valueTypeRepair, setValueTypeRepair] = useState("Косметичний");
  const [valueBuilding, setValueBuilding] = useState("Новобудова");
  const [valueNumberRoom, setValueNumberRoom] = useState(1);
  const [valueSlider, setValueSlider] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [day, setDay] = useState(0);
  const [price, setPrice] = useState(0);
  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      typeRepair: valueTypeRepair,
      typeBuilding: valueBuilding,
      numberRoom: valueNumberRoom,
      square: valueSlider
    }
  });

  const handleAccept = () => {
    console.log('b');
    setInputValid(false);
  };

  const handleEmpty = () => {
    console.log('a');
    setInputValid(true);
  };

  //  const { ref } = useIMask({});


  const onSubmitForm = data => {
    if (isInputValid) {
      ref.current.element.classList.remove('error')
        console.log(data);
    } else {
      ref.current.element.classList.add('error')
      return
    }
    reset();
  };

  const typeRepairOnChange = e => {
    setValueTypeRepair(e.target.value);
    setValue('typeRepair', e.target.value)
  };

  const typeBuildingOnChange = e => {
    setValueBuilding(e.target.value);
    setValue('typeBuilding', e.target.value)
  };

  const numberRoomOnChange = e => {
    setValueNumberRoom(e.target.value);
    setValue('numberRoom', e.target.value)
  };

  const sliderSquare = value => {
    setValueSlider(value)
    setValue('square', value)
  };

  const handelChangePhone = e => {
    setPhoneNumber(e.target.value)
    setValue('phone', e.target.value)
  };

  return <form className="formCalculator" onSubmit={handleSubmit(onSubmitForm)}>
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleColor: '#2d4872',
            handleActiveColor: '#2d4872',
            trackBg: '#2d4872',
            trackHoverBg: '#2d4872',
            dotActiveBorderColor: '#2d4872',
            colorPrimaryBorderHover: '#2d4872',
            dotBorderColor: '#2d4872',
            colorBgElevated: '#2d4872',
            handleSize: 13,
            handleSizeHover: 13,
            algorithm: true,
          },
          Radio: {
            colorWhite: '#2d4872',
            colorPrimary: '#2d4872',
            colorTextLightSolid: '#fff',
            algorithm: true,
          }
        },
      }}
    >
      <h2>Розрахуйте вартість ремонту</h2>
      <div className="typeRepair">
        <h2>Вид ремонту:</h2>
        <Radio.Group className="box_repair_radio" onChange={typeRepairOnChange} value={valueTypeRepair}>
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
        </Radio.Group>
      </div>
      <div className="squareRoom">
        <h2>Площа, м2:</h2>
        <Slider defaultValue={30} onChange={(value) => sliderSquare(value)} tooltip={{ open: true }} value={valueSlider} />
      </div>
      <div className="sale_repaire">
        <div>
          <h3>Термін ремонту:</h3>
          <h4>до {day} днів</h4>
        </div>
        <div>
          <h3>Знижка складе:</h3>
          <h4>{price} грн</h4>
        </div>
      </div>
      <div className="call">
        <h2>Введите номер телефона</h2>
        <div>

          <IMaskInput
            mask="+{7}(000)000-00-00"
            radix="."
            unmask={true} // true|false|'typed'
            ref={ref}
            inputRef={inputRef}
            onAccept={
              () => handleAccept()
            }
            onComplete={() => handleEmpty()}
            className={errors?.phone && 'error'}
            placeholder="+{7}(000)000-00-00"
            onChange={(e) => handelChangePhone(e)} 
          />
          <Button text='Замовити' buttonClass='order_btn' />
        </div>
      </div>
    </ConfigProvider>
  </form>;
}




