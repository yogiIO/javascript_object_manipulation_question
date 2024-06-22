function countUniqueUsers(data) {
    const uniqueUsers = new Set(data.map(entry => entry.userId));
    return uniqueUsers.size;
}

function mostCommonActivityType(data) {
    const activityCount = {};
    data.forEach(entry => {
        activityCount[entry.activityType] = (activityCount[entry.activityType] || 0) + 1;
    });
    
    let mostCommon = null;
    let maxCount = 0;
    for (const [activity, count] of Object.entries(activityCount)) {
        if (count > maxCount) {
            mostCommon = activity;
            maxCount = count;
        }
    }
    return mostCommon;
}

function generateUserTimelines(data) {
    const userTimelines = {};
    data.forEach(entry => {
        if (!userTimelines[entry.userId]) {
            userTimelines[entry.userId] = [];
        }
        userTimelines[entry.userId].push({ activityType: entry.activityType, timestamp: entry.timestamp });
    });
    
    for (const userId in userTimelines) {
        userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
    
    return userTimelines;
}
