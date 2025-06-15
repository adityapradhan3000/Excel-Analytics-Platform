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
    const charts = await chartModel.find().sort({ _id: -1 }); // optional: sort by latest
    res.status(200).json({ success: true, charts, message : "All the charts data fetched successfully" }); // ✅ wrap in object with 'success' and 'charts'
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch all the charts!',
      error: error.message,
    });
  }
};

export const deleteCharts = async (req, res) => {
  try {
    
    const { id } = req.params;

    const deletedChart = await chartModel.findByIdAndDelete(id);
    if(!deletedChart) {
      return res.status(404).json({ success : false, message: "Chart Not Found"})
    }

    return res.status(200).json({ success : true, message: "Chart Deleted Successfully"});

  } catch (error) {
    res.status(500).json({ success : false, message: "Server Error", error: error.message});
  }
}

export const getChartStatus = async (req, res) => {
  try {
    const chartTypes =["bar", "line", "pie"]

    const counts = await Promise.all(
      chartTypes.map(async (type) => {
        const count = await chartModel.countDocuments({ chartType: type});
        return { type, count }; 
      })
    );

    res.status(200).json({ success : true, message : "All charts status fetched successfully", stats: counts});
  } catch (error) {
    res.status(500).json({ success : false, message : "Server Error", error: error.message});
  }
}