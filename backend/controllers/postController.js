const Post = require('../models/Post');

class PostController {

    async CreatePost(req, res) {
      try {
        const {userId, title, text} = req.body;
        const post = await Post.Create({userId, title, text});

        return res.status(201).json(post);

      } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar post' });
      }
    }
  
    async GetPosts(req, res) {
        try {
            const posts = await Post.findAll()
            return res.status(200).json(posts);
      
          } catch (error) {
            console.error('Erro ao buscar posts:', error);  
            return res.status(500).json({ error: 'Erro ao buscar posts' });
          }
    }
  
    async UpdatePost(req, res) {
        try {
          const { id } = req.params;
          const { title, text} = req.body;
    
          const post = await post.findByPk(id);
    
          if (!post) {
            return res.status(404).json({ error: 'Post não encontrado' });
          }
    
          await post.update({ title, text});
    
          return res.status(200).json(post);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Erro ao atualizar post' });
        }
      }
    
      async DeletePost(req, res) {
        try {
          const { id } = req.params;
    
          const post = await post.findByPk(id);
    
          if (!post) {
            return res.status(404).json({ error: 'Post não encontrado' });
          }
    
          await post.destroy();
    
          return res.status(204).send(); 
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Erro ao excluir Post' });
        }
      }
  
  }
  
  module.exports = new PostController(); 