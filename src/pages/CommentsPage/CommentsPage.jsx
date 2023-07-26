import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { GoBackBtn } from '../../components/GoBackBtn/GoBackBtn';
import { HeaderDataBox, Title, Section, List, CommentDataContainer, CommentTitle, CommentText } from "./CommentsPage.styled";
import { getComments } from "../../Api";
import { Loader } from "../../components/Loader";

export const CommentsPage = () => {
    const { postId } = useParams();

    const [status, setStatus] = useState("loading");
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getComments(postId).then(r => { setComments(r); setStatus('done')})
    }, [postId])
    
    return (
        <>
            <Header>
                <HeaderDataBox>
                    <GoBackBtn />
                    <Title>Comments for post #{postId}</Title>
                </HeaderDataBox>
            </Header>
            <Section>
                {status === "done" && (
                    <List>
                        {comments && (
                            comments.map(comment => {
                                const splitUsername = comment.email.split('@')
                                return (
                                <li key={comment.id}>
                                    <CommentDataContainer>
                                        <CommentTitle>{comment.name}</CommentTitle>
                                        <CommentText>{comment.body}</CommentText>
                                        <CommentText>Commentary added by {splitUsername[0]}</CommentText>
                                    </CommentDataContainer>
                                </li>
                            )
                            })
                        )}
                    </List>
                )}

                {status === "loading" && (<Loader />)}
            </Section>
        </>
    )
}