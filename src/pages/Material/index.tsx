import { useState, useEffect } from "react";
import { onValue, ref, database } from '../../service/firebase';

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
    ActionsCardMaterial,
    NoMatterMaterial
} from "./style";

interface disciplineData {
    contentName: string,
    subjectName: string
}

export function Material() {

    const [ toggleModalAddMaterial, setToggleModalAddMaterial ] = useState<boolean>(false);
    const [ isRenderingModalAddMaterial, setIsRenderingModalAddMaterial ] = useState<boolean>(false);

    const [ disciplineData, setDisciplineData ] = useState<disciplineData[]>([]);

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

    useEffect(() => {
        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            return console.log('removou o id')
        }

        const datasUser = ref(database, 'discipline/' + uidUser);

        onValue(datasUser, (snapshot) => {
            const datas = Object.entries<disciplineData>(snapshot.val() || []);
            
            const allDatas = datas.map(([uid, item]) => { return item });

            setDisciplineData(allDatas);
        })
    }, []);


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

                        { 
                            disciplineData &&
                            disciplineData.length > 0 &&
                            disciplineData.map((item, key) => (
                                <CardsMaterial key={key}>
                                    <TitleCardMaterial>{ item.subjectName }</TitleCardMaterial>

                                    <ContentCardMaterial>
                                        { item.contentName } 
                                    </ContentCardMaterial>

                                    <ActionsCardMaterial>
                                        <button><FiEdit /></button>
                                        <button><AiOutlineCheckSquare /></button>
                                        <button><AiFillDelete /></button>
                                    </ActionsCardMaterial>
                                </CardsMaterial>
                            ))
                            
                        }
                        
                    </AllCardsMaterial>

                    {
                        disciplineData.length < 1 && 
                        <NoMatterMaterial>Nenhuma matéria foi adicionada até o momento!</NoMatterMaterial>
                    } 
                </Container>
            </ContainerMaterial>
        </>
    )
}