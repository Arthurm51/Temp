import axios from 'axios'

const api = axios.create({
    baseURL: `https://apiprevmet3.inmet.gov.br/previsao/`
})

export default api