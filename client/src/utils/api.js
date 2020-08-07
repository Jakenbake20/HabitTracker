import axios from "axios"
export default {
    signup: function(userdata){
        return axios.post("/register", userdata)
    },

    signin: function(userdata){
        return axios.post("/login", userdata)
    },

    logout: function(){
        return axios.get("/logout")
    },

    getCurrentUser: function(){
        return axios.get("/user")
    }
}