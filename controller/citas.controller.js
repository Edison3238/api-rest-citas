const { db } = require("../cnn")

const getMedicos =async (req,res)=>{
    const response = await db.any('select * from medico where med_estado=true')
    res.json(response)
}

const getMedicosById =async (req,res)=>{
    const {med_cedula}=req.body
    const response = await db.any(`select * from medico 
    where med_estado=true and med_cedula=$1`,[med_cedula])
    res.json(response)
}

const postCreateMedico =async (req,res)=>{
    const {med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado}=req.body
    const response = await db.any(`INSERT INTO medico (med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado) 
    values($1,$2,$3,$4,$5,$6,true)`,[med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado])
    res.json({
        message:'Medico creado correctamente',
        body:{
            med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado
        }
    })
}

const putUpdateMedico =async (req,res)=>{
    const {med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado}=req.body
    const response = await db.any(`UPDATE medico set med_nombres=$2,med_apellidos=$3,med_telefono=$4,med_direccion=$5,med_correo=$6,med_estado=$7
    where med_cedula=$1`,[med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado])
    res.json({
        message:'Medico actualizada correctamente',
        body:{
            med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado
        }
    })
}

const deleteMedico =async (req,res)=>{
    const {med_cedula}=req.query
    const response = await db.any(`UPDATE medico set med_estado=false  
    where med_cedula=$1`,[med_cedula])
    res.json({
        message:'Medico eliminado correctamente',
        body:{
            med_cedula
        }
    })
}

const getPacientes =async (req,res)=>{
    const response = await db.any('select * from paciente where pac_estado=true')
    res.json(response)
}

const getPacientesById =async (req,res)=>{
    const {pac_cedula}=req.body
    const response = await db.any(`select * from paciente 
    where pac_estado=true and pac_cedula=$1`,[pac_cedula])
    res.json(response)
}

const postCreatePaciente =async (req,res)=>{
    const {pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado}=req.body
    const response = await db.any(`INSERT INTO paciente (pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado) 
    values($1,$2,$3,$4,$5,$6,$7,$8,$9,true)`,[pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado])
    res.json({
        message:'Paciente creado correctamente',
        body:{
            pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado
        }
    })
}
const putUpdatePaciente =async (req,res)=>{
    const {pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado}=req.body
    const response = await db.any(`UPDATE paciente set pac_nombres=$2,pac_apellidos=$3,pac_genero=$4,pac_nacionalidad=$5,pac_fechanac=$6,pac_direccion=$7,pac_correo=$8,pac_telefono=$9,pac_estado=$10
    where pac_cedula=$1`,[med_cedula,med_nombres,med_apellidos,med_telefono,med_direccion,med_correo,med_estado])
    res.json({
        message:'Paciente actualizada correctamente',
        body:{
            pac_cedula,pac_nombres,pac_apellidos,pac_genero,pac_nacionalidad,pac_fechanac,pac_direccion,pac_correo,pac_telefono,pac_estado
        }
    })
}
const deletePaciente =async (req,res)=>{
    const {pac_cedula}=req.query
    const response = await db.any(`UPDATE paciente set pac_estado=false  
    where pac_cedula=$1`,[pac_cedula])
    res.json({
        message:'Paciente eliminado correctamente',
        body:{
            pac_cedula
        }
    })
}

const getConsultas =async (req,res)=>{
    const response = await db.any('select * from consultorio where con_estado=true')
    res.json(response)
}
const postCreateConsultorio =async (req,res)=>{
    const {con_sala_id,hos_id,con_nombre,con_piso,con_disponibilidad,con_estado}=req.body
    const response = await db.any(`INSERT INTO consultorio (con_sala_id,hos_id,con_nombre,con_piso,
        con_disponibilidad,con_estado) 
        values($1,$2,$3,$4,true,true) returning*`,[con_sala_id,hos_id,con_nombre,con_piso,con_disponibilidad,con_estado])
    res.json(response)
}

const getHospitales =async (req,res)=>{
    const response = await db.any('select * from hospital where hos_estado=true')
    res.json(response)
}

const postCreateHospital =async (req,res)=>{
    const {hos_id,hos_nombre,hos_direccion,hos_estado}=req.body
    const response = await db.any(`INSERT INTO hospital (hos_id,hos_nombre,hos_direccion,hos_estado) 
    values($1,$2,$3,true)`,[hos_id,hos_nombre,hos_direccion,hos_estado])
    res.json({
        message:'Hospital creado correctamente',
        body:{
            hos_id,hos_nombre,hos_direccion,hos_estado
        }
    })
}
const putUpdateHospital =async (req,res)=>{
    const {hos_id,hos_nombre,hos_direccion,hos_estado}=req.body
    const response = await db.any(`UPDATE hospital set hos_nombre=$2,hos_direccion=$3,hos_estado=$4
    where hos_id=$1`,[hos_id,hos_nombre,hos_direccion,hos_estado])
    res.json({
        message:'Hospital actualizada correctamente',
        body:{
            hos_id,hos_nombre,hos_direccion,hos_estado
        }
    })
}
const deleteHospital =async (req,res)=>{
    const {hos_id}=req.query
    const response = await db.any(`UPDATE hospital set hos_estado=false  
    where hos_id=$1`,[hos_id])
    res.json({
        message:'Hospital eliminado correctamente',
        body:{
           hos_id
        }
    })
}
const getEspecialidades =async (req,res)=>{
    const response = await db.any('select * from especialidades where esp_estado=true')
    res.json(response)
}
const postCreateEspecialidad =async (req,res)=>{
    const {esp_id,esp_nombre,esp_estado}=req.body
    const response = await db.any(`INSERT INTO especialidades (esp_id,esp_nombre,esp_estado) 
    values($1,$2,true)`,[esp_id,esp_nombre,esp_estado])
    res.json({
        message:'Especialidad creado correctamente',
        body:{
            esp_id,esp_nombre,esp_estado
        }
    })
}

const putUpdateEspecialidad =async (req,res)=>{
    const {esp_id,esp_nombre,esp_estado}=req.body
    const response = await db.any(`UPDATE especialidades set esp_nombre=$2,esp_estado=$3
    where esp_id=$1`,[esp_id,esp_nombre,esp_estado])
    res.json({
        message:'Especialidad actualizada correctamente',
        body:{
            esp_id,esp_nombre,esp_estado
        }
    })
}

const deleteEspecialidad =async (req,res)=>{
    const {esp_id}=req.query
    const response = await db.any(`UPDATE especialidades set esp_estado=false  
    where esp_id=$1`,[esp_id])
    res.json({
        message:'Especialidad eliminado correctamente',
        body:{
            esp_id
        }
    })
}
const postCreateMedicoEspecialidad =async (req,res)=>{
    const {esp_id,med_cedula}=req.body
    const response = await db.any(`INSERT INTO medicoespecialidad (esp_id,med_cedula) 
    values($1,$2)`,[esp_id,med_cedula])
    res.json({
        message:'Especialidad Medico creada correctamente',
        body:{
            esp_id,med_cedula
        }
    })
}

const getCitas =async (req,res)=>{
    const response = await db.any('select * from citas where cita_estado=true')
    res.json(response)
}
const postCreateCita =async (req,res)=>{
    const {cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,cita_observaciones}=req.body
    const response = await db.any(`INSERT INTO citas (cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,
        cita_observaciones,cita_activa,cita_estado) 
        values($1,$2,$3,$4,$5,$6,$7,true,true) returning*`,[cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,cita_observaciones])
    res.json(response)
}

const putUpdateCita =async (req,res)=>{
    const {cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,cita_observaciones,cita_activa,cita_estado}=req.body
    const response = await db.any(`UPDATE citas set pac_cedula=$2,med_cedula=$3,con_sala_id=$4,cita_fecha=$5,cita_hora=$6,
    cita_observaciones=$7,cita_activa=$8,cita_estado=$9
    where cita_id=$1`,[cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,cita_observaciones,cita_activa,cita_estado])
    res.json({
        message:'Cita actualizada correctamente',
        body:{
            cita_id,pac_cedula,med_cedula,con_sala_id,cita_fecha,cita_hora,cita_observaciones,cita_activa,cita_estado
        }
    })
}
const deleteCita =async (req,res)=>{
    const {cita_id}=req.query
    const response = await db.any(`UPDATE citas set cita_estado=false  
    where cita_id=$1`,[cita_id])
    res.json({
        message:'Cita eliminado correctamente',
        body:{
            cita_id
        }
    })
}



module.exports={
    getMedicos,
    getMedicosById,
    postCreateMedico,
    putUpdateMedico,
    deleteMedico,
    getPacientes,
    getPacientesById,
    postCreatePaciente,
    putUpdatePaciente,
    deletePaciente,
    getConsultas,
    postCreateConsultorio,
    getHospitales,
    postCreateHospital,
    putUpdateHospital,
    deleteHospital,
    getEspecialidades,
    postCreateEspecialidad,
    putUpdateEspecialidad,
    deleteEspecialidad,
    postCreateMedicoEspecialidad,
    getCitas,
    postCreateCita,
    putUpdateCita,
    deleteCita
}
