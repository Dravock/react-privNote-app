const getRecordsForWorkout = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getRecordsForWorkout
    }