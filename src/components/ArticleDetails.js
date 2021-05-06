import React from 'react';
import { View, StyleSheet  } from 'react-native';
import { Text, Card, Divider, Image  } from 'react-native-elements';
import moment from 'moment';
import Content  from './Content'; 

export default ({route, navigation}) => {
    const { article } = route.params;
    const { noteStyle, featuredTitleStyle, articleParagraph } = styles;
    const time = moment(article.pub_date || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
    
      return ( 
        <Content>
                <Image
                    source={{ uri: typeof article.multimedia[0] ===  "undefined" ? defaultImg  : `https://www.nytimes.com/${article.multimedia[0].url}` }}
                    style={{ height: 250 }}    
                />
                <View style={{padding: 35}}>
                    <Card.Title>{article.headline.main}</Card.Title>
                  <Text>{article.byline.original} </Text>
                  <Text style={noteStyle}>Publised: {time}</Text>
                  <Divider style={{ backgroundColor: '#dfe6e9' }} />
                  <Text style={articleParagraph}>
                    {article.lead_paragraph}
                  </Text>
                <Divider style={{ backgroundColor: '#dfe6e9' }} />
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                  <Text style={noteStyle}>{article.source.toUpperCase()}</Text>
                </View>
                </View>
            </Content>
        );
} 

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  articleParagraph:{
    fontSize: 18,
    marginBottom: 30,
    lineHeight: 30,
    textAlign: 'justify'
}
});