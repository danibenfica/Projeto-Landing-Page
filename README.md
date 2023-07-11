![lp-_online-video-cutter com_](https://github.com/danibenfica/projeto-landing-page/assets/103818625/c53391a7-a4a5-4339-a63f-243c812d7b1e)


# Projeto Landing Page

[Link do projeto online aqui!](https://projeto-landing-page-liard.vercel.app/)

Este é um projeto de uma página web para a Escola DNC, que visa fornecer informações sobre seus cursos de tecnologia e permitir que os usuários se inscrevam em um curso gratuito de Introdução à Tecnologia. O projeto inclui um carrossel de depoimentos de alunos, um vídeo explicativo, informações sobre os cursos e um formulário de inscrição.
É uma landing page simples, e serve com o intuito de aprender princípios básicos do funcionamento do HTML, CSS e JavaScript.

## Funcionalidades

- Exibição de um menu superior com logotipo e texto informativo sobre os cursos.
- Exibição de um menu informativo com detalhes sobre os cursos, como certificado de conclusão, duração do conteúdo e aulas online gravadas.
- Inclusão de um vídeo explicativo sobre a escola e seus cursos.
- Carrossel de depoimentos de alunos, onde é possível visualizar diferentes comentários com a opção de rolar para a esquerda ou direita.
- Formulário de inscrição com campos para nome, e-mail e telefone, além de um botão para enviar a inscrição.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- HTML: Utilizado para estruturar o conteúdo e elementos da página.
- CSS: Utilizado para estilizar e posicionar os elementos da página.
- JavaScript: Utilizado para controlar a funcionalidade do carrossel de depoimentos.

## Funcionalidade do Carrossel

O carrossel de depoimentos é controlado por duas funções:

### Função `rolarParaDireita()`

A função `rolarParaDireita()` é responsável por controlar a ação de rolagem para a direita no carrossel de depoimentos. Quando chamada, ela realiza as seguintes ações:

1. Oculta o comentário do Leonardo, definindo a propriedade `display` do elemento `Leonardo` como `'none'`.
2. Exibe o comentário da Bruna, definindo a propriedade `display` do elemento `Bruna` como `'flex'`.
3. Exibe a seta esquerda, definindo a propriedade `display` do elemento `setaEsquerda` como `'flex'`.
4. Ajusta o espaçamento superior da seta esquerda, definindo a propriedade `marginTop` do elemento `setaEsquerda` como `'55px'`.
5. Oculta a seta direita, definindo a propriedade `display` do elemento `setaDireita` como `'none'`.

```
function rolarParaDireita () {
    Leonardo.style.display = 'none'
    Bruna.style.display = 'flex'
    setaEsquerda.style.display = 'flex'
    setaEsquerda.style.marginTop = '55px'
    setaDireita.style.display = 'none'
}
```

### Função `rolarParaEsquerda()`

A função `rolarParaEsquerda()` é responsável por controlar a ação de rolagem para a esquerda no carrossel de depoimentos. Quando chamada, ela realiza as seguintes ações:

1. Exibe o comentário do Leonardo, definindo a propriedade `display` do elemento `Leonardo` como `'flex'`.
2. Oculta o comentário da Bruna, definindo a propriedade `display` do elemento `Bruna` como `'none'`.
3. Oculta a seta esquerda, definindo a propriedade `display` do elemento `setaEsquerda` como `'none'`.
4. Exibe a seta direita, definindo a propriedade `display` do elemento `setaDireita` como `'flex'`.
5. Ajusta o espaçamento superior da seta direita, definindo a propriedade `marginTop` do elemento `setaDireita` como `'55px'`.

```
function rolarParaEsquerda () {
    Leonardo.style.display = 'flex'
    Bruna.style.display = 'none'
    setaEsquerda.style.display = 'none'
    setaDireita.style.display = 'flex'
    setaDireita.style.marginTop = '55px'
    
}
```

Essas funções são responsáveis por controlar a navegação do carrossel de depoimentos, alternando entre os comentários do Leonardo e da Bruna.

## Formulário

A seção do formulário permite que os usuários acessem a ementa em pdf após o usuário enviar seus dados.

O formulário possui:

- Campo de texto para o nome do usuário: Os usuários devem inserir seu nome neste campo. O campo é marcado como obrigatório (atributo `required`) para garantir que o nome seja fornecido antes de enviar o formulário.
- Campo de e-mail: Os usuários devem inserir seu endereço de e-mail neste campo. O campo também é marcado como obrigatório (atributo `required`) para garantir que um e-mail válido seja fornecido.
- Campo de telefone: Este campo é opcional e permite que os usuários insiram seu número de telefone, se desejado.
- Campo oculto para "Created": Este campo é usado para enviar a data e hora atual como parte dos dados do formulário. Ele é preenchido automaticamente com o valor "x-sheetmonkey-current-date-time", que é interpretado pela API de destino do formulário.

Além dos campos, o formulário contém um botão "Acesse a ementa grátis". Quando os usuários preenchem os campos e clicam neste botão, os dados são enviados para a URL especificada no atributo `action` do formulário. Neste caso, a URL de destino é "https://api.sheetmonkey.io/form/wrLSXSZP4L66a4Qx5foaKM" e o método de envio é POST.

O formulário permite que os usuários se inscrevam facilmente no curso gratuito, fornecendo suas informações pessoais relevantes. Ao enviar o formulário, eles serão registrados e poderão acessar a ementa grátis do curso.

## Conclusão

Este projeto de página web foi desenvolvido para a Escola DNCs com o objetivo de fornecer informações sobre seus cursos de tecnologia e permitir que os usuários se inscrevam em um curso gratuito de Introdução à Tecnologia. Ele utiliza HTML, CSS e JavaScript para criar uma experiência interativa e informativa para os visitantes.

Qualquer dúvida ou melhoria, não hesite em me contatar! :smile:
