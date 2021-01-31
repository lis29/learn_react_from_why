import axios from 'axios';
import originAxios from 'axios';

export default function request(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:9001/',
      timeout: 10000
    });


    instance(option).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};