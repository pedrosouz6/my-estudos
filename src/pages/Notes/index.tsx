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
import { IoMdCheckbox, IoMdCheckboxOutline } from 'react-icons/io';

import { AiFillDelete } from 'react-icons/ai';

import { 
    ContainerNotes, 
    TitleAndAddNotes,
    AllCardsNotes,
    CardsNotes,
    TitleCardNotes,
    ContentCardNotes,
    ActionsCardNotes,
    NoMatterNotes,
    ButtonEditActionCardNotes,
    ButtonCheckActionCardNotes,
    ButtonDeleteActionCardNotes
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";

interface disciplineData {
    contentName: string,
    subjectName: string,
    studiedContent: boolean,
    key: string,
    note: string
}


export function Notes() {

    const { ToggleLoading } = useLoading();
    const { ToggleErrorMessage, ToggleRenderErrorMessage, ToggleMessageModal } = useMessageModal();

    const [ keyUser, setKeyUser ] = useState<string | null>(null);

    const [ toggleModalAddMaterial, setToggleModalAddMaterial ] = useState<boolean>(false);
    const [ toggleModalDeleteMaterial, setToggleModalDeleteMaterial ] = useState<boolean>(false);
    const [ toggleModalUpdateMaterial, setToggleModalUpdateMaterial ] = useState<boolean>(false);

    const [ isRenderingModalAddMaterial, setIsRenderingModalAddMaterial ] = useState<boolean>(false);
    const [ isRenderingModalDeleteMaterial, setIsRenderingModalDeleteMaterial ] = useState<boolean>(false);
    const [ isRenderingModalUpdateMaterial, setIsRenderingModalUpdateMaterial ] = useState<boolean>(false);


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
            ToggleMessageModal('A matéria foi adicionada como estudada!');
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

            <Header />
            
            <ContainerNotes>
                <Container>
                    <TitleAndAddNotes>
                        <Title text="Anotações" />
                    </TitleAndAddNotes>

                    <AllCardsNotes>
                        { 
                            disciplineData &&
                            disciplineData.length > 0 &&
                            disciplineData.map((item, key) => (
                                item.note === '' ? '' 
                                :
                                <CardsNotes key={key}>
                                    <TitleCardNotes>Matéria: <span>{ item.subjectName }</span></TitleCardNotes>
                                    <TitleCardNotes>Conteúdo: <span>{ item.contentName }</span></TitleCardNotes>

                                    <ContentCardNotes>
                                        <b>Anotação: </b>
                                        { item.note } 
                                    </ContentCardNotes>

                                    <ActionsCardNotes>
                                        <ButtonCheckActionCardNotes
                                            studiedContent={item.studiedContent}
                                            onClick={() => ButtonCheckMaterial(item.key)}
                                        >
                                            { 
                                                item.studiedContent ? 
                                                <IoMdCheckbox /> :
                                                <IoMdCheckboxOutline />
                                            }
                                            
                                        </ButtonCheckActionCardNotes>

                                        <ButtonDeleteActionCardNotes 
                                            onClick={() => OpenModalDeleteMaterial(item.key)}
                                        >
                                            <AiFillDelete />
                                        </ButtonDeleteActionCardNotes>
                                    </ActionsCardNotes>

                                </CardsNotes>
                            ))
                        }
                    </AllCardsNotes>

                    {   disciplineData &&
                        disciplineData.length < 1 && 
                        <NoMatterNotes>Você ainda não fez nenhuma anotação!</NoMatterNotes>
                    }
                </Container>
            </ContainerNotes>
        </>
    )
}