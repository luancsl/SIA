import _ from 'lodash';

const obj = {
    vo: {
        p: 'sddd',
        z: 'ala'
    },
    t: 2
}

if(!_.get(obj, 'vo')){
    console.log("sim")
}else{
    console.log("nao foi")
}

console.log('s: ', _.get(obj, 'vo.p') ? true : false)