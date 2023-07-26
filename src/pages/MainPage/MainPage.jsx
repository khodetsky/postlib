import { useState, useEffect } from 'react';

import { Header } from "../../components/Header/Header";
import logoIcon from "../../images/logo.webp";
import { LogoContainer, LogoImg, Section, ContentBox } from "./MainPage.styled";
import { UserSelect } from "../../components/UserSelect/UserSelect";
import { Loader } from "../../components/Loader";
import { PostsList } from "../../components/PostsList/PostsList";
import { getRandomPosts, getUsers } from "../../Api";

export const MainPage = () => {
    const [status, setStatus] = useState("loading");
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getRandomPosts().then(r => setPosts(r));
        getUsers().then(r => setUsers(r));

    }, [])

    useEffect(() => {
        if (posts) {
            setStatus("done")
        }
    }, [posts])


    return (
        <>
            <Header>
                <LogoContainer>
                    <LogoImg src={logoIcon} alt='логотип'/>
                </LogoContainer>
            </Header>
            <Section>
                <UserSelect users={users} setPosts={setPosts} setStatus={setStatus} />

                {status === "done" && (
                    <ContentBox>
                        <PostsList posts={posts} users={users} />
                    </ContentBox>
                )}
                
                {status === "loading" && (<Loader />)}
            </Section>
        </>
    )
}