import React from "react";
import "./HowWeWork.scss";

export default function HowWeWork() {
  const howWeWorkArray = [
    { name: "Бесплатный выезд замерщика", img: "/img/builder_1.png" },
    { name: "Смета в день обращения", img: "/img/consent_1.png" },
    { name: "Договор", img: "/img/official-documents_1.png" },
    { name: "Накладные материалы", img: "/img/gdpr_1.png" },
    { name: "Контроль: фотоотчёт или видеонаблюдение", img: "/img/cctv_1.png" },
    { name: "Акт выполненных работ", img: "/img/contract_1.png" },
    { name: "Акт приемки работ по договору", img: "/img/cooperation_1.png" },
    { name: "Гарантия на выполненные работы", img: "/img/guarantee_1.png" }
  ];

  return (
    <section className="HowWeWork container">
      <h2>Как мы работаем</h2>
      <p>
        Вам понятен каждый этап: фиксированные сроки и цены, предоставляем все
        документы: накладные, гарантии, акты. Вы будете уверены в результате.
      </p>
      <div className="box_card_work">
        {howWeWorkArray.map(el =>
          <div className="card_work">
            <div>
              <div className="box_img">
                <img src={el.img} alt="#" />
              </div>
              <h4>
                {el.name}
              </h4>
            </div>
            <div>
              <div className="line" />
              <div className="circle" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
