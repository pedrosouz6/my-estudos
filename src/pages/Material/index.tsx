import { useState, useEffect } from "react";
import { onValue, ref, database, auth, update } from '../../service/firebase';

import { Container } from "../../components/Container"; 
import { Header } from "../../components/Header"; 
import { Title } from "../../components/Title";

import { ModalAnimation } from "../../components/Modals/Animation/style";
import { ModalAddMaterial } from "../../components/Modals/AddMaterial";
import { ModalDeleteMaterial } from "../../components/Modals/DeleteMaterial";
import { ModalUpdateMaterial } from "../../components/Modals/UpdateMaterial";
import { ModalAddNotes } from "../../components/Modals/AddNotes";

import { useLoading } from "../../hooks/Loading";

import { BsPlusLg } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io'

import { 
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
    ButtonDeleteActionCardMaterial,
    ButtonNoteActionCardMaterial
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";

interface disciplineData {
    contentName: string,
    subjectName: string,
    studiedContent: boolean,
    key: string,
    note: string
}


export function Material() {

    const { ToggleLoading } = useLoading();
    const { ToggleErrorMessage, ToggleRenderErrorMessage, ToggleMessageModal } = useMessageModal();

    const [ keyUser, setKeyUser ] = useState<string | null>(null);

    const [ toggleModalAddMaterial, setToggleModalAddMaterial ] = useState<boolean>(false);
    const [ toggleModalDeleteMaterial, setToggleModalDeleteMaterial ] = useState<boolean>(false);
    const [ toggleModalUpdateMaterial, setToggleModalUpdateMaterial ] = useState<boolean>(false);
    const [ toggleModalAddNotes, setToggleModalAddNotes ] = useState<boolean>(false);

    const [ isRenderingModalAddMaterial, setIsRenderingModalAddMaterial ] = useState<boolean>(false);
    const [ isRenderingModalDeleteMaterial, setIsRenderingModalDeleteMaterial ] = useState<boolean>(false);
    const [ isRenderingModalUpdateMaterial, setIsRenderingModalUpdateMaterial ] = useState<boolean>(false);
    const [ isRenderingModalAddNotes, setIsRenderingModalAddNotes ] = useState<boolean>(false);


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

    function OpenModalAddNotes(key: string) {
        setKeyUser(key);
        setToggleModalAddNotes(true);
        setIsRenderingModalAddNotes(true);
    }

    function CloseModalAddNotes() {
        setIsRenderingModalAddNotes(false);

        setTimeout(() => {
            setToggleModalAddNotes(false);
        }, 300);
    }

    function ButtonCheckMaterial(key: string) {
        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            return auth.signOut();
        }

        const updates = {['discipline/' + `/${uidUser}/${key}/studiedContent`]: true};

        update(ref(database), updates)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Mat??ria estudada!');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Ocorreu um erro ao tentar atualizada a mat??ria!');
        })
    }

    useEffect(() => {
        ToggleLoading(true);
        
        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            auth.signOut();
        }

        const datasUser = ref(database, `discipline/${uidUser}`);

        onValue(datasUser, (snapshot) => {
            const datas = Object.entries<disciplineData>(snapshot.val() || []);
            
            const allDatas = datas.map(([key, item]) => {
                return {
                    contentName: item.contentName,
                    subjectName: item.subjectName,
                    studiedContent: item.studiedContent,
                    key: key,
                    note: item.note
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

            <ModalAnimation isRendering={isRenderingModalAddNotes}>
                { 
                    toggleModalAddNotes && keyUser &&
                    <ModalAddNotes
                        closeModalAddNotes={CloseModalAddNotes}
                        keyUser={keyUser}
                    /> 
                }
            </ModalAnimation>

            <Header />
            
            <ContainerMaterial>
                <Container>
                    <TitleAndAddMaterial>
                        <Title text="Mat??rias" />

                        <button
                            onClick={() => OpenModalAddMaterial()}
                        >
                            <i><BsPlusLg /></i> Adicionar
                        </button>
                    </TitleAndAddMaterial>

                    <AllCardsMaterial>
                        { 
                            disciplineData &&
                            disciplineData.length > 0 &&
                            disciplineData.map((item, key) => (
                                !item.studiedContent &&
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

                                        <ButtonCheckActionCardMaterial 
                                            onClick={() => ButtonCheckMaterial(item.key)}
                                        >
                                            <IoMdCheckboxOutline />
                                        </ButtonCheckActionCardMaterial>

                                        <ButtonDeleteActionCardMaterial 
                                            onClick={() => OpenModalDeleteMaterial(item.key)}
                                        >
                                            <AiFillDelete />
                                        </ButtonDeleteActionCardMaterial>

                                        <ButtonNoteActionCardMaterial 
                                            onClick={() => OpenModalAddNotes(item.key)}
                                        >
                                            <MdOutlineCollectionsBookmark /> 
                                            <span>{ item.note === '' ? '0 anota????es' : '1 anota????o' }</span>
                                        </ButtonNoteActionCardMaterial>
                                    </ActionsCardMaterial>

                                </CardsMaterial>
                            ))
                        }
                    </AllCardsMaterial>

                    {   disciplineData &&
                        disciplineData.length < 1 && 
                        <NoMatterMaterial>Nenhuma mat??ria foi adicionada at?? o momento!</NoMatterMaterial>
                    } 
                </Container>
            </ContainerMaterial>
        </>
    )
}