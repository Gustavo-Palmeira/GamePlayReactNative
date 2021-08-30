import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { appointments } from './appointments'

import { Container, Header, Content, Appointments } from './styles'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </Header>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <Content>
          <ListHeader 
            title="Partidas agendadas"
            subtitle="Total 7"
          />
          <Appointments
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </Container>
    </Background>
  )
}