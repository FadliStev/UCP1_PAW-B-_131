const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.json(todos);});

const todos = [
    {
        id: 1,
        task:"Pupes",
        tahun_produksi:"2001",
        tahun_kadaluarsa:"2003",
        jenis:"Pupuk Kering",
        completed : false
    }
]

router.post("/", (req, res) => {
    const { task } = req.body;
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, task , completed: true};
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;

router.delete('/:id', (req, res)=>{
    const todoIndex = todos.findindex(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1) return res.status(404).json({message:'Tugas tidak ditemukan'});

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.status(200).json({message: `Tugas'${deletedTodo.task}' telah dihapus`});
});

router.put('/:id', (req,res)=>{
    router.put(':/id', (req,res)=>{
        const todo = todos.find(t=>t.id === parseInt(req.params.id));
        if(!todo) return res.status(404).json({message:'Tugas Tidak Ditemukan'});
        todo.nama = req.body.nama||todo.nama;
        todo.tahun_produksi = req.body.tahun_produksi||todo.tahun_produksi;
        todo.tahun_kadaluarsa = req.body.tahun_kadaluarsa||todo.tahun_kadaluarsa;
        todo.jenis = req.body.jenis||todo.jenis;

        res.status(200).json({
            message:`Tugas dengan ID ${todo.id} telah diperbarui`,
            updatedTodo:todo
        });
    });
});