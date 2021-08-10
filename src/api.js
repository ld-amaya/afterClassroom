import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

class afterClassroomAPI{
    static token;

    static async request(endpoint, data = {}, method = "get") {
        const url = `${BASE_URL}${endpoint}`;
        //Attach token to header
        const headers = { Authorization: `Bearer ${afterClassroomAPI.token}` };
        const params = (method === "get") ? data : {};
        try {
            return (await axios({url,method,data,params,headers})).data;
        } catch (err) {
            console.error("API Error:", err);
            let errs = err.response.data.error.message;
            // Check if errs is n array
            throw Array.isArray(errs) ? errs : [errs];
        }
    }

    static async login(data) {
        let res = await this.request(`/auth/login`, { data }, "POST")
        return res.token;
    }

    static async signup(data) {
        let res = await this.request(`/auth/register`, { data }, "POST")
        return res.token
    }

    static async topics() {
        let res = await this.request(`/topics`);
        return res.topic
    }

    static async addTopic(topic) {
        let res = await this.request(`/topics`, { topic }, "POST")
        return res.topic
        
    }
    
    static async editTopic(topic, id) {
        let res = await this.request(`/topics/${id}`, { topic }, "PATCH");
        return res.topic
    }
    
    static async deleteTopic(id) {
        let res = await this.request(`/topics/${id}`, {}, "DELETE");
        return res.topic
    }

    static async getQuestion(id) {
        let res = await this.request(`/questions/${id}`);
        return res.question[0]
    }

    static async addQuestion(data) {
        let res = await this.request(`/questions`, { data }, "POST")
        return res.question
    }

    static async updateQuestion(data, id) {
        let res = await this.request(`/questions/${id}`, { data }, "PATCH");
        return res.question[0];
    }
    static async topicQuestions(topic) {
        let res = await this.request(`/questions/topic/${topic}`)
        return res.questions;
    }

    static async deleteQuestion(id) {
        let res = await this.request(`/questions/${id}`, {}, "DELETE");
        return res.result
    }

    static async createExam(username, topic) {
        let res = await this.request(`/exam/student/${username}/topic/${topic}`, {}, "POST");
        return res.exam_id
    }

    static async getExamNum(username,examID, num) {
        let res = await this.request(`/exam/student/${username}/exam/${examID}/${num}`)
        return res.question
    }

    static async saveAnswer(username, examID, num, answer) {
        let res = await this.request(`/exam/student/${username}/exam/${examID}/${num}`, { answer }, "PATCH")
        return res.answer
    }

    static async finishExam(username, examID) {
        let res = await this.request(`/exam/student/${username}/exam/${examID}/finished`, {}, "PATCH")
        return res.result
    }
    // Get all results
    static async results() {
        let res = await this.request(`/summary`);
        return res.result
    }
    static async resultsUser(user) {
        let res = await this.request(`/summary/student/${user}`);
        return res.result;
    }
}

// afterClassroomAPI.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYWNoZXIiLCJmaXJzdF9uYW1lIjoidGVhY2giLCJsYXN0X25hbWUiOiJlcnIiLCJlbWFpbCI6ImFrb0BlbWFpbC5jb20iLCJpc190ZWFjaGVyIjp0cnVlLCJpYXQiOjE2Mjc5NzIwMTV9.HU4fk3GIZoF2yNL-6zwSPZTFWB64JnY3Q1-y-6QHjmY'
// afterClassroomAPI.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiZmlyc3RfbmFtZSI6IlRlc3QiLCJsYXN0X25hbWUiOiJVc2VyIiwiZW1haWwiOiJsb3VhbWF5YUBtZS5jb20iLCJpc190ZWFjaGVyIjpmYWxzZSwiaWF0IjoxNjI4NDE3MzkwfQ.0KvTQY-87H4_iGXjkkX7cTY9MZZy7ExvboC6iHH_y9w'
export default afterClassroomAPI;