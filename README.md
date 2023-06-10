# js-consumindo-dados-api

Repositório do treinamento "JavaScript: Consumindo e tratando dados de uma API" da Alura Cursos Online.

Síncrono ou Assíncrono?

- Sincrono - Uma tarefa é concluída após a outra

- Assíncrono - Há tarefas executadas em segundo plano

A assincronicidade em programação é o ato de executar uma tarefa em "segundo plano", para a execução das outras tarefas menores acontecerem enquanto a maior está sendo carregada, sem interromper o código.

Podemos destrinchar o fluxo de execução de tarefas em JavaScript em 3 partes.
Event Loop | Call Stack | Task Queue

Event Loop é um ciclo que monitora e executa as ações que mandamos para o JS
Call Stack é um mecanismo que organizar como irá funcionar o script quando existem muitas funções

- Qual está sendo executada
- Quais estão sendo chamadas dentro de alguma função

Task Queue é a fila de tarefas assincronas, se algo ocorre mais tarde, é nessa fila que a tarefa fica alocada.

Callbacks - Funções enviadas como parametros dentro de outra função

    - Callbacks são assíncronos, podem ser ativadas por algum fato pré-determinado, como um tempo específico, uma ação de usuário ou após a conclusão de alguma coisa

O que é uma API?

- Interface de Programação de Aplicações
  Permite que dois componentes se comuniquem entre si, geralmente um cliente e um servidor com a API entre esses componentes

O que é uma Promise?

- Pode ser resolvida ou Rejeitada
  -Permite que metodos assincronos se tornem sincronos
