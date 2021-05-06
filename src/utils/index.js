export const handelApiNull = data => {
  let articles = [...data.response.docs];
  let newArticles = JSON.parse(
    JSON.stringify(articles).replace(/\:null/gi, ':""'),
  );
  console.log('>>>>>>>>>>>>>>>>>>>>', newArticles);
  return newArticles;
};
