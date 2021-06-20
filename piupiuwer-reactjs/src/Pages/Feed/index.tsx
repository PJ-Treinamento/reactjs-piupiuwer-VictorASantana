import React from "react";
import { HeaderComponent, SideBarMenu, FeedSpaceComponent, MainComponent, HoneComponent, StrongComponent } from "./styles";
import { Link } from "react-router-dom";
import AvatarImg from "../../Assests/Images/undraw_male_avatar_323b.svg";
import Post from "../../Components/NewPost";

function Feed(){
    return(
        <>
            <div className="feedBody">
                <HeaderComponent className="feedHeader">
                    <HoneComponent className="feedTitle">
                        <StrongComponent>P</StrongComponent>iu<StrongComponent>P</StrongComponent>iuwer
                    </HoneComponent>
                    <Link to="/login" className="login">
                        <p>Página de Login</p>
                    </Link>
                </HeaderComponent>
                <MainComponent className="feedMain">
                    <SideBarMenu className="sideBarMenu">
                        <div>
                            <img src={AvatarImg} className="userProfilePhoto" alt="avatar"/>
                            <h2>Nome do usuario</h2>
                        </div>
                        <ul>
                            <li><h3 className="sideBarMenuTitle">Grupos</h3></li>
                            <li className="liItem">Qualquer coisa</li>
                            <li className="liItem">Qualquer coisa</li>
                            <li className="liItem">Qualquer cosia</li>

                        </ul>
                        <ul>
                            <li><h3 className="sideBarMenuTitle">Seguindo</h3></li>
                            <li className="liItem">Qualquer coisa</li>
                            <li className="liItem">Qualquer coisa</li>
                            <li className="liItem">Qualquer cosia</li>
                        </ul>
                    </SideBarMenu>
                    
                    <FeedSpaceComponent className="piusContainer">
                        <div className="newPiu">
                            <Post/>
                        </div>
                        
                        <div className="postContainer">
                            <p>Alguma coisa</p>
                        </div>
                    </FeedSpaceComponent>

                    <SideBarMenu className="leftSide">
                        
                    </SideBarMenu>
                </MainComponent>

                
                
            </div>
        </>
    );
}

export default Feed;