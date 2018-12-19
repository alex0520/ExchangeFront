import {apiUrl} from "../constants/environment";


export const exchangeCurrency = (fromCurrency, toCurrency, value) =>
    fetch(`${apiUrl}/exchange`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"fromCurrency": fromCurrency,"toCurrency": toCurrency,"value": value})
    })
        .then(data => {
            return data.text()
        })
        .then(jsonText => {
            return {
                error: false,
                result: JSON.parse(jsonText)
            };
        } )
        .catch(error => {
            return {
                error: true,
                result: error
            };
        });