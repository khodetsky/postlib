import axios from 'axios';

    const HTTP_POSTS = 'https://jsonplaceholder.typicode.com/posts';
    const HTTP_USERS = 'https://jsonplaceholder.typicode.com/users';
    
    async function getPosts() {
        try {
            const response = await axios.get(`${HTTP_POSTS}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }   
    }
    
    export async function getUserPosts(userId) {
        try {
            const response = await axios.get(`${HTTP_POSTS}?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }   
    }
    
    export async function getUsers() {
        try {
            const response = await axios.get(`${HTTP_USERS}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }   
    }

    export async function getComments(postId) {
        try {
            const response = await axios.get(`${HTTP_POSTS}/${postId}/comments`);
            return response.data;
        } catch (error) {
            console.log(error)
        }   
    }
    
function returnTenRandomPosts(initArr, array) {
    // console.log(initArr)
        // console.log(array)
    
        let randomPosts = array.reduce((acc, post) => {
            let random = Math.floor(Math.random() * 8);

            if (acc.length < 10 && !acc.includes(post) && random === 2) {
                acc.push(post);
                return acc;
            } else {
                return acc;
            }
        }, initArr)

        while (randomPosts.length !== 10) {
            randomPosts = returnTenRandomPosts(randomPosts, array)
        }

        return randomPosts;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }
    
    export async function getRandomPosts() {
        try {
             return getPosts().then(resp => shuffle(returnTenRandomPosts([], resp)));
        } catch (error) {
          console.log(error)
      } 
    }