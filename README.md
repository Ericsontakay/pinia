# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

-----------------------------------------------------

# Sobre o Pinia X Provide/Inject

- ## Exemplos de solicitações ajax sem o pinia:

![img.png](img.png)

- ## Exemplos de solicitações ajax com pinia:

![img_1.png](img_1.png)

# Porque usar o Pinia:

- ## Porque usar Pinia ao inves de usar o PROVIDE/INJECT do VUE;

![img_2.png](img_2.png)

- ## No caso abaixo, teria que passar do pai para o filho, via props e subir o evento, para cada componente filho;

![img_3.png](img_3.png)

- ## A solução para o caso acima é jogar tudo pro Pinia, e evitar passar essas propriedades para dentro de cada componente;

![img_4.png](img_4.png)

- ## Compartilhar dados entre componentes não parentes;

![img_5.png](img_5.png)

- ## A gente vai usar o Pinia e todos os componentes vão utilizar os dados do Pinia;

![img_6.png](img_6.png)




