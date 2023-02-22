import { ContainerLoading } from "./style";

export function Loading() {
    return (
        <ContainerLoading>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </ContainerLoading>
    )
}