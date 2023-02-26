import { useState, useEffect } from "react";
import { onValue, ref, database, auth, update } from '../../service/firebase';

import { Container } from "../../components/Container"; 
import { Header } from "../../components/Header"; 
import { Title } from "../../components/Title";

import { ModalAnimation } from "../../components/Modals/Animation/style";
import { ModalAddMaterial } from "../../components/Modals/AddMaterial";
import { ModalDeleteMaterial } from "../../components/Modals/DeleteMaterial";
import { ModalUpdateMaterial } from "../../components/Modals/UpdateMaterial";

import { useLoading } from "../../hooks/Loading";

import { FiEdit } from 'react-icons/fi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { IoMdCheckbox } from 'react-icons/io';

import { 
    AiOutlineCheckSquare,
    AiFillDelete
} from 'react-icons/ai';

import { 
    ContainerStudied, 
    TitleAndAddStudied,
    AllCardsStudied,
    CardsStudied,
    TitleCardStudied,
    ContentCardStudied,
    ActionsCardStudied,
    NoMatterStudied,
    ButtonEditActionCardStudied,
    ButtonCheckActionCardStudied,
    ButtonDeleteActionCardStudied,
    ButtonNoteActionCardMaterial
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";
import { ModalAddNotes } from "../../components/Modals/AddNotes";

interface disciplineData {
    contentName: string,
    subjectName: string,
    studiedContent: boolean,
    key: string,
    note: string
}

export function Studied() {

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

    function ButtonCancelCheckMaterial(key: string) {
        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            return auth.signOut();
        }

        const updates = {['discipline/' + `/${uidUser}/${key}/studiedContent`]: false};

        update(ref(database), updates)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Matéria estudada foi removida!');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Ocorreu um erro ao tentar atualizada a matéria!');
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
            
            <ContainerStudied>
                <Container>
                    <TitleAndAddStudied>
                        <Title text="Matérias Já Estudadas" />
                    </TitleAndAddStudied>

                    <AllCardsStudied>
                        { 
                            disciplineData &&
                            disciplineData.length > 0 &&
                            disciplineData.map((item, key) => (
                                item.studiedContent && 
                                <CardsStudied key={key}>
                                    <TitleCardStudied>{ item.subjectName }</TitleCardStudied>

                                    <ContentCardStudied>
                                        { item.contentName } 
                                    </ContentCardStudied>

                                    <ActionsCardStudied>
                                        <ButtonEditActionCardStudied 
                                            onClick={() => OpenModalUpdateMaterial(item.key)}
                                        >
                                            <FiEdit />
                                        </ButtonEditActionCardStudied>

                                        <ButtonCheckActionCardStudied
                                            onClick={() => ButtonCancelCheckMaterial(item.key)}
                                        >
                                            <IoMdCheckbox />
                                        </ButtonCheckActionCardStudied>

                                        <ButtonDeleteActionCardStudied 
                                            onClick={() => OpenModalDeleteMaterial(item.key)}
                                        >
                                            <AiFillDelete />
                                        </ButtonDeleteActionCardStudied>

                                        <ButtonNoteActionCardMaterial 
                                            onClick={() => OpenModalAddNotes(item.key)}
                                        >
                                            <MdOutlineCollectionsBookmark /> 
                                            <span>{ item.note === '' ? '0 anotações' : '1 anotação' }</span>
                                        </ButtonNoteActionCardMaterial>
                                    </ActionsCardStudied>

                                </CardsStudied>
                            ))
                        }
                    </AllCardsStudied>

                    {   disciplineData &&
                        disciplineData.length < 1 && 
                        <NoMatterStudied>Você não classificou nenhuma matéria como estudada!</NoMatterStudied>
                    }
                </Container>
            </ContainerStudied>
        </>
    )
}