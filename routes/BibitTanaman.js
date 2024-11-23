import express, { Router } from "express";

const router = express.Router();

const bibit = [

    {
        id: 1,
        nama_tanaman: "Padi",
        jenis: "Briyani",
        kota_suplier: "Jakarta",
        tgl_masuk: 18,
        bulan_masuk: 3,
        tahun_masuk: 20024
        

    }

];

router.get("/", (req, res) => {
    res.send(bibit);
});
export default router;