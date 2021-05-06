import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Article from './Article';
import {getNews} from '../news';
import Content from './Content';
import moment from 'moment';
import {handelApiNull} from '../utils';

export default ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const aWeekAgo = moment().subtract(1, 'week').format('YYYYMMDD');

  useEffect(async () => {
    let data = await getNews({start_date: aWeekAgo});
    setArticles(handelApiNull(data));
    setLoading(false);
  }, []);

  return (
    <Content>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        articles.map(a => (
          <Article article={a} key={a._id} navigation={navigation} />
        ))
      )}
    </Content>
  );
};
