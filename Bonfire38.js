var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line


function updateRecords(id, prop, value) {
	if(addTracks(prop)){
		if(createEmptyTracksArrayIfUndefined(id, prop)) {
            collection[id][prop] = [];
        }
        collection[id][prop].push(value);
    }
	else if(addIfPropDoesNotExistAddValue(id, prop)){
        collection[id][prop] = value;
    }
    if(deleteIfPropIsUndefined(value)){
        delete collection[id][prop];
    }
    return collection[id];
}

function deleteIfPropIsUndefined(value) {
    return value === "";
}
function addIfPropDoesNotExistAddValue(id, prop) {
    return !collection[id].hasOwnProperty(prop);
}
function addTracks(prop) {
    return prop === "tracks";
}
function createEmptyTracksArrayIfUndefined(id, prop) {
    return collection[id][prop] === undefined;
}
