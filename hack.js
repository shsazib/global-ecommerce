// https://yoori.spagreen.net/get/country-list
// https://yoori.spagreen.net/state/by-country/4
// https://yoori.spagreen.net/city/by-state/1119
 const axios = require('axios')
 const _ = require('lodash')
 const fs = require('fs')

 let data = {}
async function hackMaster() {
    let res = await axios.get('https://yoori.spagreen.net/get/country-list').then(res => res.data);
    data.countries = res.countries;
    for(let i=0; i<=data.countries.length; i++) {
        if (data.countries[i]) {
            let { states } = await axios.get(`https://yoori.spagreen.net/state/by-country/${data.countries[i].id}`).then(res => res.data);
            data.countries[i].states = states;
        }
    }
    // let state = await axios.get('https://yoori.spagreen.net/state/by-country/4').then(res => res.data);
    // let city = await axios.get('https://yoori.spagreen.net/city/by-state/1119').then(res => res.data);
    
}
(async ()=> {
    await hackMaster()
    fs.writeFileSync(__dirname+'/op.json', JSON.stringify(data))
})()
