// Converts from degrees to radians.
Math.toRadians = function (degrees) {
    return degrees * Math.PI / 180;
};


function distanceFromGrenoble(city) {
    // console.log("implement me !");
    var GrenobleLat = 45.166667;
    var GrenobleLong = 5.716667;
    var cityLat = city.latitude;
    var cityLong = city.longitude;
    var R = 6371;
    var grenobleRadLat = Math.toRadians(GrenobleLat);
    var cityRadLat = Math.toRadians(cityLat);
    var lat = Math.toRadians(cityLat - GrenobleLat);
    var long = Math.toRadians(cityLong - GrenobleLong);
    var a = Math.sin(lat / 2) * Math.sin(lat / 2) +
        Math.cos(grenobleRadLat) * Math.cos(cityRadLat) *
        Math.sin(long / 2) * Math.sin(long / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

function swap(i, j) // Swap the values in array csvData
{
    var tmp = csvData[i];
    csvData[i] = csvData[j];
    csvData[j] = tmp;
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
    // console.log("implement me !");
}

function isLess(A, B) {
    if (A.dist < B.dist) {
        return true;
    }
    displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)
}

function insertsort() {
    for (var i = 1; i < csvData.length; i++) {
        for (var k = i; k > 0; k--) {
            if (isLess(csvData[k], csvData[k - 1])) {
                swap(k, k - 1);
            }
        }
    }
}

function selectionsort() {
    // console.log("implement me !");
    for (var i = 0; i < csvData.length; i++) {
        var k = i;
        for (var j = i + 1; j < csvData.length; j++) {
            if (isLess(csvData[j], csvData[k])) {
                k = j;
                if (isLess(csvData[k], csvData[i])) {
                    swap(k, i);
                }
            }
        }
    }
}

function bubblesort() {
    // console.log("implement me !");
    for (let i = 0; i < csvData.length; i++) {
        let swapped = false;
        for (let j = csvData.length - 1; j >= i + 1; j--) {
            if (isLess(csvData[j], csvData[j - 1])) {
                swap(j, j - 1);
                swapped = true;
            }
        }
        if (swapped === false) {
            return
        }
    }
}

function shellsort() {
    console.log("implement me !");
}

function mergesort(data) {
    console.log("implement me !");
}

function heapsort(data) {
    console.log("implement me !");
}

function quicksort() {
    console.log("implement me !");
    var n = csvData.length;
    sort1(0, n - 1)

}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sort1(iDeb, iFin) {
    let rand = random(iDeb, iFin);
    swap(iDeb, rand);
    let k = iDeb;
    for (let i = k + 1; i <= iFin; i++) {
        if (isLess(csvData[i], csvData[iDeb])) {
            swap(k = k + 1, i);
        }
    }
    swap(iDeb, k);
    if (iDeb < k - 1) {
        sort1(iDeb, k - 1);
    }
    if (k + 1 <= iFin) {
        sort1(k + 1, iFin);
    }
}

function quick3sort(data) {
    console.log("implement me !");
}


var algorithms = {
    'insert': insertsort,
    'select': selectionsort,
    'bubble': bubblesort,
    'shell': shellsort,
    'merge': mergesort,
    'heap': heapsort,
    'quick': quicksort,
    'quick3': quick3sort
}

function sort(algo) {
    if (!algorithms.hasOwnProperty(algo)) {
        throw 'Invalid algorithm ' + algo;
    }
    var sort_fn = algorithms[algo];
    sort_fn();
}
