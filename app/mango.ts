import express,{Request, Response}  from "express"
const next = require("next")


type Routes = (request: Request, response: Response) => any
interface R{
    (request:Request, response:Response):any
}

const PORT = 3000
const dev = process.env.NODE_ENV !== "production"

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(()=>{
    const server  = express()

    server.get("*", (request,response):Routes => handle(request,response))

    server.listen(PORT, ():void =>{console.log("server started on port ", PORT)
    })
})