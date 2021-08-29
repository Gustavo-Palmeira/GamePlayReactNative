import React from "react"
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Separator } from "../Separator";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import{
  Container,
  Content,
  Header,
  PlayersInfo,
  Player,
  Title,
  Category,
  Footer,
  DateInfo,
  Date,
} from './styles'
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string,
  name: string,
  icon: null,
  owner: boolean,
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest } : Props) {
  const [category] = categories.filter((item) => item.id === data.category)
  const { owner } = data.guild
  const { primary, online } = theme.colors

  console.log(category)

  return (
    <RectButton {...rest}>
      <Container>
          <GuildIcon />
          <Content>
            <Header>
              <Title>
                { data.guild.name }
              </Title>
              <Category>
                { category.title }
              </Category>
            </Header>

            <Footer>
              <DateInfo>
                <CalendarSvg />
                <Date>{ data.date }</Date>
              </DateInfo>
              <PlayersInfo>
                <PlayerSvg fill={ owner ? primary : online } />
                <Player style={{ color: owner ? primary : online }}> 
                  { owner ? 'Anfitrião' : 'Visitante' }
                </Player>
              </PlayersInfo>
            </Footer>

            <Separator />
          </Content>
      </Container>
    </RectButton>
  )
}