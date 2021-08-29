import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Container, Content, Check, Checked, Title } from "./styles";

type CategoryProps = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>,
  hasCheckBox?: boolean, 
  checked?: boolean,
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = true,
  ...rest
} : CategoryProps) {
  return (
    <RectButton {...rest}>
      <Container>
        <Content checked={checked}>
          {checked 
            ? hasCheckBox && <Checked />
            : hasCheckBox && <Check />
          }
          <Icon width={48} height={48} />
          <Title>{ title }</Title>
        </Content>
      </Container>
    </RectButton>
  );
}
