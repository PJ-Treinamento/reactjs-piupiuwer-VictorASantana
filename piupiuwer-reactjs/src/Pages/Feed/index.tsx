import React from "react";
import { HeaderComponent, SideBarMenu, FeedSpaceComponent, MainComponent, HoneComponent, StrongComponent } from "./styles";

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
                            <img src="" alt="" />
                            <h2>Nome do usuario</h2>
                        </div>
                        <ul>
                            <li>Qualquer coisa</li>
                            <li>Qualquer coisa</li>
                            <li>Qualquer cosia</li>
                        </ul>
                    </SideBarMenu>
                    
                    <FeedSpaceComponent className="piusContainer">
                        <p>Alguma coisa
                        </p>
                    </FeedSpaceComponent>

                    <SideBarMenu>
                        <ul>
                            <li>Qualquer coisa</li>
                            <li>Qualquer coisa</li>
                            <li>Qualquer coisa</li>
                        </ul>
                    </SideBarMenu>
                </MainComponent>

                
                
            </div>
        </>
    );
}

export default Feed;