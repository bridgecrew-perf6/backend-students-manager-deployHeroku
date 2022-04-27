import app from './app';
import { connect } from 'mongoose';

connect("mongodb+srv://ruanvsrateira:Senac123@cluster0.l8sdn.mongodb.net/StudentDatabase?retryWrites=true&w=majority").then(() => {
    console.log("MONGOOSE READY")
    app.emit("DATABASE_ON");
});

app.on("DATABASE_ON", () => {
    app.listen(3333, () => console.log("Servidor Rodando ..."));
});
