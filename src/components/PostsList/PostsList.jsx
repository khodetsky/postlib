import PropTypes from 'prop-types';

import { LinkStyled, List, PostDataContainer, PostText, PostTitle } from "./PostsList.styled";

export const PostsList = ({ posts, users}) => {

    return (
        <List>
            {(posts && users) && (
                posts.map(post => (
                    <li key={post.id}>
                        <LinkStyled to={`/comments/${post.id}`}>
                            <PostDataContainer>
                                <PostTitle>{post.title}</PostTitle>
                                <PostText>{post.body}</PostText>
                                <PostText>Post by {users[post.userId - 1].username}</PostText>
                            </PostDataContainer>
                        </LinkStyled>
                    </li>
                ))
            )}
        </List>
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object),
}
