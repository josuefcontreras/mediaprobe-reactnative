import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  Icon,
  ButtonGroup,
  SearchBar,
  Divider,
  Button,
} from 'react-native-elements';
import {getNews} from '../news';
import Article from './Article';
import Content from './Content';
import moment from 'moment';

export default ({navigation}) => {
  const buttons = ['headline', 'byline'];
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [fq, setFq] = useState('headline');
  const minSearchTermLength = 4;
  const aYearAgo = moment().subtract(1, 'year').format('YYYYMMDD');

  useEffect(async () => {
    if (searchTerm.length >= minSearchTermLength) {
      let data = await getNews({
        fq: `${fq}:("${searchTerm}")`,
        start_date: aYearAgo,
      });
      let filteredData = [];
      if (selectedFilter === 0) {
        filteredData = data.response.docs.filter(a =>
          a.headline.main
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()),
        );
      } else if (selectedFilter === 1) {
        console.log('FILTERING BY BYLINE');
        filteredData = data.response.docs.filter(a => {
          if (!a.byline.original) {
            return false;
          } else {
            return a.byline.original
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase());
          }
        });
      }
      setArticles(filteredData);
      setIsSearching(false);
    }
  }, [isSearching]);

  function onChangeTextHandler(text) {
    setSearchTerm(text);
  }

  function HandleButtonPress() {
    if (searchTerm.length > minSearchTermLength) {
      setIsSearching(true);
    }
  }
  return (
    <Content>
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={text => {
            onChangeTextHandler(text);
          }}
          value={searchTerm}
        />
        <View style={{paddingHorizontal: 10, paddingVertical: 30}}>
          <Text>Search by: </Text>
          <ButtonGroup
            buttons={buttons}
            containerStyle={{height: 50}}
            selectedIndex={selectedFilter}
            onPress={index => {
              setSelectedFilter(index);
              setFq(buttons[index]);
            }}
          />
          <Button
            title="Search"
            icon={{name: 'search', size: 35, color: 'white'}}
            onPress={HandleButtonPress}
            disabled={isSearching ? true : false}
          />
          <Divider />

          {isSearching ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            articles.map(a => (
              <Article article={a} key={a._id} navigation={navigation} />
            ))
          )}
        </View>
      </View>
    </Content>
  );
};
