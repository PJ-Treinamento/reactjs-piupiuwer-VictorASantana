import React from "react";
import { HeaderComponent, SideBarMenu, FeedSpaceComponent, MainComponent, HoneComponent, StrongComponent } from "./styles";
import AvatarImg from "../../Assests/Images/undraw_male_avatar_323b.svg";


function Feed(){
    return(
        <>
            <div className="feedBody">
                <HeaderComponent className="feedHeader">
                    <HoneComponent className="feedTitle">
                        <StrongComponent>P</StrongComponent>iu<StrongComponent>P</StrongComponent>iuwer
                    </HoneComponent>
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
                        <p>Alguma coisa
                        </p>
                    </FeedSpaceComponent>

                    <SideBarMenu className="leftSide">
                        
                    </SideBarMenu>
                </MainComponent>

                
                
            </div>
        </>
    );
}

export default Feed;