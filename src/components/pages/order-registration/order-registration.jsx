import React, { useState, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import {
  StiledOrderRegistration,
  StyledInputBlock,
  StyledFieldConteyner,
  StyledSlider,
  StyledSlide,
  StyledButton,
} from "./styles";
import Text, { typeText } from "/src/components/ui/text/text";
import CheckBoxList from "/src/components/ui/choise-list/choise-list";
import InputAddress from "/src/components/ui/input-address/input-address";
import Price from "/src/components/ui/price/price";
import Button from "/src/components/ui/button/button";
import ProductCard from "/src/components/ui/product-card/product-card";

export default function OrderRegistration({ products }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectList, setSelectList] = useState([]);
  const [address, setAddress] = useState("");
  const getPrice = () => {
    let price = 0;
    selectList.map((value) => {
      products.map((product) => {
        if (product.id === value) {
          price = price + product.price;
        }
      });
    });
    return price;
  };
  const price = getPrice();
  const getCurrentSlide = (value, index) => {
    if (!selectList.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const sendRequest = () => {
    console.log(
      `Заказаны продукты с ID ${selectList} на сумму ${price} с доставкой по адрсу: ${address}`
    );
  };
  return (
    <StiledOrderRegistration as="form">
      <StyledInputBlock>
        <StyledFieldConteyner className="checkbox-block">
          <Text type={typeText.body18b}>Выберите продукты</Text>
          <CheckBoxList
            fields={products}
            selected={selectList}
            onChange={setSelectList}
            onClickField={getCurrentSlide}
          />
        </StyledFieldConteyner>
        <StyledFieldConteyner className="input-address">
          <Text type={typeText.body18b}>Сделать заказ</Text>
          <InputAddress address={address} onChange={setAddress} />
          <Price price={price} />
          <Button
            minWidth={260}
            disabled={!(selectList.length && address)}
            onClick={sendRequest}
          >
            Купить
          </Button>
        </StyledFieldConteyner>
      </StyledInputBlock>

      <StyledSlider
        onSwiper={setSwiperRef}
        slidesPerView="auto"
        spaceBetween={5}
        direction="vertical"
        loop
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        freeMode
        watchSlidesProgress
      >
        {products &&
          products.length &&
          products.map((product, index) => (
            <StyledSlide key={index}>
              <ProductCard product={product} />
            </StyledSlide>
          ))}
        <StyledButton next ref={navigationNextRef} title="Вперёд">
          Вперед
        </StyledButton>
        <StyledButton prew ref={navigationPrevRef} title="Назад">
          Назад
        </StyledButton>
      </StyledSlider>
    </StiledOrderRegistration>
  );
}
