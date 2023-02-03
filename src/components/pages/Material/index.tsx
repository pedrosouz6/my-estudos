import { Container } from "../../Container";
import { Header } from "../../Header";
import { Title } from "../../Title";

import { 
    ContainerMaterial, 
    TitleAndAddMaterial,
    AllCardsMaterial,
    CardsMaterial
} from "./style";

export function Material() {
    return (
        <>
            <Header />
            <ContainerMaterial>
                <Container>
                    <TitleAndAddMaterial>
                        <Title text="Matérias" />

                        <button>Adicionar matéria</button>
                    </TitleAndAddMaterial>

                    <AllCardsMaterial>
                        <CardsMaterial></CardsMaterial>
                        <CardsMaterial></CardsMaterial>
                        <CardsMaterial></CardsMaterial>
                        <CardsMaterial></CardsMaterial>
                    </AllCardsMaterial>
                </Container>
            </ContainerMaterial>
        </>
    )
}