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

    static async topics() {
        let res = await this.request(`/topics`);
        return res.topic
    }

    static async addTopic(topic) {
        let res = await this.request(`/topics`, { topic }, "POST")
        return res.topic
        
    }
    
    static async editTopic(topic,id) {
        let res = await this.request(`/topics/${id}`, { topic }, "PATCH");
        return res.topic
    }
    
    static async deleteTopic(id) {
        let res = await this.request(`/topics/${id}`, {}, "DELETE");
        return res.topic
    }

    // Get all results
    static async results() {
        let res = await this.request(`/summary`);
        return res.result
    }
}

afterClassroomAPI.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYWNoZXIiLCJmaXJzdF9uYW1lIjoidGVhY2giLCJsYXN0X25hbWUiOiJlcnIiLCJlbWFpbCI6ImFrb0BlbWFpbC5jb20iLCJpc190ZWFjaGVyIjp0cnVlLCJpYXQiOjE2Mjc5NzIwMTV9.HU4fk3GIZoF2yNL-6zwSPZTFWB64JnY3Q1-y-6QHjmY'
export default afterClassroomAPI;