// import LinkModel from "../Models/LinkModel.js";

// const LinkController = {
//   getList: async (req, res) => {
//     try {
//       const Link = await LinkModel.find();//ללא סינון
//       const filtered1 = await LinkModel.find({ complete: true });//סינון 1
//       const filtered2 = await LinkModel.where('isComplete', false);//סינון 2
//       res.json({ Link, filtered1, filtered2});
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   getById: async (req, res) => {
//     try {
//       const Link = await LinkModel.findById(req.params.id);//שליפה לפי מזהה
//       res.json(Link);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   add: async (req, res) => {
//     const { name } = req.body;
//     try {
//       const newLink = await LinkModel.create({ name });//הוספת חדש
//       res.json(newLink);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   update: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });//עדכון לפי מזהה
//       res.json(updatedLink);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },

//   delete: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await LinkModel.findByIdAndDelete(id);//מחיקה לפי מזהה
//       res.json(deleted);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//   },
// };

// export default LinkController;
import LinkModel from "../Models/LinkModel.js";

const LinkController = {
  getList: async (req, res) => {
    try {

      const Link = await Link.find();
      res.json({ Link});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },


  getById: async (req, res) => {
    try {
      const Link = await LinkModel.findById(req.params.id); // שליפה לפי מזהה
      res.json(Link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await LinkModel.create({ originalUrl }); // הוספת חדש
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await LinkModel.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      ); // עדכון לפי מזהה
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinkModel.findByIdAndDelete(id); // מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  
  redirect: async (req, res) => {
    const { id } = req.params;
    try {
      // מצא את הקישור במסד הנתונים
      const link = await LinkModel.findById(id);

      if (!link) {
        return res.status(404).json({ message: 'הקישור לא נמצא' });
      }

      // הוסף קליק חדש
      // const ipAddress = req.ip;
      const click = {
        insertedAt: new Date(),
        ipAddress: req.ip,
        targetParamValue: targetParamValue
      };
      link.clicks.push({ click });

      // שמור את השינויים במסד הנתונים
      await link.save();

      // בצע הפניה לקישור המקורי
     res.redirect(link.originalUrl);
    } catch (e) {
      console.error(e.message);
      res.status(500).send('שגיאת שרת');
    }
  },
  getClicksByTarget: async (req, res) => {
    const { id } = req.params;

    try {
        const link = await Link.findById(id);

        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }

        const clicksByTarget = link.clicks.reduce((acc, click) => {
            const target = click.targetParamValue || 'unknown';
            if (!acc[target]) {
                acc[target] = 0;
            }
            acc[target]++;
            return acc;
        }, {});

        res.json({ clicksByTarget });
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Internal Server Error');
    }
}

};

export default LinkController;
