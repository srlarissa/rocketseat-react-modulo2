import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>
          <CountDownContainer>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
          </CountDownContainer>
          <button type="submit">
            <Play size={24}/>
            Começar
          </button>
      </form>
    </HomeContainer>
  )
}
