import { useState } from "react";
import EachMaterial from "./EachMaterial";


const AllMaterials = () => {
  const materials = [
    { id: 'pe-polythene', name: 'PE(polythene)' ,content: 'content'},
    { id: 'pp-polyproplene', name: 'PP(polyproplene)' ,content: 'content'},
    { id: 'pvdf', name: 'PVDF' ,content: 'content'},
    { id: 'ectfe', name: 'ECTFE' ,content: 'content'},
    { id: 'fep', name: 'FEP' ,content: 'content'},
    { id: 'pfa', name: 'PFA' ,content: 'content'},
    { id: 'pvc', name: 'PVC' ,content: 'content'},
    { id: 'frp', name: 'FRP' ,content: 'content'},
    { id: 'ppr', name: 'PPR' ,content: 'content'},
    { id: 'pph', name: 'PPH' ,content: 'content'},
    { id: 'pph2222', name: 'PPH2222' ,content: 'content'},
  ];
  const [selected,setSelected]= useState(0)
  return (
    
    <div className=" flex gap-x-10 bg-gray-200 w-5/6  p-2 mx-auto mt-10 " >
      <div className="w-1/4 " >
      {materials.map((material,index) => (
        <div className=" border-b border-gray-400 py-1" key={material.id} onClick={()=>{
          setSelected(index)
        }}>
          <p
            className=" px-4 py-2 text-sm text-gray-700"
            
            
          >
            {material.name}
          </p>
        </div>
      ))}
      
      </div>
      <div className="w-3/4">
        <EachMaterial name={materials[selected].name} content={materials[selected].content}/>
      </div>
    </div>
  );
};


export default AllMaterials;


