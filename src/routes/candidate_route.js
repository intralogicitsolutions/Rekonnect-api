let express = require('express');
let router = express.Router();
let func = require('../config/function');
const candidateController = require('../controllers/candidate_controller');
router.post(func.urlCons.URL_CANDIDATE_REGISTRATION, candidateController.candidateRegistration);
router.post(func.urlCons.URL_CANDIDATE_LOGIN, candidateController.candidateLogin);
router.get(func.urlCons.URL_GET_CANDIDATE, candidateController.getCandidateList);
router.post(func.urlCons.URL_LINKED_LOGIN, candidateController.linkedInLogin);
module.exports = router;