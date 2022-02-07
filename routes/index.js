const { Router } = require("express");
const {getMedicos,getMedicosById,postCreateMedico,putUpdateMedico,deleteMedico,getPacientes,getPacientesById,postCreatePaciente,putUpdatePaciente,
    deletePaciente,getCitas,postCreateCita,putUpdateCita,deleteCita,getConsultas,postCreateConsultorio,
    getHospitales,postCreateHospital,putUpdateHospital,deleteHospital,getEspecialidades,postCreateEspecialidad,putUpdateEspecialidad,deleteEspecialidad,
    postCreateMedicoEspecialidad,
    getMedicoEspecialidades} = require("../controller/citas.controller");

const router= Router()
router.get("/medicos",getMedicos)
router.get("/medicosById",getMedicosById)
router.post("/medicos",postCreateMedico)
router.put("/medicos",putUpdateMedico)
router.put("/medicos",deleteMedico)

router.get("/paciente",getPacientes)
router.get("/pacientesById",getPacientesById)
router.post("/pacienteInsert",postCreatePaciente)
router.put("/paciente",putUpdatePaciente)
router.delete("/paciente",deletePaciente)

router.get("/consultorios",getConsultas)
router.post("/consultorios",postCreateConsultorio)


router.get("/hospitales",getHospitales)
router.post("/hospitales",postCreateHospital)
router.put("/hospitales",putUpdateHospital)
router.delete("/hospitales",deleteHospital)

router.get("/especialidades",getEspecialidades)
router.post("/especialidades",postCreateEspecialidad)
router.put("/especialidades",putUpdateEspecialidad)
router.delete("/especialidades",deleteEspecialidad)

//medico-especialidad
router.get("/medicoespecialidades",getMedicoEspecialidades)
router.post("/medicoespecialidades",postCreateMedicoEspecialidad)


//citas-medicas
router.get("/citas",getCitas)
router.post("/citas",postCreateCita)
router.put("/citas",putUpdateCita)
router.delete("/citas",deleteCita)

module.exports=router