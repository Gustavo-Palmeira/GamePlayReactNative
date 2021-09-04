import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

import Header from '../../components/Header'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { InputSmall } from '../../components/InputSmall'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import Guilds from '../Guilds'
import { GuildProps } from '../../components/Guild'

import { Container, CategoryLabel, Label, Form, Select, SelectImage, SelectBody, ArrowIcon, Field, FieldContent, Column, Divider, LabelBox, TextLimit, Submit } from './styles'

export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const handleGuildsModal = () => {
    setOpenGuildsModal(!openGuildsModal)
  }

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect)
    setOpenGuildsModal(!openGuildsModal)
  }

  return (
    <Background>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Container>
            <Header 
              title="Agendar Partida"
            />

            <CategoryLabel>Categoria</CategoryLabel>
            <CategorySelect
              hasCheckBox={false}
              categorySelected={category}
              setCategory={setCategory}
            />

            <Form>
              <RectButton onPress={handleGuildsModal}>
                <Select>
                  <SelectImage>
                    {guild.icon && <GuildIcon />}
                  </SelectImage>
                  <SelectBody>
                    <Label>{guild.name ? guild.name : 'Selecione um servidor'}</Label>
                  </SelectBody>
                  <ArrowIcon />
                </Select>
              </RectButton>

              <Field>
                <FieldContent>
                  <Label>Dia e mês</Label>
                  <Column>
                    <InputSmall maxLength={2} />
                      <Divider>/</Divider>
                    <InputSmall maxLength={2} />
                  </Column>
                </FieldContent>
                <FieldContent>
                  <Label>Hora</Label>
                  <Column>
                    <InputSmall maxLength={2} />
                      <Divider>:</Divider>
                    <InputSmall maxLength={2} />
                  </Column>
                </FieldContent>
              </Field>

              <LabelBox>
                <Label>Descrição</Label>
                <TextLimit>Max 100 caracteres</TextLimit>
              </LabelBox>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />

              <Submit>
                <Button title='Agendar' />
              </Submit>
            </Form>
          </Container>
        </ScrollView>

        <Modal visible={openGuildsModal}>
          <Guilds handleGuildSelect={handleGuildSelect}/>
        </Modal>
      </KeyboardAvoidingView>
    </Background>
  )
}
