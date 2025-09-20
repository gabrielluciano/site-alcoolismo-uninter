# 🍷 Conscientização e Prevenção: Impactos do Alcoolismo no Brasil

## 📋 Sobre o Projeto

Este projeto é um site educativo desenvolvido como atividade extensionista universitária, focado na **conscientização e prevenção dos impactos do alcoolismo no Brasil**, com ênfase especial na juventude. O site apresenta dados estatísticos oficiais, ferramentas interativas e recursos educacionais para informar sobre os riscos do consumo abusivo de álcool.

## 🎯 Objetivos

- **Conscientizar** sobre os impactos sociais e de saúde do alcoolismo no Brasil
- **Educar** jovens e adultos sobre os riscos do consumo abusivo de álcool
- **Fornecer dados** estatísticos atualizados e confiáveis
- **Oferecer ferramentas** de autoavaliação de risco
- **Promover** a prevenção através de informação de qualidade
- **Disponibilizar** recursos para busca de ajuda profissional

## 🌟 Funcionalidades

### 📊 Visualização de Dados

- **Gráficos interativos** com dados oficiais do Ministério da Saúde
- **Estatísticas em tempo real** sobre mortalidade relacionada ao álcool
- **Comparativos por faixa etária** e gênero
- **Evolução temporal** das internações por dependência

### 🧮 Calculadora de Risco

- **Teste AUDIT** (Alcohol Use Disorders Identification Test)
- **Avaliação personalizada** do nível de risco
- **Recomendações específicas** baseadas na pontuação
- **Interface intuitiva** e responsiva

### 📱 Recursos Interativos

- **Contador dinâmico** de mortes por hora no Brasil
- **Navegação suave** entre seções
- **Animações** e efeitos visuais
- **Funcionalidade de impressão** para compartilhamento

### 🎨 Design Responsivo

- **Interface moderna** e acessível
- **Compatibilidade** com dispositivos móveis
- **Tipografia otimizada** para leitura
- **Cores e ícones** intuitivos

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS
- **JavaScript ES6+** - Funcionalidades interativas
- **Chart.js** - Visualização de dados
- **Font Awesome** - Ícones

### Ferramentas de Desenvolvimento

- **Vite** - Build tool e servidor de desenvolvimento
- **Prettier** - Formatação de código
- **Git** - Controle de versão

### Fontes de Dados

- **Vigitel 2023** (Ministério da Saúde)
- **Fiocruz** - Panorama do Álcool 2024
- **DATASUS/SIH** - Sistema de Informações Hospitalares
- **CISA** - Centro de Informações sobre Saúde e Álcool

## 📁 Estrutura do Projeto

```
project/
├── index.html              # Página principal
├── package.json            # Dependências e scripts
├── src/
│   ├── css/
│   │   ├── reset.css       # Reset de estilos
│   │   ├── variables.css   # Variáveis CSS
│   │   └── style.css       # Estilos principais
│   ├── js/
│   │   ├── animations.js   # Animações e efeitos
│   │   ├── calculator.js   # Calculadora de risco
│   │   ├── calculator-config.js # Configurações do teste AUDIT
│   │   ├── chart-config.js # Configurações dos gráficos
│   │   ├── charts.js       # Inicialização dos gráficos
│   │   ├── menu.js         # Navegação mobile
│   │   └── print.js        # Funcionalidade de impressão
│   └── main.js             # Arquivo principal JavaScript
├── dist/                   # Arquivos de produção (gerados)
└── public/                 # Recursos estáticos
```

## Como Executar

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até o diretório
cd project

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Produção

```bash
# Gere os arquivos de produção
npm run build

# Visualize a versão de produção
npm run preview
```

## 🔧 Funcionalidades Técnicas

### Gráficos Interativos

- Consumo abusivo por faixa etária
- Mortes relacionadas ao álcool por gênero
- Evolução das internações (2015-2023)

### Calculadora AUDIT

- 10 questões padronizadas
- Pontuação automática
- Classificação de risco (Baixo, Moderado, Alto, Muito Alto)
- Recomendações personalizadas

### Animações

- Fade-in para elementos
- Contador animado
- Efeitos de hover
- Transições suaves

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

## 🎨 Paleta de Cores

- **Primária**: Tons de azul para confiabilidade
- **Secundária**: Vermelho para alertas
- **Neutras**: Cinzas para texto e backgrounds
- **Acentos**: Verde e laranja para destaques

## 📈 Métricas de Impacto

O projeto visa:

- **Educar** sobre os riscos do alcoolismo
- **Reduzir** o consumo abusivo entre jovens
- **Promover** a busca por ajuda profissional
- **Conscientizar** sobre políticas públicas

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de conscientização pública.

---

**Desenvolvido para conscientização e prevenção do alcoolismo no Brasil**

_Este projeto utiliza dados oficiais de órgãos governamentais e instituições de pesquisa reconhecidas para garantir a veracidade e relevância das informações apresentadas._
