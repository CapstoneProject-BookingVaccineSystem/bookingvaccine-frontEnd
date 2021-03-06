import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
// component
import FormKelolaJadwal from "../../component/KelolaJadwal/FormKelolaJadwal";
import Sidebar from "../../component/Sidebar/Sidebar";
import api from '../../API/data/post';
// style
import '../../assets/Style/style.css';

const JadwalVaksinasi = () => {
  // state and variable
  const [vacility, setVacility] = useState([]);

  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get(`/facility/user/${localStorage.getItem("id_users")}`, {
              headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`
              }})
            setVacility(response.data.data);
        } catch(err){
            console.log(err);
        }
    }
    fetchPosts();
},[])

console.log(vacility)
  return (
    <div>
      <div className="row me-5 ">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary title-das" >
          <div className="title-das ">
            <h4>Tambahkan</h4>
            <h1>Jadwal Vaksinasi - Fasilitas Kesehatan</h1>
          </div>
          <div className="bg-card-kelola text-light">
            <h5 >Silahkan Masukkan Data Sesuai dengan bagian yang telah di Sediakan</h5>
          </div>

          <Form className='bg-form-jadwal'>
           {vacility.map((data, index)=>{
            return(
              <FormKelolaJadwal 
                key={data.id_health_facilities} 
                data={data} 
                address={data.address_health_facilities} 
                maps={data.link_location} 
                category={data.category_mapped.category_facilities_name} 
                name={data.health_facilities_name}/>
              )
           })}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default JadwalVaksinasi
