import axios from "axios"

const BASE_URL = 'http://localhost:8090/api/v1/faqs'

class FaqServices {

    saveQuestion(Question) {
        return axios.post(BASE_URL, Question)
    }

    getAllQuestion() {
        return axios.get(BASE_URL)
    }

    deleteQuestion(id) {
        return axios.delete(BASE_URL + "/" + id)
    }

    getQuestionById(id){
        return axios.get(BASE_URL + "/" + id)
    }
}

export default new FaqServices()