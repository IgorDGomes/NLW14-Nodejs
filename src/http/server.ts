import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'

import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-polls'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
    secret: "unique-key",
    hook: 'onRequest'
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)


app.listen({port: 3333}).then(() => {
    console.log('HTTP server running!');
})

















// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
/*
    GET - Buscar Informação
    POST - Criar Informação
    PUT - Alterar Informação por completo
    DELETE - Apagar Informação
    PATCH - Alterar em um campo específico de um recurso
    HEAD - ??
    OPTIONS - ??
*/

// Driver nativo
// ORMs - Object Relational Mappers