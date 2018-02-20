import uuid from 'uuid/v4';//how to keep track of which versions to use and why?
import superagent from 'superagent';
let API = `${__API_URL__}/api/library`;

export const create = payload => store => {
  superagent.post(API)
    .send(payload)
    .then(res => store.dispatch(createBook(res.body)))
    .catch(console.error)
};

export const destroy = (payload) => ({
  type: 'BOOK_DELETE',
  payload,
});

const createBook = ({title, author, seriesName, seriesPosition}) => ({
  type: 'BOOK_CREATE',
  payload: {
    title,
    author,
    seriesName,
    seriesPosition,
    possess: true, 
    id: uuid(),
  },
});