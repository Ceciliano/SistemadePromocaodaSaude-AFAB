import Consult from '../models/Consult';
import ConsultResposta from '../models/ConsultResposta';
import Respostas from '../models/Respostas';
import Plan from '../models/Plan';

class ConsultController {
  async index(req, res) {
    const order = [['created_at', 'desc']];
    const data = await Consult.findAndCountAll({
      where: {
        student_id: req.params.student_id,
      },
      order,
    }).catch(error => {
      console.log(error);
      res.status(400).send(error);
    });

    return res.json({
      consults: data.rows,
      total: data.count,
    });
  }

  async store(req, res) {
    const { respostas, student_id, baixocontrole, autocontrole } = req.body;
    
    const newRecord = await Consult.create({
      result: 'test',
      student_id,
      baixocontrole,
      autocontrole,
    });

    respostas.map(async key => {
      const resposta = await Respostas.findByPk(key.id, {
        include: [
          {
            model: Plan,
            as: 'plan',
          },
        ],
      });

      await ConsultResposta.create({
        resposta: resposta.dataValues.title,
        pergunta: resposta.dataValues.plan.dataValues.title,
        consult_id: newRecord.dataValues.id,
      });
    });

    return res.json(newRecord);
  }
}

export default new ConsultController();