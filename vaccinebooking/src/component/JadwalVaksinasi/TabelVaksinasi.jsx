import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@mui/material";


const TabelVaksinasi = ({Number, nama, stock, jenis, waktu}) => {
    return (
        <div className="d-flex TabelJadwalVaksinasi justify-content-center p-0">
            <div className="col-1 ps-3">{Number}</div>
            <div className="col-3 ps-2">{nama}</div>
            <div className="col-2 ps-2">{stock}</div>
            <div className="col-3 ps-3">{jenis}</div>
            <div className="col-2 ps-1">{waktu} WIB</div>
            <div className="col-1 d-flex justify-content-center">
                <IconButton className="me-2">
                    <RiPencilFill />
                </IconButton>
                <IconButton className="me-2">
                    <MdDelete />
                </IconButton>
            </div>
        </div>
    );
};

export default TabelVaksinasi;

// ok