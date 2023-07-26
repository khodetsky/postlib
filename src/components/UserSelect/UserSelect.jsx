import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { FilterLabel, Select, Container } from "./UserSelect.styled";
import { getUserPosts, getRandomPosts } from '../../Api';

export const UserSelect = ({ users, setPosts, setStatus }) => {

    const initOption = {
        id: 0,
        username: 'All users'
    }

    const [options, setOptions] = useState([initOption]);

    useEffect(() => {
        if (users) {
            setOptions(prevState => [...prevState, ...users])
        }
    }, [users])

    function searchUserPosts(e) {
        setStatus('loading')
        const username = e.target.value;
        
        for (let user of users) {
            if (user.username === username) {
                getUserPosts(user.id).then(r => setPosts(r));
            } else if(username === initOption.username) {
                getRandomPosts().then(r => setPosts(r));
            }
        }
    }

    return (
        <Container>
            <FilterLabel id="users">Select a user</FilterLabel>
            <Select  htmlFor="users" onChange={searchUserPosts} >
                {options && (
                    options.map(option => (
                        <option key={option.id} >{option.username}</option>
                    ))
                )}
            </Select>
        </Container>
    )
}

UserSelect.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    setPosts: PropTypes.func,
    setStatus: PropTypes.func,
}