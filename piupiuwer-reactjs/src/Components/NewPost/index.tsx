import React from "react";
import { PostComponent, ButtonPostComponent } from "./styles";

function Post(){
    return(
        <PostComponent>
            <ul className="Nonerrors"></ul>
            <p id="validate"></p>
            <textarea name="Novo-Piu" id="newPiu" cols={30} rows={3} placeholder="Sobre o que você quer piar hoje?"></textarea>
            <ButtonPostComponent className="post" id="nPiu">Piar</ButtonPostComponent>
        </PostComponent>
    );
}

export default Post;