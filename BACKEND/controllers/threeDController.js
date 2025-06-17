import ThreeDChartModel from "../models/ThreeDChartModel.js";


export const create3DChart = async (req, res) => {
    try {
        
        const { chartName, chartType, value1, value2, value3 } = req.body;

        if( !chartName || !chartType, !value1 || !value2 || !value3 ) {
            return res.status(400).json({ success : false, message : "Please fill all the necessary fields!", });
        }

        const threeDChart = new ThreeDChartModel({ chartName, chartType, value1, value2, value3});
        await threeDChart.save();

        return res.status(200).json({ success : true, message : "Chart data saved successfully", data: threeDChart});

    } catch (error) {
        res.status(500).json({success : false, message : 'Server Error', error: error.message});
    }
}

export const getThreeDCharts = async (req, res) => {
    try {
    const charts = await ThreeDChartModel.find().sort({ _id: -1 }); // optional: sort by latest
    res.status(200).json({ success: true, charts, message : "All the 3D charts data fetched successfully" }); // ✅ wrap in object with 'success' and 'charts'
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch all the charts!',
      error: error.message,
    });
  }
}

export const deleteThreeDChart = async (req, res) => {
    try {
    
    const { id } = req.params;

    const deletedChart = await ThreeDChartModel.findByIdAndDelete(id);
    if(!deletedChart) {
      return res.status(404).json({ success : false, message: "Chart Not Found"})
    }

    return res.status(200).json({ success : true, message: "Chart Deleted Successfully"});

  } catch (error) {
    res.status(500).json({ success : false, message: "Server Error", error: error.message});
  }
}