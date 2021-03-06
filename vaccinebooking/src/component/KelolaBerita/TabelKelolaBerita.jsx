import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import api from '../../API/data/post';
import moment from 'moment';
import { useState } from "react";
import HapusDialogBerita from "../HapusDialog/HapusDialogBerita";
import Swal from "sweetalert2";

const TabelKelolaBerita = ({ 
  Number,
  id,  
  title, 
  tanggal, 
  author, 
  content
}) => {
  //state and variable
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  //function
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate=(e)=>{
    e.preventDefault();
    navigate("/EditArtikel", 
    {state:{
      id : id, 
      judul: title, 
      penulis: author, 
      content: content
    }});
  }

  const handleDetele=(e)=>{
    e.preventDefault();
    try {
      api.delete(`/news/${id}`, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        window.location.reload();
    })
    } 
    catch(err){
      Swal.fire({
        icon: 'error',
      })
    }
  }
  
  
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child title-das">
      <div className="col-1">{Number}</div>
      <div className="col-4">{title}</div>
      <div className="col-2">{author}</div>
      <div className="col-4">{moment(tanggal).format('DD/MM/YYYY')}</div>
      <div className="col-1 d-flex justify-content-center PointerClikCss ">
        <IconButton onClick={handleNavigate} aria-label="Check" data-bs-toggle="tooltip" data-bs-placement="top" title="edit" className="PointerClikCss">
          <RiPencilFill   />
        </IconButton>
        <IconButton onClick={handleClickOpen} aria-label="Cancel" data-bs-toggle="tooltip" data-bs-placement="top" title="remove">
          <MdDelete  />
        </IconButton>
      </div>
      <HapusDialogBerita key={id} open={open} handleClose={handleClose} handleSubmit={handleDetele}></HapusDialogBerita>
    </div>
  );
};

export default TabelKelolaBerita;