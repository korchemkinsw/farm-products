import React, { useState } from "react";
import { Ul, Li } from "/src/components/styled/index";

import ChoiseProduct from "/src/components/ui/choise-product/choise-product";

export default function CheckBoxList({
  fields, //массив полей
  selected, //массив выбранных элементов
  onChange,
  onClickField,
}) {
  const updSelectList = (value) => {
    const newSelected = [...selected];
    const indexValue = newSelected.indexOf(value);

    if (indexValue !== -1) {
      newSelected.splice(indexValue, 1);
    } else {
      newSelected.push(value);
    }
    onChange && onChange(newSelected);
  };
  return (
    <Ul>
      {fields &&
        fields.length &&
        fields.map((field, index) => (
          <Li key={index}>
            <ChoiseProduct
              product={field}
              selected={selected}
              onClick={(value) => onClickField(value, index)}
              onChange={updSelectList}
            />
          </Li>
        ))}
    </Ul>
  );
}
