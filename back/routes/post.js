const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, Image } = require('../models');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); 
      const basename = path.basename(file.originalname, ext); 
      done(null, basename + '_' + new Date().getTime() + ext); 
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, 
});

router.get('/loadpost', async (req, res, next) => {
  try {
    const post = await Post.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      order: [['createdAt', 'DESC']],
      include: {
        model: Image,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    })
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return next(error);
  }
})

router.get('/loadproduct/:Id', async (req, res, next) => {
  try {
    console.log(req.params.Id);
    const post = await Post.findOne({
      where: {id: req.params.Id},
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: {
        model: Image,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    })
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return next(error);
  }
})

router.post('/upload', upload.single('image') ,(req, res) => {
  console.log(req.file);
  res.status(200).json(req.file.filename)
})

router.post('/addpost', upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      price: req.body.price,
      product: req.body.product,
      information: req.body.information,
    })
    if (req.body.image) {
      await Image.create({
        src: req.body.image,
        PostId: post.id
      })
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/addbasket', async (req, res, next) => {
  try {
    const basket = await Post.findOne({
      where: { id: req.body.id},
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: {
        model: Image,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    })
    return res.status(200).json(basket);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;