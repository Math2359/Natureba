import imagem_home from "/imagem_home.svg";
import imagem_joao from "/joao.jpg"

export function Welcome() {
  return (
    <main className="w-full">
      <section className="w-full grid grid-flow-col grid-cols-2 h-dvh" style={styles.homePage}>
        <div className="col-span-1 flex items-center justify-center">
          <div className="text-[#8B5A2B] flex flex-col text-[80px]/20 font-[Judson] m-0">
            <p><span className="text-[#3E7D4E]">na</span>tural</p>
            <p><span className="text-[#3E7D4E]">tu</span>rbinado</p>
            <p><span className="text-[#3E7D4E]">re</span>sponsável</p>
            <p><span className="text-[#3E7D4E]">ba</span>ratíssimo</p>
          </div>
        </div>
      </section>
      <section className="w-full" style={styles.sobreSection}>
        <div className="w-full h-full p-10 text-[white]" style={styles.sobre}>
          <h1 className="text-[30px]">Sobre nós</h1>
          <br />
          <p>
            Somos apaixonados por saúde, bem-estar e sustentabilidade. A <span className="font-[Judson] text-[20px]">natureba</span>, idealizada por João Silva, nasceu com o propósito de oferecer produtos naturais de alta qualidade para quem busca um estilo de vida mais equilibrado e consciente.
          </p>
          <p>
            Com anos de experiência no comércio de alimentos orgânicos, suplementos e cosméticos veganos, decidimos ir além do ponto físico e levar nossa loja para o ambiente digital — conectando você a um universo de opções saudáveis, com toda a praticidade e segurança das compras online.
          </p>
          <p>
            Aqui, cada produto é escolhido com cuidado, pensando no seu bem-estar e no impacto positivo que podemos gerar juntos no planeta. Valorizamos marcas éticas, ingredientes naturais e práticas sustentáveis.
          </p>
          <p>
            Além de um catálogo completo e atualizado, nossa loja virtual oferece uma navegação simples, formas de pagamento seguras, opções de frete ou retirada na loja e um blog com conteúdos inspiradores sobre vida saudável, nutrição e autocuidado.
          </p>
          <p>
            Seja bem-vindo(a) à nossa comunidade. Sinta-se em casa para explorar, descobrir e transformar sua rotina com escolhas mais saudáveis!
          </p>
        </div>
      </section>
    </main>
  );
}

const styles = {
  homePage: {
    backgroundImage: `url(${imagem_home})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "auto 90%"
  },
  textoHome: {
    fontSize: "80px",
    fontFamily: 'Judson',
    color: '#8B5A2B'
  },
  sobreSection: {
    backgroundImage: `url(${imagem_joao})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },

  sobre: {
    background: "rgba(62, 125, 78, 0.7)"
  }
}
