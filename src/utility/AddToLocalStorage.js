const getInstalledApp = () => {
    const installedApps = localStorage.getItem("installed")
    if (installedApps) {
        const storedAppsData = JSON.parse(installedApps)
        return storedAppsData
    }
    else {
        return []
    }
}

const addToInstallation = (id) => {
    const storedAppsData = getInstalledApp();
    if (storedAppsData.includes(id)) {
        alert("already exists!")
    }
    else {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem("installed", data)
    }
}

const removeFromInstallation = (id) => {
    const storedAppsData = getInstalledApp();
    const updatedApps = storedAppsData.filter(app => app.id !== id);
    localStorage.removeItem("installed", JSON.stringify(updatedApps));
    console.log(updatedApps)
}

export { addToInstallation, getInstalledApp, removeFromInstallation }