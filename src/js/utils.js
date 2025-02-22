/**
 * Compute the euclidean distance between two points
 * @param {Point} p1
 * @param {Point} p2
 */
export function computeDist(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/**
 * Return the current time in ms since 1970
 * @returns {number}
 */
export function getCurrentTimeMs() {
    return new Date().getTime();
}

export function getSubDir() {
    const url = document.URL.substr(0, document.URL.lastIndexOf("/"));
    const urlSplit = url.split("/");
    let subdir = "";
    for (let i = 3; i < urlSplit.length; i++) {
        subdir = subdir + "/" + urlSplit[i];
    }

    return subdir;
}

export function getWBDataURL() {
    // console.log(window.location.host);
    return window.location.host == "localhost:8080"
        ? "http://localhost:8072/vss/vcp-admin-ui/api/question_wb_data"
        : "https://admin.talentacad.com/api/question_wb_data";
}
