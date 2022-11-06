

import axios from "axios";

const getData = async (Number) => {

    const {data: user} = await axios 
    (`https://jsonplaceholder.typicode.com/users/${Number}`);
    
     const {data : posts} = await axios 
     (`https://jsonplaceholder.typicode.com/users/${Number}`);
    
        console.log("user :",user);
        console.log("posts :", posts);

};

export default getData;