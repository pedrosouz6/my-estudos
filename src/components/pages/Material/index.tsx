import { Container } from "../../Container";
import { Header } from "../../Header";
import { Title } from "../../Title";

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
    return (
        <>
            <Header />
            <ContainerMaterial>
                <Container>
                    <TitleAndAddMaterial>
                        <Title text="Matérias" />

                        <button><i><BsPlusLg /></i> Adicionar Matéria</button>
                    </TitleAndAddMaterial>

                    <AllCardsMaterial>
                        <CardsMaterial>
                            <TitleCardMaterial>Matematica</TitleCardMaterial>

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
                            <TitleCardMaterial>Fisica</TitleCardMaterial>

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
                            <TitleCardMaterial>Edicao fisica</TitleCardMaterial>

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