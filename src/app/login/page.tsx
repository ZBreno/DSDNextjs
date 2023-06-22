import Image from "next/image";
import style from "./style.module.css";
import InputForm from "@/components/Input";
import Button from "@/components/Button";

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.itemLeft}>
        <p>Compartilhe suas dicas de leitura com os seus amigos</p>
        <Image alt="logo" width={298} height={289} src={"/assets/logo.png"} />
      </div>
      <div className={style.itemRight}>
        <form className={style.form}>
          <InputForm placeholder="E-mail" />
          <InputForm placeholder="Senha" />
          <Button style={{ backgroundColor: '#43E8BE', color: 'white', width: 430 }}>
            <p>Entrar</p>
          </Button>
          <Button style={{ backgroundColor: 'white', color: '#43E8BE', width: 430 }}>
            <p>Esqueceu a senha</p>
          </Button>
          <Button style={{ backgroundColor: '#8239F2', color: 'white', width: 430 }}>
            <p>Criar nova conta</p>
          </Button>
        </form>
      </div>
    </div>
  );
}
