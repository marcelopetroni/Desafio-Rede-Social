const User = require('../models/User');

class UserController {

  async CreateUser(req, res) {
    try {
      const {name, email, password} = req.body
      const user = await User.create({name, email, password})

      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async GetUsers(req, res) {
    try {
      const users = await User.findAll()
      return res.status(200).json(users);

    } catch (error) {
      console.error('Erro ao buscar usuários:', error);  
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

  async UpdateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      await user.update({ name, email, password });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  async DeleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      await user.destroy();

      return res.status(204).send(); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  }
}

module.exports = new UserController(); 
