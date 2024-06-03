import UserModel from "../Models/UserModel.js";

// const UsersController = {
//   getList: async (req, res) => {
//     try {
//       const Users = await UserModel.find();//ללא סינון
//       const filtered1 = await UserModel.find({ complete: true });//סינון 1
//       const filtered2 = await UserModel.where('isComplete', false);//סינון 2
//       res.json({ Users, filtered1, filtered2});
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   getById: async (req, res) => {
//     try {
//       const User = await UserModel.findById(req.params.id);//שליפה לפי מזהה
//       res.json(User);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   add: async (req, res) => {
//     const { name } = req.body;
//     try {
//       const newUser = await UserModel.create({ name });//הוספת חדש
//       res.json(newUser);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   update: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });//עדכון לפי מזהה
//       res.json(updatedUser);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   delete: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await UserModel.findByIdAndDelete(id);//מחיקה לפי מזהה
//       res.json(deleted);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },
// };

// export default UsersController;

const UsersController = {
  getList: async (req, res) => {
    try {
      const Users = await User.find();//ללא סינון

      res.json({ Users});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },


  getById: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id); // שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const newUser = await UserModel.create({ name, email, password }); // הוספת חדש
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      }); // עדכון לפי מזהה
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await UserModel.findByIdAndDelete(id); // מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UsersController;