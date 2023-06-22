import { SearchIcon } from 'lucide-react'
import style from './style.module.scss'
import Button from '../Button'

export function SearchBar(){
    return (
    <form className={style.form}>
        <input type="text" placeholder="Pesquisar"/>
        <Button style={{backgroundColor: '#8239F2'}}>
            <SearchIcon width={30} height={30} color='white'/>
        </Button>
    </form>
    )
}