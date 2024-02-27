import commentModel from "../../model/comment/index.js";
import userModel from "../../model/user/index.js";
import postModel from "../../model/post/index.js";
const commentController = {
    create: async (req, res) => {
      const payload = req.body;
  
      const comment = await commentModel.create({
        content: payload.content,
        postId: payload.postId,
        userId: payload.userId,
      });
  
      res.json({
        message: "comment created",
        comment,
      });
    },
    update: async (req, res) => {
        const payload = req.body;
        const params = req.params;
    
        const comment = await commentModel.findByPk(params.commentId);
        if (!comment) {
          return res.status(404).json({
            message: "NO data found",
          });
        }
    
        comment.content = payload.content;
        //post.description = payload.description;
    
        await comment.save();
    
        res.json({
          message: "comment updated",
          comment,
        });
      },
    
      getAll: async (req, res) => {
        const comment = await commentModel.findAll({
          include: [userModel],
          include:[postModel]
        });
        res.json({
          comment,
        });
      },
    };
    
    export default commentController;