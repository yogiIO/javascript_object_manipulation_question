const data = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:05:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 2, activityType: 'login', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:25:00Z' },
    { userId: 3, activityType: 'view', timestamp: '2024-06-14T10:30:00Z' },
];

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

console.log("Number of unique users:", countUniqueUsers(data));
console.log("Most common activity type:", mostCommonActivityType(data));
console.log("User timelines:", generateUserTimelines(data));
