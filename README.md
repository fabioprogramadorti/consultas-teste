<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionamento-da-api">Funcionamento</a> • 
 <a href="#-autor">Autor</a> • 
</p>


# https://consultas-frontend.vercel.app/

## 💻 Sobre o projeto

 Este projeto é feito utilizando Node, Next.js e Mongodb. O banco de dados estará rodando na nuvem na plataforma Atlas do MongoDB. Junto ao projeto foi enviado um arquivo do Insomnia para testar a API.

---


## 🎲 Funcionamento da API

## Criando Consulta

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{
      "paciente": "Fulano",
      "medico": "Ciclano",
      "data": "2021-04-02" 
    }' \
  https://consultas-api.herokuapp.com/consultas

```

## Listando consultas
```bash
curl --header "Content-Type: application/json" \
  --request GET \
  https://consultas-api.herokuapp.com/consultas

```

## Atualizando Consulta

```bash
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{
      "paciente": "Fulano",
      "medico": "Ciclano",
      "data": "2021-04-02" 
    }' \
  https://consultas-api.herokuapp.com/consultas/[id] #id da consulta
```

## Consulta por ID

```bash
curl --header "Content-Type: application/json" \
  --request GET \
  https://consultas-api.herokuapp.com/consultas/[id] #id da consulta
```

## Deletando uma consulta

```bash
curl --header "Content-Type: application/json" \
  --request DELETE \
  https://consultas-api.herokuapp.com/consultas/[id] #id da consulta
```

## Criando Médico

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{
      "nome": "Fulano"
    }' \
  https://consultas-api.herokuapp.com/medicos

```
## Listando Médicos

```bash
curl --header "Content-Type: application/json" \
  --request GET \
  https://consultas-api.herokuapp.com/medicos

```

## Médico por id

```bash
curl --header "Content-Type: application/json" \
  --request GET \
  https://consultas-api.herokuapp.com/medicos/[id] #id do médico
```

## Atualizando Médicos

```bash
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{
      "nome": "Outro nome"
    }' \
  https://consultas-api.herokuapp.com/medicos/[id] # id do médico

```

## Deletando Médico

```bash
curl --header "Content-Type: application/json" \
  --request DELETE \
  https://consultas-api.herokuapp.com/medicos/[id] #id do médico

```

---

## 🦸 Autor

<a href="https://github.com/fabioprogramadorti">
 <img style="border-radius: 50%;" src="./img/fabio.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Fabio Santos</b></sub></a> <a href="https://github.com/fabioprogramadorti" title="Rocketseat">🚀</a>
 <br />

[![Gmail Badge](https://img.shields.io/badge/-fabioprogramadorti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fabioprogramadorti@gmail.com)](mailto:fabioprogramadorti@gmail.com)
