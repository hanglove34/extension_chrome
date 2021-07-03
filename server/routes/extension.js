module.exports = {
    setResultResearch: function(req, res) {
        console.log("request")
        var result = req.body.resultResearch;
        console.log(result);
        return res.status(200).json({'success':'success'});
    }
}