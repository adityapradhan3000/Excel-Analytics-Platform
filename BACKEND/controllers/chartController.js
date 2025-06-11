import chartModel from "../models/chartModel.js";


export const createChart = async (req, res) => {
    try {
        const { chartName, chartType, value1, value2 } = req.body;

        if( !chartName || !chartType || !value1 || !value2 ) {
            return res.status(400).json({success : false, message : 'Please fill up the required fields!'});
        }

        const newChart = new chartModel({ chartName, chartType, value1, value2 });
        await newChart.save();

        res.status(200).json({success : true, message : 'Chart data is saved Successfully!', data: newChart });

    } catch (error) {
        res.status(500).json({success : false, message : 'Server Error', error: error.message});
    }
}

export const getCharts = async (req, res) => {
    try {
        
        const charts = await chartModel.find();
        res.status(200).json(charts);

    } catch (error) {
        res.status(500).json({success : false, message : 'Failed to fetch all the charts!', error: error.message});
    }
};