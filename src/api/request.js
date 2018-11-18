const promiseEpizodesList = (date) => {
    return fetch("http://api.tvmaze.com/schedule?country=US&date=" + date.getFullYear() + '-' + ((date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1) ) + '-' + ((date.getDate()) < 10 ? '0' + (date.getDate()) : (date.getDate()) ))
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.log("ERROR:" + error);
            });
  }
  
const getEpizodesList = (date) => {
    const epizodesList = [];
    return promiseEpizodesList(date)
            .then(epizodes => {
              epizodes.forEach(epizode => {
                epizodesList.push(epizode)
              })
              return epizodesList
            })
            .catch((error) => {
              console.log("ERROR:" + error);
            });
  }

export default getEpizodesList;