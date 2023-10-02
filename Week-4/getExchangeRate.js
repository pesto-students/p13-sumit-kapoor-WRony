async function getExchangeRate(currencyCode) { 
    try{
        const response = await fetch(`https://api.exchangerate.host/latest?base=${currencyCode}`);
        if(!response.ok){
            throw new Error("Unable to fetch data due to network issue");
        }
        const jsonData = await response.json();
        
        return jsonData.rates[currencyCode];
    }
    catch(error)
    {
        console.log('Error fetching exchange rate data =>' + error.message);
        return null;
    }
    
    }
    
    getExchangeRate('USD')
    .then((rate)=>{
        console.log(rate);
    })
    .catch((error)=>{
        console.log(error);
    });
    