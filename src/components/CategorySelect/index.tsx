import React from "react";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { Container } from "./styles";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void
  hasCheckBox?: boolean
};

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false } : CategorySelectProps) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
}
