import Header from './components/Header';
import jwbLogoImage from './assets/jwb_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={jwbLogoImage} alt="Jbw Comercio de Alimentos - Pizza A Bessa" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Jbw Comercio de Alimentos</h1>
          <h2 className="text-2xl mb-8">05.258.526/0001-90</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer pizzas artesanais de qualidade superior com sabor autêntico e excelência no atendimento, proporcionando experiências gastronômicas únicas aos nossos clientes. Com mais de 23 anos de tradição no mercado, buscamos superar as expectativas através de ingredientes frescos, receitas especiais e atendimento personalizado, sempre com paixão e comprometimento. Nossa missão é levar o melhor da pizza artesanal para sua mesa, criando momentos especiais e sabores inesquecíveis."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/pizzaabessa/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Jbw Comercio de Alimentos LTDA</strong>, conhecida como <strong className="font-bold">Pizza A Bessa</strong>, registrada sob o CNPJ <strong className="font-bold">05.258.526/0001-90</strong>, foi fundada em <strong className="font-bold">26 de agosto de 2002</strong>, na cidade de <strong className="font-bold">Brasília, Distrito Federal</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">comércio de alimentos</strong>, oferecendo produtos que unem <strong className="font-bold">tradição, qualidade e sabor autêntico</strong> para proporcionar experiências gastronômicas únicas aos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Comércio Varejista de Produtos Alimentícios (CNAE 47.21-1-03)</strong>, abrangendo desde ingredientes frescos até pizzas artesanais que levam o sabor autêntico para sua mesa. Com mais de <strong className="font-bold">23 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">qualidade dos ingredientes, receitas especiais e atendimento familiar</strong>, sempre buscando proporcionar momentos especiais através da gastronomia.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada no <strong className="font-bold">Setor de Habitações Coletivas Sul Q 214 Bloco C Loja 40, Asa Sul, Brasília-DF (CEP 70293-530)</strong>, nossa pizzaria é referência no bairro e região, proporcionando uma experiência gastronômica completa e autêntica. Valorizamos a <strong className="font-bold">tradição, a qualidade e a satisfação do cliente</strong>, garantindo que cada pizza seja preparada com excelência e carinho.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Pizza A Bessa</strong>, acreditamos que <strong className="font-bold">a boa pizza reflete o amor de quem a prepara</strong>. Por isso, nosso compromisso vai além da venda de alimentos: queremos criar momentos especiais através da <strong className="font-bold">autenticidade, tradição e sabor</strong>, seja para uma refeição em família, um encontro com amigos ou uma celebração especial.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Pizzas Artesanais</strong> – Receitas tradicionais italianas que combinam <strong className="font-bold">ingredientes frescos, massa artesanal e sabor autêntico</strong>.</li>
            <li><strong className="font-bold">Massas e Molhos</strong> – Variedade de massas frescas e molhos caseiros preparados com receitas familiares.</li>
            <li><strong className="font-bold">Produtos Importados</strong> – Ingredientes e especialidades diretamente da Itália para sua mesa.</li>
            <li><strong className="font-bold">Atendimento Familiar</strong> – Experiência gastronômica completa com o carinho e tradição da família italiana.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> L. Tavazza Comercio de Alimentos LTDA</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> La Fornacella</li>
            <li><strong className="font-bold">CNPJ:</strong> 09.626.241/0001-15</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 13/06/2008</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 01/01/2022</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 13/06/2008</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 10.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (DF):</strong> 07.123.456-1</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Quadra SHC/Norte CL Quadra 312 Bloco B Lojas 02, 43 Térreo, S/N, Asa Norte, Brasília-DF, <strong className="font-bold">CEP 70765-520</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">La Fornacella</strong>, estamos prontos para proporcionar a você <strong className="font-bold">uma experiência gastronômica autêntica</strong>. Visite nossa pizzaria e descubra como <strong className="font-bold">a tradição italiana pode transformar sua refeição em um momento especial!</strong> 🍕✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Arg Comercio de Variedades LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 46.916.984/0001-56</p>
          <p className="text-sm"><strong>Razão Social:</strong> ARG COMERCIO DE VARIEDADES LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 27/06/2022</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 32.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> 1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA</p>
          <p className="text-sm"><strong>CEP:</strong> 68148-000</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Facilitando seu dia a dia com variedade e qualidade desde 2022</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Arg Comercio de Variedades LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 46.916.984/0001-56</p>
          <p className="text-sm"><strong>Endereço:</strong> 1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA, CEP 68148-000</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa loja.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências de produtos e necessidades de compra.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, consulta de produtos e confirmação de entregas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Arg Comércio de Variedades. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

