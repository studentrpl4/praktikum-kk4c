const User = require('../models/User')

module.exports = {
    index: async (req, res) => {
        try {
            const user = await User.find()
            if(user.length > 0){
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url
              })
            }else{
                res.json({
                    status: false,
                    massage: "data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
        },
        show: async (req, res) => {
            try {
                const user = await User.findById(req.params.id)  
                res.json({
                    status: true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    massage: "Data Berhasil Diubah"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
        },
        store: async (req, res) => {
            try {
                const user = await User.create(req.body)
                res.status(200).json({
                    status: true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    massage: "Data Berhasil Didapat"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
        },
        update: async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                })  
                res.json({
                    status: true,
                    data: user  ,
                    method: req.method,
                    url: req.url,
                    massage: "Data Berhasil Diubah"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
        },
        delete: async (req, res) => {
            try {
                await User.findByIdAndDelete(req.params.id)
                res.json({
                    status: true,
                    method: req.method,
                    url: req.url,
                    massage: "Data Berhasil Dihapus"
                  })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
          }
}