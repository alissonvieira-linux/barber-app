import React, { useState, useEffect, useRef } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinderButton,
  ModalContainer,
  ModalTitle,
  ModalText,
  ModalButton,
  ModalButtonText,
  LoadingIcon,
  ListArea
} from './styles';

import { Modalize } from 'react-native-modalize';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import { Barbers } from './FakeBarbersList';
import BarberItem from '../../components/BarberItem';

export default function Home() {
  const navigation = useNavigation();
  const modalRef = useRef(null);

  const [refreshing, setRefreshing] = useState(false);
  const [locationText, setLocationText] = useState('');
  const [loading, setLoading] = useState(false);
  const [barberList, setBarberList] = useState([]);

  function onRefresh() {
    setRefreshing(false);
    setBarberList([...Barbers]);

    if (loading) {
      setLoading(false);
    }
  }

  function handleSearchButton() {
    navigation.navigate('Search');
  }

  async function handleLocationFinderButton() {
    setCoords(null);
    let permission = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        :
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if (permission == 'granted') {

    }
  }

  function handleOpenModal() {
    modalRef.current?.open();
  }

  function handleCloseModal() {
    modalRef.current?.close();
  }

  function handleFilterBarbers() {
    setBarberList([]);
    setLoading(true);
    const filtered = [];

    Barbers.map(barber => {
      if (barber.city === locationText) {
        filtered.push(barber);
      }
    });

    setLoading(false);
    setBarberList(filtered);
  }

  useEffect(() => {
    setBarberList([...Barbers]);
  },[])

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito.</HeaderTitle>
          <SearchButton onPress={handleSearchButton}>
            <SearchIcon height="26" width="26" fill="#fff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput 
            placeholder="Onde você está?"
            placeholderTextColor="#fff"
            value={locationText}
            onChangeText={text => setLocationText(text)}
          />

          <LocationFinderButton onPress={handleFilterBarbers}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinderButton>
        </LocationArea>

        {loading &&
          <LoadingIcon size="large" color="#fff" />
        }

        <ListArea>
          {
            barberList.map((item, key) => (
              <BarberItem key={key} data={item} />
            ))
          }

        </ListArea>

      </Scroller> 

      <Modalize
        ref={modalRef}
        snapPoint={200}
        modalHeight={200}
      >
        <ModalContainer>
          <ModalTitle>Ocorreu um problema</ModalTitle>
          <ModalText>Nossos serviços de geolocalização ainda estão indisponíveis. Por favor, digite o nome da sua cidade.</ModalText>
          <ModalButton onPress={handleCloseModal}>
            <ModalButtonText>Fechar</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modalize>    
    </Container>
  );
}