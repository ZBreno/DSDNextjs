import ContainerMain from "@/components/ContainerMain";
import DetailsBook from "@/components/DetailsBook";

interface DetailsProps {
    id: string;
}

export default function Details({id}: DetailsProps){
    return (
        <ContainerMain>
            <DetailsBook/>
        </ContainerMain>
    )
}