import { useState, useEffect } from "react";
import { onValue, ref, database, auth } from '../../service/firebase';

import { Container } from "../../components/Container"; 
import { Header } from "../../components/Header"; 
import { Title } from "../../components/Title";

import { ModalAnimation } from "../../components/Modals/Animation/style";
import { ModalAddMaterial } from "../../components/Modals/AddMaterial";
import { ModalDeleteMaterial } from "../../components/Modals/DeleteMaterial";
import { ModalUpdateMaterial } from "../../components/Modals/UpdateMaterial";

import { useLoading } from "../../hooks/Loading";

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
    NoMatterMaterial,
    ButtonEditActionCardMaterial,
    ButtonCheckActionCardMaterial,
    ButtonDeleteActionCardMaterial
} from "./style";

interface disciplineData {
    contentName: string,
    subjectName: string,
    key: string
}

export function Material() {

    const { ToggleLoading } = useLoading();

    const [ keyUser, setKeyUser ] = useState<string | null>(null);

    const [ toggleModalAddMaterial, setToggleModalAddMaterial ] = useState<boolean>(false);
    const [ toggleModalDeleteMaterial, setToggleModalDeleteMaterial ] = useState<boolean>(false);
    const [ toggleModalUpdateMaterial, setToggleModalUpdateMaterial ] = useState<boolean>(false);

    const [ isRenderingModalAddMaterial, setIsRenderingModalAddMaterial ] = useState<boolean>(false);
    const [ isRenderingModalDeleteMaterial, setIsRenderingModalDeleteMaterial ] = useState<boolean>(false);
    const [ isRenderingModalUpdateMaterial, setIsRenderingModalUpdateMaterial ] = useState<boolean>(false);


    const [ disciplineData, setDisciplineData ] = useState<disciplineData[] | null>(null);

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

    function OpenModalDeleteMaterial(key: string) {
        setKeyUser(key);
        setToggleModalDeleteMaterial(true);
        setIsRenderingModalDeleteMaterial(true);
    }

    function CloseModalDeleteMaterial() {
        setIsRenderingModalDeleteMaterial(false);

        setTimeout(() => {
            setToggleModalDeleteMaterial(false);
        }, 300);
    }

    function OpenModalUpdateMaterial(key: string) {
        setKeyUser(key);
        setToggleModalUpdateMaterial(true);
        setIsRenderingModalUpdateMaterial(true);
    }

    function CloseModalUpdateMaterial() {
        setIsRenderingModalUpdateMaterial(false);

        setTimeout(() => {
            setToggleModalUpdateMaterial(false);
        }, 300);
    }

    useEffect(() => {
        ToggleLoading(true);
        
        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            auth.signOut();
        }

        const datasUser = ref(database, 'discipline/' + uidUser);

        onValue(datasUser, (snapshot) => {
            const datas = Object.entries<disciplineData>(snapshot.val() || []);
            
            const allDatas = datas.map(([key, item]) => {
                return {
                    contentName: item.contentName,
                    subjectName: item.subjectName,
                    key: key
                }
            });

            ToggleLoading(false);
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

            <ModalAnimation isRendering={isRenderingModalDeleteMaterial}>
                { 
                    toggleModalDeleteMaterial && keyUser &&
                    <ModalDeleteMaterial 
                        closeModalDeleteMaterial={CloseModalDeleteMaterial}
                        keyUser={keyUser}
                    /> 
                }
            </ModalAnimation>

            <ModalAnimation isRendering={isRenderingModalUpdateMaterial}>
                { 
                    toggleModalUpdateMaterial && keyUser &&
                    <ModalUpdateMaterial
                        closeModalUpdateMaterial={CloseModalUpdateMaterial}
                        keyUser={keyUser}
                    /> 
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
                                        <ButtonEditActionCardMaterial 
                                            onClick={() => OpenModalUpdateMaterial(item.key)}
                                        >
                                            <FiEdit />
                                        </ButtonEditActionCardMaterial>

                                        <ButtonCheckActionCardMaterial>
                                            <AiOutlineCheckSquare />
                                        </ButtonCheckActionCardMaterial>

                                        <ButtonDeleteActionCardMaterial 
                                            onClick={() => OpenModalDeleteMaterial(item.key)}
                                        >
                                            <AiFillDelete />
                                        </ButtonDeleteActionCardMaterial>
                                    </ActionsCardMaterial>

                                </CardsMaterial>
                            ))
                        }
                    </AllCardsMaterial>

                    {   disciplineData &&
                        disciplineData.length < 1 && 
                        <NoMatterMaterial>Nenhuma matéria foi adicionada até o momento!</NoMatterMaterial>
                    } 
                </Container>
            </ContainerMaterial>
        </>
    )
}