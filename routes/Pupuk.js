import express, { Router } from "express";

const router = express.Router();

const pupuk = [

    {
        nama:"Pupes",
        tahun_produksi:"2001",
        tahun_kadaluarsa:"2003",
        jenis:"Pupuk Kering"
    }

];

router.get("/", (req, res) =>{
    res.send(pupuk)
});
export default router;
