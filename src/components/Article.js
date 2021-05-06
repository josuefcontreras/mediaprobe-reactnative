import React from 'react';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {Text, Card, Divider, Image} from 'react-native-elements';
import moment from 'moment';

export default ({article, navigation}) => {
  const {noteStyle, featuredTitleStyle, articleAbstract} = styles;
  const time = moment(article.pub_date || moment.now()).fromNow();
  const defaultImg =
    'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() => {
        navigation.navigate('ArticleDetails', {article});
      }}>
      <Card>
        <Image
          source={{
            uri:
              typeof article.multimedia[0] === 'undefined'
                ? defaultImg
                : `https://www.nytimes.com/${article.multimedia[0].url}`,
          }}
          style={{height: 200}}
        />
        <View style={{padding: 15}}>
          <Card.Title>{article.headline.main}</Card.Title>
          <Text style={articleAbstract}>
            {' '}
            {article.abstract || 'Read More..'}{' '}
          </Text>
          <Divider style={{backgroundColor: '#dfe6e9'}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={noteStyle}>{article.source.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 3,
  },
  articleAbstract: {
    marginBottom: 30,
    lineHeight: 30,
    textAlign: 'justify',
  },
});
