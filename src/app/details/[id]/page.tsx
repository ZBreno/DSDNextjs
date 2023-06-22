import ContainerMain from "@/components/ContainerMain";
import DetailsBook from "@/components/DetailsBook";

import { useRouter } from 'next/router'

interface DetailsProps {
    params: {
        id: string;
    }
}

export default function Details({params}: DetailsProps){

    return (
        <ContainerMain>
            <DetailsBook id={params.id}/>
        </ContainerMain>
    )
}