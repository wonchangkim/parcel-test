import './index.scss'
import moment from 'moment';



const timeEl = document.querySelector('.time');
setInterval(() => {
timeEl.textContent = moment()
  .format('LTS');
},1000);

