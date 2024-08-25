# Projeto-1
### **Descrição do Projeto**
Este projeto é uma aplicação de To-Do List interativa que permite ao usuário gerenciar suas tarefas de forma dinâmica e organizada. Com uma interface moderna e responsiva, a aplicação oferece funcionalidades essenciais como adicionar, editar, excluir e marcar tarefas como concluídas. Além disso, permite filtrar as tarefas por status (todas, pendentes, concluídas) e mantém os dados salvos localmente para que a lista persista mesmo após recarregar a página.

### **Instruções de Como Executar a Aplicação**
1. **Clone o Repositório ou Baixe os Arquivos:**
   - Clone o projeto ou baixe os arquivos para o seu ambiente local.

   ```bash
   git clone <link-do-repositório>
   ```

2. **Instale o TypeScript (se necessário):**
   - Caso não tenha o TypeScript instalado globalmente, instale-o com o comando:

   ```bash
   npm install -g typescript
   ```

3. **Compile o Arquivo TypeScript:**
   - Navegue até a pasta do projeto e compile o arquivo TypeScript (`script.ts`) para JavaScript:

   ```bash
   tsc script.ts
   ```

4. **Abra o Arquivo HTML no Navegador:**
   - Após a compilação, abra o arquivo `index.html` no seu navegador para visualizar e interagir com a aplicação.

### **Tecnologias Utilizadas**
1. **HTML5**: Estrutura básica da interface da aplicação.
2. **CSS3**: Estilização responsiva e moderna, garantindo boa experiência em diferentes dispositivos.
3. **TypeScript**: Implementação da lógica e manipulação dinâmica do DOM com segurança de tipos.
4. **localStorage**: Persistência dos dados localmente, permitindo que as tarefas sejam salvas mesmo após recarregar a página.

### **Possíveis Melhorias Futuras**
1. **Autenticação e Sincronização com Backend:**
   - Adicionar uma API para salvar tarefas no servidor, permitindo que o usuário acesse sua lista em diferentes dispositivos.

2. **Categorias e Prioridades:**
   - Incluir a opção de categorizar tarefas ou definir prioridades (baixa, média, alta) para um gerenciamento mais detalhado.

3. **Animações e Feedback Visual:**
   - Adicionar animações para transições de tarefas e notificações visuais, tornando a experiência mais fluida e interativa.

4. **Modo Escuro:**
   - Implementar um tema escuro, permitindo que o usuário alterne entre modos claro e escuro.
