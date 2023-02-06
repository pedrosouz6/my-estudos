import { useState } from "react";

import { Container } from "../../components/Container"; 
import { Header } from "../../components/Header"; 
import { Title } from "../../components/Title";

import { ModalAnimation } from "../../components/Modals/Animation/style";
import { ModalAddMaterial } from "../../components/Modals/AddMaterial";

import { BsPlusLg } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { 
    AiOutlineCheckSquare,
    AiFillDelete
} from 'react-icons/ai';

import { 
    ContainerMaterial, 
    TitleAndAddMaterial,
    AllCardsMaterial,
    CardsMaterial,
    TitleCardMaterial,
    ContentCardMaterial,
    ActionsCardMaterial
} from "./style";

export function Material() {

    const [ toggleModalAddMaterial, setToggleModalAddMaterial ] = useState<boolean>(false);
    const [ isRenderingModalAddMaterial, setIsRenderingModalAddMaterial ] = useState<boolean>(false);

    function OpenModalAddMaterial() {
        setToggleModalAddMaterial(true);
        setIsRenderingModalAddMaterial(true);
    }

    function CloseModalAddMaterial() {
        setIsRenderingModalAddMaterial(false);

        setTimeout(() => {
            setToggleModalAddMaterial(false);
        }, 300);
    }

    return (
        <>
            <ModalAnimation isRendering={isRenderingModalAddMaterial}>
                { 
                    toggleModalAddMaterial && 
                    <ModalAddMaterial closeModalAddMaterial={CloseModalAddMaterial} /> 
                }
            </ModalAnimation>

            <Header />
            <ContainerMaterial>
                <Container>
                    <TitleAndAddMaterial>
                        <Title text="Matérias" />

                        <button
                            onClick={() => OpenModalAddMaterial()}
                        >
                            <i><BsPlusLg /></i> Adicionar Matéria
                        </button>
                    </TitleAndAddMaterial>

                    <AllCardsMaterial>
                        <CardsMaterial>
                            <TitleCardMaterial>Matemática</TitleCardMaterial>

                            <ContentCardMaterial>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </ContentCardMaterial>

                            <ActionsCardMaterial>
                                <button><FiEdit /></button>
                                <button><AiOutlineCheckSquare /></button>
                                <button><AiFillDelete /></button>
                            </ActionsCardMaterial>
                        </CardsMaterial>

                         <CardsMaterial>
                            <TitleCardMaterial>Física</TitleCardMaterial>

                            <ContentCardMaterial>
                                Lorem ipsum, dolor sit amet consectetur 
                            </ContentCardMaterial>

                            <ActionsCardMaterial>
                                <button><FiEdit /></button>
                                <button><AiOutlineCheckSquare /></button>
                                <button><AiFillDelete /></button>
                            </ActionsCardMaterial>
                        </CardsMaterial>
                        <CardsMaterial>
                            <TitleCardMaterial>Educação Física</TitleCardMaterial>

                            <ContentCardMaterial>
                                Lorem ipsum dolor sit amet
                            </ContentCardMaterial>

                            <ActionsCardMaterial>
                                <button><FiEdit /></button>
                                <button><AiOutlineCheckSquare /></button>
                                <button><AiFillDelete /></button>
                            </ActionsCardMaterial>
                        </CardsMaterial>
                    </AllCardsMaterial>
                </Container>
            </ContainerMaterial>
        </>
    )
}